'use client'
import CompanyComponentForm from '@/features/company/components/CompanyComponentForm'
import CompanyForm from '@/features/company/components/CompanyForm'
import { useCrud } from '@/hooks/useCrud'
import { companyService } from '@/services/company.service'
import { companyComponentService } from '@/services/companyComponent.service'
import { CompanyComponentResponse, CompanyRequest, CompanyResponse } from '@/types/company'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function CompanyEdit() {
  const router = useRouter()
  const params = useParams();
  const id = params.id as string;

  const { useGetById } = useCrud<CompanyRequest, CompanyResponse>("company", companyService as any);
  const { data, isLoading } = useGetById(id);
  const [companyData, setCompanyData] = useState<Partial<CompanyResponse>>({});
  const [componentData, setComponentData] = useState<CompanyComponentResponse[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (data) {
      setCompanyData(data);
      setComponentData(data.components || []);
    }
  }, [data]);

  const handleGlobalSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      let currentCompanyId = id;

        const { components, ...companyInfo } = companyData;
        await companyService.update(companyInfo as any);

      const componentPromises = componentData.map((component) => {
        const payload = {
          ...component,
          companyId: currentCompanyId,
          label: component.label || "",
          targetUrl: component.targetUrl || "",
          imageUrl: component.imageUrl || "",
        };

        if (component.id && component.id !== "") {
          return companyComponentService.update(payload);
        } else {
          const { id: _, ...createPayload } = payload;
          return companyComponentService.create(createPayload);
        }
      });

      await Promise.all(componentPromises);
      router.push('/admin/companies');
      
    } catch (error) {
      console.error("Kayıt hatası:", error);
      alert("İşlem sırasında bir hata oluştu. Lütfen bilgileri kontrol edin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div>Yükleniyor...</div>;

  return (
    <div className="p-4">
      <h2 className="mb-4">Firma Düzenleme</h2>
      
      <CompanyForm 
        initialData={data} 
        onChange={setCompanyData}
      />

      <div className="my-5 border-t pt-4">
        <h4>Firma Bileşenleri (Sosyal Medya, Logo vb.)</h4>
        <p className="text-muted small">Her bir başlık için bilgileri doldurabilirsiniz.</p>
        
        <CompanyComponentForm 
          initialData={componentData || []} 
          onChange={setComponentData} 
        />
      </div>

      <div className="mt-4 sticky-bottom bg-white p-3 border-top shadow-sm">
        <Button 
          disabled={isSubmitting}
          style={{ minWidth: '10rem' }} 
          variant="primary" 
          onClick={handleGlobalSave}
        >
          Değişiklikleri Güncelle
        </Button>
        <Button 
          variant="secondary" 
          className="ms-2" 
          onClick={() => router.back()}
        >
          İptal
        </Button>
      </div>
    </div>
  )
}

export default CompanyEdit;