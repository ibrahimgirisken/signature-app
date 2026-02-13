'use client'
import CompanyForm from '@/features/company/components/CompanyForm'
import { useCrud } from '@/hooks/useCrud'
import { companyService } from '@/services/company.service'
import { CompanyRequest, CompanyResponse} from '@/types/company'
import { useParams, useRouter } from 'next/navigation'

function CompanyEdit() {
      const router = useRouter()
      const params = useParams();
      const id = params.id as string;
      const { useGetById } = useCrud<CompanyRequest, CompanyResponse>("company", companyService as any);
      const { data, isLoading, error } = useGetById(id as string);
    console.log(data);
  return (
    <>
      <h2>Firma Düzenleme</h2>
            {data && (
                <CompanyForm initialData={data}
                    onSuccess={() => {
                        console.log("Firma Güncellendi"),
                            router.push('/admin/companies')
                    }} />
            )}
    </>
  )
}

export default CompanyEdit