'use client'
import DepartmentForm from '@/features/department/DepartmentForm'
import { departmentService } from '@/services/department.service'
import { companyService } from '@/services/company.service'
import { Company } from '@/types/company'
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
  const [companies, setCompanies] = useState<Company[]>([]);

  const { register, handleSubmit, reset, watch, setValue } =
    useForm<DepartmentUpdate>({
      defaultValues: {
        departmentName: "",
        companyId: "",
        status: true
      },
    });

  useEffect(() => {
    const loadAllData = async () => {
      try {
        setLoading(true);

        // KRİTİK NOKTA: İki API isteğini aynı anda (paralel) başlatıyoruz
        const [departmentData, companiesData] = await Promise.all([
          departmentService.getById(id),
          companyService.list() // Tüm şirketleri çeken servisiniz
        ]);

        if (companiesData) {
          setCompanies(companiesData);
        }

        if (departmentData) {
          reset({
            departmentName: departmentData.departmentName || "",
            companyId: departmentData.companyId || "",
            status: departmentData.status ?? true
          });
        }
      } catch (error) {
        console.error("Veriler yüklenirken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadAllData();
    }
  }, [id, reset]);

  const handleDelete = async (departmentId: string) => {
    if (!window.confirm("Bu departmanı silmek istediğinize emin misiniz?")) return;
    try {
      await departmentService.delete(departmentId);
      router.push('/admin/departments');
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

  if (loading) {
    return <div className="p-6 text-center text-zinc-500 animate-pulse">Veriler hazırlanıyor...</div>;
  }

  return (
    <div>
      <h2 className="mb-4">Firma İmza Detayları Düzenleme</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* API'den hazır gelen şirket listesini alt bileşene gönderiyoruz */}
        <DepartmentForm 
          register={register}
          watch={watch}
          setValue={setValue} 
          companies={companies} // <-- Artık veriler hazır gidiyor
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