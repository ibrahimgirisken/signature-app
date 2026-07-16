'use client'
import ModuleForm from '@/features/module/ModuleForm'
import { moduleService } from '@/services/module.service'
import { ModuleUpdate } from '@/types/module'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function ModuleEdit() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [loading, setLoading] = useState<boolean>(true)
  const [submitting, setSubmitting] = useState<boolean>(false)

  const { register, control, handleSubmit, reset, watch, setValue } =
    useForm<ModuleUpdate>({
      defaultValues: {
        moduleName: "",
        departmentId: "",
        code: "",
        status: false
      },
    })

  const loadDepartmentData = async () => {
    try {
      setLoading(true)
      const data = await moduleService.getById(id)
      if (data) {
        reset({
          moduleName: data.moduleName || "",
          departmentId: data.departmentId || "",
          code: data.code || "",
          status: data.status || false
        })
      }
    } catch (error) {
      console.error("Module yüklenirken hata oluştu:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (moduleId: string) => {
    if (!window.confirm("Bu modülü silmek istediğinize emin misiniz?")) return // Güvenlik önlemi

    try {
      await moduleService.delete(moduleId)
      router.push('/admin/departments')
    } catch (error) {
      console.error("Departman silinirken hata oluştu:", error)
    }
  }

  useEffect(() => {
    if (id) {
      loadDepartmentData()
    }
  }, [id])

  const onSubmit = async (data: ModuleUpdate) => {
    try {
      setSubmitting(true)
      const requestData = {
        ...data,
        id: id
      }

      if (requestData.departmentId === "") {
        const { departmentId, ...dataDetail } = requestData
        await moduleService.update(dataDetail)
      } else {
        await moduleService.update(requestData)
      }

      router.push('/admin/modules')
    } catch (error) {
      console.error("Güncelleme sırasında hata oluştu:", error)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return <div className="p-6 text-center text-zinc-500 animate-pulse">Veriler yükleniyor...</div>
  }

  return (
    <div>
      <h2 className="mb-4">Firma İmza Detayları Düzenleme</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <ModuleForm
          register={register}
          watch={watch}
          setValue={setValue}
          reset={reset}
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

export default ModuleEdit