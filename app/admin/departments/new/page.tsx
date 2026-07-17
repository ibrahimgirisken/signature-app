'use client'
import DepartmentForm from '@/features/department/DepartmentForm'
import { departmentService } from '@/services/department.service';
import { companyService } from '@/services/company.service';
import { Company } from '@/types/company';
import { DepartmentUpdate } from '@/types/department';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

function DepartmentAdd() {
  const router = useRouter();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { register, handleSubmit, watch, setValue } =
    useForm<DepartmentUpdate>({
      defaultValues: {
        companyId: "",
        departmentName: "",
        status: true
      },
    });

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        setLoading(true);
        const companiesData = await companyService.list();
        if (companiesData) {
          setCompanies(companiesData);
        }
      } catch (error) {
        console.error("Şirketler yüklenirken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCompanies();
  }, []);

  const onSubmit = async (data: DepartmentUpdate) => {
    const alertify = (await import('alertifyjs')).default;
    try {
      setSubmitting(false); // Buton kilitlemesi için state'i güncel tutuyoruz
      const requestData = {
        ...data, 
      };

      if (requestData.companyId === "") {
        const { companyId, ...dataDetail } = requestData;
        await departmentService.create(dataDetail);
      } else {
        await departmentService.create(requestData);
      }
      
      alertify.set("notifier", "position", "top-center");
      alertify.success("Departman başarıyla eklendi! ✅");
      router.push('/admin/departments');
    } catch (error) {
      console.error("Ekleme sırasında hata oluştu:", error);
      alertify.set("notifier", "position", "top-center");
      alertify.error("Departman eklenirken hata oluştu.");
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-zinc-500 animate-pulse">
        Şirket bilgileri hazırlanıyor...
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0 text-dark fw-bold">Departman Ekleme</h4>
        <Button 
          type="submit" 
          variant="success" 
          className="px-4 fw-bold shadow-sm"
          disabled={submitting}
        >
          {submitting ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
        </Button>
      </div>

      <DepartmentForm
        register={register}
        watch={watch}
        setValue={setValue}
        companies={companies}
      />
    </Form>
  )
}

export default DepartmentAdd;