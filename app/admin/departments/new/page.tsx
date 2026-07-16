'use client'
import DepartmentForm from '@/features/department/DepartmentForm'
import { departmentService } from '@/services/department.service';
import { DepartmentUpdate } from '@/types/department';
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

function DepartmentAdd() {
  const router = useRouter();
  const { register, control, handleSubmit, watch, setValue } =
    useForm<DepartmentUpdate>({
      defaultValues: {
        companyId: "",
        departmentName: "",
        status: true
      },
    });

    const onSubmit = async (data: DepartmentUpdate) => {
    const alertify = (await import('alertifyjs')).default;
    try {
      const requestData = {
        ...data, 
      };

      if (requestData.companyId === "") {
        const { companyId, ...dataDetail } = requestData;
        await departmentService.create(dataDetail);
      } else {
        departmentService.create(requestData);
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0 text-dark fw-bold">Departman Ekleme</h4>
        <Button type="submit" variant="success" className="px-4 fw-bold shadow-sm">
          Değişiklikleri Kaydet
        </Button>
      </div>

      <DepartmentForm
        register={register}
        watch={watch}
        setValue={setValue}
      />
    </Form>
  )
}
export default DepartmentAdd;