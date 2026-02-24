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
  const isEditMode = !!id;

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
    if (isSubmitting) return; // Çift tıklamayı engelle
    
    setIsSubmitting(true);
    try {
      let currentCompanyId = id;

      // --- 1. ADIM: Firma İşlemleri ---
      if (isEditMode) {
        const { components, ...companyInfo } = companyData;
        await companyService.update(companyInfo as any);
      } else {
        const { id: _, components, ...companyInfo } = companyData;
        const response = await companyService.create(companyInfo as any);
        currentCompanyId = response.id; // Yeni oluşan ID
      }

      // --- 2. ADIM: Component İşlemleri ---
      // Veri varsa GÜNCELLE (PUT), yoksa EKLE (POST)
      const componentPromises = componentData.map((component) => {
        const payload = {
          ...component,
          companyId: currentCompanyId, // ID mutlaka enjekte edilmeli
          label: component.label || "",
          targetUrl: component.targetUrl || "",
          imageUrl: component.imageUrl || "",
        };

        // Eğer component'in kendi ID'si varsa bu zaten DB'de vardır (Update)
        // Yoksa yeni oluşturulacaktır (Create)
        if (component.id && component.id !== "") {
          return companyComponentService.update(payload);
        } else {
          // Create işleminde payload'dan id'yi siliyoruz (Backend UUID atıyorsa çakışmaması için)
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
      <h2 className="mb-4">{isEditMode ? 'Firma Düzenleme' : 'Yeni Firma Ekle'}</h2>
      
      {/* Firma Ana Formu */}
      <CompanyForm 
        initialData={data} 
        onChange={setCompanyData}
      />

      <div className="my-5 border-t pt-4">
        <h4>Firma Bileşenleri (Sosyal Medya, Logo vb.)</h4>
        <p className="text-muted small">Her bir başlık için bilgileri doldurabilirsiniz.</p>
        
        {/* Component Formu (Enum listesi ve eşleştirme içeride yapılıyor) */}
        <CompanyComponentForm 
          initialData={data?.components || []} 
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
          {isSubmitting ? 'İşleniyor...' : (isEditMode ? 'Değişiklikleri Güncelle' : 'Firmayı Kaydet')}
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