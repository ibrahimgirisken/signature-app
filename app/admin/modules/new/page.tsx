'use client'
import ModuleForm from '@/features/module/ModuleForm';
import { moduleService } from '@/services/module.service';
import { ModuleUpdate } from '@/types/module';
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

function ModuleAdd() {
  const router = useRouter();
  const { register, control, handleSubmit,reset, watch, setValue } =
    useForm<ModuleUpdate>({
      defaultValues: {
        departmentId: "",
        moduleName: "",
        code:"",
        status: true
      },
    });

  const onSubmit = async (data: ModuleUpdate) => {
    const alertify = (await import('alertifyjs')).default;
    try {
      const requestData = {
        ...data,
      };

      if (requestData.departmentId === "") {
        const { departmentId, ...dataDetail } = requestData;
        await moduleService.create(dataDetail);
      } else {
        moduleService.create(requestData);
      }

      alertify.set("notifier", "position", "top-center");
      alertify.success("Modül başarıyla eklendi! ✅");
      router.push('/admin/modules');
    } catch (error) {
      console.error("Ekleme sırasında hata oluştu:", error);
      alertify.set("notifier", "position", "top-center");
      alertify.error("Departman eklenirken hata oluştu.");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0 text-dark fw-bold">Modül Ekleme</h4>
        <Button type="submit" variant="success" className="px-4 fw-bold shadow-sm">
          Değişiklikleri Kaydet
        </Button>
      </div>

      <ModuleForm
        register={register}
        watch={watch}
        setValue={setValue}
        reset={reset}
      />
    </Form>
  )
}
export default ModuleAdd;