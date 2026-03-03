'use client'
import CompanyComponentForm from '@/features/company/components/CompanyComponentForm'
import CompanyForm from '@/features/company/components/CompanyForm'
import { companyService } from '@/services/company.service'
import { companyComponentService } from '@/services/companyComponent.service'
import { CompanyComponentResponse } from '@/types/company'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

function CompanyAdd() {
    const [companyInfoData, setCompanyInfoData] = useState({});
    const [companyComponentsData, setCompanyComponentsData] = useState<Partial<CompanyComponentResponse>[]>([]);
    const router = useRouter();
    const handleFinalSave = async () => {
        try {
            const companyInfo = companyInfoData;
            const createdResponse = await companyService.create(companyInfo);
            const newCompanyId = createdResponse?.id || createdResponse;
            console.log("Firma Kaydedildi, Alınan ID:", newCompanyId);
            if (!newCompanyId) {
                alert("Hata: Firma ID'si alınamadı!");
                return;
            }
            console.log("data", companyComponentsData);
            if (companyComponentsData.length > 0) {
                for (const comp of companyComponentsData) {
                    const payload = {
                        ...comp,
                        companyId: newCompanyId
                    };
                    console.log("Gönderilen Bileşen Payload:", payload);
                    await companyComponentService.create(payload);
                }
            } else {
                console.warn("Kaydedilecek bileşen bulunamadı.");
            }
            console.log("İşlem başarıyla tamamlandı.");
            router.push('/admin/companies');
        } catch (error) {
            console.error("Kayıt sırasında bir hata oluştu:", error);
        }
    };
    return (
        <>
            <h2>Firma Ekleme Sayfası</h2>
            <CompanyForm onChange={(val) => setCompanyInfoData(prev => ({ ...prev, ...val }))} />
            <CompanyComponentForm onChange={(val) => setCompanyComponentsData(val)} />
            <div className="mt-4 sticky-bottom bg-white p-3 border-top shadow-sm">
                <Button
                    style={{ minWidth: '10rem' }}
                    variant="primary"
                    onClick={handleFinalSave}
                >Ekle
                </Button>
                <Button
                    variant="secondary"
                    className="ms-2"
                    onClick={() => router.back()}
                >
                    İptal
                </Button>
            </div>
        </>
    )
}
export default CompanyAdd