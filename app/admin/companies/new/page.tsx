'use client'
import CompanyForm from '@/features/company/components/CompanyForm'
import { companyService } from '@/services/company.service'
import { langService } from '@/services/lang.service'
import { uploadService } from '@/services/upload.service'
import { Lang } from '@/types/lang'
import { CompanyUpdate } from '@/types/company'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function CompanyAdd() {
  const router = useRouter()

  const [languages, setLanguages] = useState<Lang[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);


  const [companyLogos, setCompanyLogos] = useState<Record<string, File>>({});
  const [fairCalendarImages, setFairCalendarImages] = useState<Record<string, File>>({});
  const [qrCodeImages, setQrCodeImages] = useState<Record<string, File>>({});
  const [promoVideoImageUrl1, setPromoVideoImageUrl1] = useState<Record<string, File>>({});
  const [promoVideoImageUrl2, setPromoVideoImageUrl2] = useState<Record<string, File>>({});
  const [promoVideoImageUrl3, setPromoVideoImageUrl3] = useState<Record<string, File>>({});

  const { register, control, handleSubmit, watch, setValue } =
    useForm<CompanyUpdate>({
      defaultValues: {
        id: "",
        companyName: "",
        googleFeedbackLink: "",
        domainName: "",
        phone: "",
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin: "",
        youtube: "",
        tiktok: "",
        fax: "",
        status: true,
        companyTranslations: [],
      },
    });

  // --- DİLLERİ YÜKLE ---
  useEffect(() => {
    const loadLanguages = async () => {
      try {
        const langsData = await langService.getAll();
        setLanguages(langsData);
      } catch (error) {
        console.error("Diller yüklenirken hata oluştu:", error);
      }
    };
    loadLanguages();
  }, []);

  const onSubmit = async (data: CompanyUpdate) => {
    try {
      setSubmitting(true);
      const createdResponse = await companyService.create(data);
      const newCompanyId = createdResponse?.id || createdResponse;

      console.log("Firma Kaydedildi, Alınan ID:", newCompanyId);

      if (!newCompanyId) {
        alert("Hata: Firma ID'si alınamadı!");
        return;
      }

      let updatedTranslations = [...(data.companyTranslations || [])];

      if (updatedTranslations.length === 0 && languages.length > 0) {
        updatedTranslations = languages.map(lang => ({
          langId: lang.id,
          langLangCode: lang.langCode || "",
          addressText1: "",
          addressText2: "",
          addressText3: "",
          companyLogo: "",
          youtubeLabel1: "",
          youtubeLabel2: "",
          youtubeLabel3: "",
          promoVideoUrl1: "",
          promoVideoUrl2: "",
          promoVideoUrl3: "",
          promoVideoImageUrl1: "",
          promoVideoImageUrl2: "",
          promoVideoImageUrl3: "",
          qrCodeImage: "",
          downloadCenterLink: "",
          newsLink: "",
          fairsLink: "",
          timotechLink: "",
          fairCalendarImageUrl: "",
          onlineEducationLink: "",
          contactFormLink: "",
          googleFeedbackLink: "",
          fairCalenderUrl: "",
          signOff: "",
          gdprText: "",
          environmentalText: "",
          taxInfo: ""
        }));
      }

      for (const [langId, file] of Object.entries(companyLogos)) {
        if (file) {
          const uploadFileData = await uploadService.uploadCompanyImage(langId, file);
          const targetIndex = updatedTranslations.findIndex(t => t.langId === langId);
          if (targetIndex > -1) {
            updatedTranslations[targetIndex].companyLogo = uploadFileData.fileName;
          }
        }
      }

      for (const [langId, file] of Object.entries(fairCalendarImages)) {
        if (file) {
          const uploadFileData = await uploadService.uploadCompanyImage(langId, file);
          const targetIndex = updatedTranslations.findIndex(t => t.langId === langId);
          if (targetIndex > -1) {
            updatedTranslations[targetIndex].fairCalenderImageUrl = uploadFileData.fileName;
          }
        }
      }

      for (const [langId, file] of Object.entries(qrCodeImages)) {
        if (file) {
          const uploadFileData = await uploadService.uploadCompanyImage(langId, file);
          const targetIndex = updatedTranslations.findIndex(t => t.langId === langId);
          if (targetIndex > -1) {
            updatedTranslations[targetIndex].qrCodeImage = uploadFileData.fileName;
          }
        }
      }

      for (const [langId, file] of Object.entries(promoVideoImageUrl1)) {
        if (file) {
          const uploadFileData = await uploadService.uploadCompanyImage(langId, file);
          const targetIndex = updatedTranslations.findIndex(t => t.langId === langId);
          if (targetIndex > -1) {
            updatedTranslations[targetIndex].promoVideoImageUrl1 = uploadFileData.fileName;
          }
        }
      }

      for (const [langId, file] of Object.entries(promoVideoImageUrl2)) {
        if (file) {
          const uploadFileData = await uploadService.uploadCompanyImage(langId, file);
          const targetIndex = updatedTranslations.findIndex(t => t.langId === langId);
          if (targetIndex > -1) {
            updatedTranslations[targetIndex].promoVideoImageUrl2 = uploadFileData.fileName;
          }
        }
      }

      for (const [langId, file] of Object.entries(promoVideoImageUrl3)) {
        if (file) {
          const uploadFileData = await uploadService.uploadCompanyImage(langId, file);
          const targetIndex = updatedTranslations.findIndex(t => t.langId === langId);
          if (targetIndex > -1) {
            updatedTranslations[targetIndex].promoVideoImageUrl3 = uploadFileData.fileName;
          }
        }
      }



      const updateRequestData: CompanyUpdate = {
        ...data,
        id: newCompanyId as string,
        companyTranslations: updatedTranslations,
      };

      await companyService.update(updateRequestData);
      console.log("İşlem başarıyla tamamlandı ve görseller güncellendi.");

      router.push('/admin/companies');
    } catch (error) {
      console.error("Kayıt veya görsel yükleme sırasında hata oluştu:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="mb-4">Firma Ekleme Sayfası</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <CompanyForm
          languages={languages}
          register={register}
          watch={watch}
          setValue={setValue}
          fileSetters={{
            setCompanyLogos,
            setFairCalendarImages,
            setQrCodeImages,
            setPromoVideoImageUrl1,
            setPromoVideoImageUrl2,
            setPromoVideoImageUrl3
          }}
        />

        <div className="mt-4 sticky-bottom bg-white p-3 border-top shadow-sm">
          <Button
            disabled={submitting}
            type="submit"
            style={{ minWidth: '10rem' }}
            variant="primary"
          >
            {submitting ? 'Kaydediliyor...' : 'Ekle'}
          </Button>
          <Button variant="secondary" className="ms-2" onClick={() => router.back()}>
            İptal
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CompanyAdd;