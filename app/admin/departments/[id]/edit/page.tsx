'use client'
import DepartmentForm from '@/features/department/DepartmentForm'
import { departmentService } from '@/services/department.service'
import { DepartmentUpdate } from '@/types/department'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function DepartmentEdit() {
  const router = useRouter()
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { register, control, handleSubmit, reset, watch, setValue } =
    useForm<DepartmentUpdate>({
      defaultValues: {
        departmentName: "",
        companyId: "",
        status: true
      },
    });

  // DB'den gelen orijinal companyId ve departmentId değerlerini takip etmek için
  const dbCompanyId = watch('companyId');

  useEffect(() => {
    const loadDepartmentData = async () => {
      try {
        setLoading(true);
        const data = await departmentService.getById(id);
        if (data) {
          // reset fonksiyonu formun default değerlerini günceller.
          // options (şirket listesi) child formda yüklenirken bu değerlerin kaybolmaması için 
          // reset işlemini loading durumunu kapatmadan hemen önce yapıyoruz.
          reset({
            departmentName: data.departmentName || "",
            companyId: data.companyId || "",
            status: data.status ?? true
          });
        }
      } catch (error) {
        console.error("Departman yüklenirken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadDepartmentData();
    }
  }, [id, reset]);

  const handleDelete = async (departmentId: string) => {
    if (!window.confirm("Bu departmanı silmek istediğinize emin misiniz?")) return;
    
    try {
      await departmentService.delete(departmentId);
      router.push('/admin/departments'); // URL'i departman listesine yönlendirdik (modules yerine)
    } catch (error) {
      console.error("Departman silinirken hata oluştu:", error);
    }
  };

  const onSubmit = async (data: DepartmentUpdate) => {
    try {
      setSubmitting(true);
      const requestData = {
        ...data,
        id: id
      };

      if (requestData.companyId === "") {
        const { companyId, ...dataDetail } = requestData;
        await departmentService.update(dataDetail);
      } else {
        await departmentService.update(requestData);
      }
      router.push('/admin/departments');
    } catch (error) {
      console.error("Güncelleme sırasında hata oluştu:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // Veritabanından veriler gelene kadar formu hiç render etmiyoruz.
  // Bu sayede "Seçiniz" seçeneğinin varsayılan olarak seçili kalma hatasını önlüyoruz.
  if (loading) {
    return (
      <div className="p-6 text-center text-zinc-500 animate-pulse">
        Form bilgileri hazırlanıyor...
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4">Firma İmza Detayları Düzenleme</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Form alanlarını child bileşene gönderiyoruz */}
        <DepartmentForm 
          register={register}
          watch={watch}
          setValue={setValue} 
        />

        <div className="mt-4 sticky-bottom bg-white p-3 border-top shadow-sm">
          <Button disabled={submitting} type="submit" style={{ minWidth: '10rem' }} variant="primary">
            {submitting ? 'Güncelleniyor...' : 'Değişiklikleri Güncelle'}
          </Button>
          <Button variant="secondary" className="ms-2" onClick={() => router.back()}>İptal</Button>
          <Button variant="danger" className="ms-2" onClick={() => handleDelete(id)}>Sil</Button>
        </div>
      </form>
    </div>
  )
}

export default DepartmentEdit;