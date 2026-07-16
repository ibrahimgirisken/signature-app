'use client'
import CompanyForm from '@/features/company/components/CompanyForm'
import { companyService } from '@/services/company.service'
import { langService } from '@/services/lang.service'
import { uploadService } from '@/services/upload.service'
import { CompanyUpdate } from '@/types/company'
import { Lang } from '@/types/lang'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function CompanyEdit() {
  const router = useRouter()
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState<boolean>(true);
  const [languages, setLanguages] = useState<Lang[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);


  const [companyLogos, setCompanyLogos] = useState<Record<string, File>>({});
  const [fairCalendarImages, setFairCalendarImages] = useState<Record<string, File>>({});
  const [qrCodeImages, setQrCodeImages] = useState<Record<string, File>>({});

  const { register, control, handleSubmit, reset, watch, setValue } =
    useForm<CompanyUpdate>({
      defaultValues: {
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
        status:true,
        companyTranslations: [],
      },
    });

  const loadCompanyData = async () => {
    try {
      setLoading(true);
      const data = await companyService.getById(id);
      if (data) {
        const existingTranslations = (data.companyTranslations || []).map((t) => ({
          langId: t.langId,
          langLangCode: t.langLangCode || "",
          langLangImage: t.langLangCode,
          addressText1: t.addressText1 || "",
          addressText2: t.addressText2 || "",
          addressText3: t.addressText3 || "",
          companyLogo: t.companyLogo || "",
          youtubeLabel1:t.youtubeLabel1 ||"",
          youtubeLabel2:t.youtubeLabel2 ||"",
          youtubeLabel3:t.youtubeLabel3 ||"",
          promoVideoUrl1: t.promoVideoUrl1 || "",
          promoVideoUrl2: t.promoVideoUrl2 || "",
          promoVideoUrl3: t.promoVideoUrl3 || "",
          qrCodeImage: t.qrCodeImage || "",
          downloadCenterLink:t.downloadCenterLink || "",
          newsLink:t.newsLink || "",
          fairsLink:t.fairsLink || "",
          fairCalenderImageUrl: t.fairCalenderImageUrl || "",
          onlineEducationLink:t.onlineEducationLink ||"",
          contactFormLink:t.contactFormLink||"",
          googleFeedbackLink:t.googleFeedbackLink||"",
          fairCalenderUrl: t.fairCalenderUrl || "",
          signOff: t.signOff || "",
          gdprText: t.gdprText || "",
          environmentalText: t.environmentalText || "",
          taxInfo:t.taxInfo||""
        }));

        reset({
          companyName: data.companyName || "",
          googleFeedbackLink: data.googleFeedbackLink || "",
          domainName: data.domainName || "",
          phone: data.phone || "",
          facebook: data.facebook || "",
          instagram: data.instagram || "",
          twitter: data.twitter || "",
          linkedin: data.linkedin || "",
          youtube: data.youtube || "",
          tiktok: data.tiktok || "",
          fax: data.fax || "",
          status:data.status,
          companyTranslations: existingTranslations,
        });
      }
    } catch (error) {
      console.error("Firma yüklenirken hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadLanguages = async () => {
      const langsData = await langService.getAll();
      setLanguages(langsData);
    };
    loadLanguages();
  }, []);

  useEffect(() => {
    if (id) {
      loadCompanyData();
    }
  }, [id]);

  const onSubmit = async (data: CompanyUpdate) => {
    try {
      setSubmitting(true);
      const updatedTranslations = [...data.companyTranslations];

      // --- 1. LOGO YÜKLEME ---
      for (const [langId, file] of Object.entries(companyLogos)) {
        if (file) {
          const uploadFileData = await uploadService.uploadCompanyImage(langId, file);
          const targetIndex = updatedTranslations.findIndex(t => t.langId === langId);
          if (targetIndex > -1) {
            updatedTranslations[targetIndex].companyLogo = uploadFileData.fileName;
          }
        }
      }

      // --- 2. FUAR TAKVİMİ GÖRSELİ YÜKLEME ---
      for (const [langId, file] of Object.entries(fairCalendarImages)) {
        if (file) {
          const uploadFileData = await uploadService.uploadCompanyImage(langId, file);
          const targetIndex = updatedTranslations.findIndex(t => t.langId === langId);
          if (targetIndex > -1) {
            updatedTranslations[targetIndex].fairCalenderImageUrl = uploadFileData.fileName;
          }
        }
      }

      // --- 6. QR CODE GÖRSELİ YÜKLEME ---
      for (const [langId, file] of Object.entries(qrCodeImages)) {
        if (file) {
          const uploadFileData = await uploadService.uploadCompanyImage(langId, file);
          const targetIndex = updatedTranslations.findIndex(t => t.langId === langId);
          if (targetIndex > -1) {
            updatedTranslations[targetIndex].qrCodeImage = uploadFileData.fileName;
          }
        }
      }

      const requestData = {
        ...data,
        id: id,
        companyTranslations: updatedTranslations
      };

      await companyService.update(requestData);
      await loadCompanyData();

      router.push('/admin/companies');
    } catch (error) {
      console.error("Güncelleme sırasında hata oluştu:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-center text-zinc-500 animate-pulse">Veriler yükleniyor...</div>;
  }

  return (
    <div>
      <h2 className="mb-4">Firma İmza Detayları Düzenleme</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <CompanyForm
          languages={languages}
          register={register}
          watch={watch}
          setValue={setValue}
          fileSetters={{
            setCompanyLogos,
            setFairCalendarImages,
            setQrCodeImages
          }}
        />

        <div className="mt-4 sticky-bottom bg-white p-3 border-top shadow-sm">
          <Button disabled={submitting} type="submit" style={{ minWidth: '10rem' }} variant="primary">
            {submitting ? 'Güncelleniyor...' : 'Değişiklikleri Güncelle'}
          </Button>
          <Button variant="secondary" className="ms-2" onClick={() => router.back()}>İptal</Button>
        </div>
      </form>
    </div>
  )
}

export default CompanyEdit;