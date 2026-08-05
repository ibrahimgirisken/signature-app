'use client';
import SignatureForm from '@/features/signatures/SignatureForm';
import { signatureService } from '@/services/signature.service';
import { SignatureRequest } from '@/types/signature-request';
import { useEffect, useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DownloadSignature from './components/DownloadSignature';
import SignatureView from './signature/signature-view';

export default function Home() {
  const sigRef = useRef<HTMLDivElement | null>(null);
  const [htmlData, setHtmlData] = useState<string>("");

  const { register, handleSubmit, setValue, watch } = useForm<SignatureRequest>({
    defaultValues: {
      nameSurname: "",
      title: "",
      email: "",
      phoneNumber: "",
      companyId: "",
      moduleId: "",
      lang: ""
    }
  });

  // Form elemanlarından herhangi biri değiştiğinde eski oluşturulan imzayı temizlemek isterseniz:
  const watchedFields = watch();
  useEffect(() => {
    // Form alanları değiştiğinde ekrandaki eski imza şablonunu sıfırlar
    if (htmlData) {
      setHtmlData("");
    }
  }, [watchedFields.companyId, watchedFields.moduleId, watchedFields.lang]);

  const onSubmit = async (data: SignatureRequest) => {
    try {
      setHtmlData("");
      const htmlResponse = await signatureService.getmailtemplate(data);
      setHtmlData(htmlResponse);
    } catch (error) {
      console.error("Şablon yüklenirken hata oluştu:", error);
    }
  };

  return (
    <Container className="mt-5 mb-3">
      <Row className="mb-4">
        <h5 className="text-center mt-2 mb-4 fw-bold fs-3" style={{ color: '#1796d2' }}>
          CW Enerji Firmalar Mail İmzası Oluşturma
        </h5>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Prop aktarımı düzeltildi */}
          <SignatureForm register={register} setValue={setValue} />
        </form>

        <DownloadSignature targetRef={sigRef} />
        <SignatureView signatureHtml={htmlData} targetRef={sigRef} />
      </Row>
    </Container>
  );
}