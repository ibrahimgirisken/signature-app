'use client'
import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Tabs, Tab, Image } from 'react-bootstrap';
import { UseFormRegister, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { CompanyUpdate } from '@/types/company';
import { Lang } from '@/types/lang';

type CompanyFormProps = {
    languages: Lang[];
    register: UseFormRegister<CompanyUpdate>;
    watch: UseFormWatch<CompanyUpdate>;
    setValue: UseFormSetValue<CompanyUpdate>;
    fileSetters: {
        setCompanyLogos: React.Dispatch<React.SetStateAction<Record<string, File>>>;
        setFairCalendarImages: React.Dispatch<React.SetStateAction<Record<string, File>>>;
        setQrCodeImages: React.Dispatch<React.SetStateAction<Record<string, File>>>;
        setPromoVideoImageUrl1: React.Dispatch<React.SetStateAction<Record<string, File>>>;
        setPromoVideoImageUrl2: React.Dispatch<React.SetStateAction<Record<string, File>>>;
        setPromoVideoImageUrl3: React.Dispatch<React.SetStateAction<Record<string, File>>>;
    }
}

const CompanyForm = ({ languages, register, watch, setValue, fileSetters }: CompanyFormProps) => {
    const [activeTab, setActiveTab] = useState<string>('');
    const companyTranslations = watch("companyTranslations") || [];
    const [previewUrls, setPreviewUrls] = useState<Record<string, string>>({});

    // --- 1. DİLLER YÜKLENDİĞİNDE TRANSLATIONS ARRAY'İNİ TEK SEFERDE BAŞLATMA ---
    useEffect(() => {
        if (languages && languages.length > 0) {
            if (!activeTab) {
                setActiveTab(languages[0].id);
            }

            if (companyTranslations.length === 0) {
                const initialTranslations = languages.map(lang => ({
                    langId: lang.id,
                    langLangCode: lang.langCode || '',
                    langLangImage: lang.image || '',
                    addressText1: '',
                    addressText2: '',
                    addressText3: '',
                    companyLogo: '',
                    youtubeLabel1: '',
                    youtubeLabel2: '',
                    youtubeLabel3: '',
                    promoVideoUrl1: '',
                    promoVideoUrl2: '',
                    promoVideoUrl3: '',
                    promoVideoImageUrl1: '',
                    promoVideoImageUrl2: '',
                    promoVideoImageUrl3: '',
                    qrCodeImage: '',
                    downloadCenterLink: '',
                    newsLink: '',
                    fairsLink: '',
                    timotechLink: '',
                    fairCalendarImageUrl: '',
                    onlineEducationLink: '',
                    contactFormLink: '',
                    googleFeedbackLink: '',
                    signOff: '',
                    gdprText: '',
                    environmentalText: '',
                    taxInfo: ''
                }));
                setValue("companyTranslations", initialTranslations);
            }
        }
    }, [languages, setValue]);

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        langId: string,
        fieldName: string,
        setFileState: React.Dispatch<React.SetStateAction<Record<string, File>>>
    ) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            const uniqueKey = `${langId}_${fieldName}`;

            setFileState(prev => ({ ...prev, [langId]: selectedFile }));

            if (previewUrls[uniqueKey]) {
                URL.revokeObjectURL(previewUrls[uniqueKey]);
            }

            const cachedUrl = URL.createObjectURL(selectedFile);
            setPreviewUrls(prev => ({ ...prev, [uniqueKey]: cachedUrl }));
        }
    };

    return (
        <>
            <div className='m-1'>
                <h5 className="mb-3 text-muted">Genel Bilgiler</h5>
                <Row className="mb-4">
                    <Form.Group as={Col} md={6} className="mb-3">
                        <Form.Label>Firma Adı</Form.Label>
                        <Form.Control type="text" {...register("companyName")} />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-3">
                        <Form.Label>Domain Adresi</Form.Label>
                        <Form.Control type="text" {...register("domainName")} />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-3">
                        <Form.Label>Telefon</Form.Label>
                        <Form.Control type="text" {...register("phone")} />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mb-3">
                        <Form.Label>Faks</Form.Label>
                        <Form.Control type="text" {...register("fax")} />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-3">
                        <Form.Label>Google Geri Bildirim Linki (URL)</Form.Label>
                        <Form.Control type="text" {...register("googleFeedbackLink")} />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-3">
                        <Form.Label column sm="2">Durum</Form.Label>
                        <Col sm="10">
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                {...register("status")}
                            />
                        </Col>
                    </Form.Group>
                </Row>
                <hr />
                <h5 className="mb-3 text-muted">Sosyal Medya Hesapları</h5>
                <Row className="mb-4">
                    <Form.Group as={Col} md={4} className="mb-3"><Form.Label>Facebook</Form.Label><Form.Control type="text" {...register("facebook")} /></Form.Group>
                    <Form.Group as={Col} md={4} className="mb-3"><Form.Label>Instagram</Form.Label><Form.Control type="text" {...register("instagram")} /></Form.Group>
                    <Form.Group as={Col} md={4} className="mb-3"><Form.Label>Twitter</Form.Label><Form.Control type="text" {...register("twitter")} /></Form.Group>
                    <Form.Group as={Col} md={4} className="mb-3"><Form.Label>LinkedIn</Form.Label><Form.Control type="text" {...register("linkedin")} /></Form.Group>
                    <Form.Group as={Col} md={4} className="mb-3"><Form.Label>Youtube</Form.Label><Form.Control type="text" {...register("youtube")} /></Form.Group>
                    <Form.Group as={Col} md={4} className="mb-3"><Form.Label>Tiktok</Form.Label><Form.Control type="text" {...register("tiktok")} /></Form.Group>
                </Row>
                <hr />
                <h5 className="mb-3 text-muted">Dil Bazlı Bilgiler ve Çeviriler</h5>
                <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || '')} className="mb-3">
                    {languages.map((lang) => {
                        // --- 2. GÜVENLİ INDEX BULMA ---
                        // State tetiklemesi kaldırıldı, sadece var olan index okunuyor.
                        const idx = companyTranslations.findIndex(t => t.langId === lang.id);

                        // Eğer useEffect henüz çalışmadıysa veya veri senkronize oluyorsa render'ı pas geç
                        if (idx === -1) return null;

                        const fairCalendarKey = `${lang.id}_fairCalendarImage`;
                        const promoVideo1Key = `${lang.id}_promoVideo1Image`;
                        const promoVideo2Key = `${lang.id}_promoVideo2Image`;
                        const promoVideo3Key = `${lang.id}_promoVideo3Image`;
                        const logoKey = `${lang.id}_companyLogo`;
                        const qrKey = `${lang.id}_qrCodeImage`;

                        return (
                            <Tab
                                key={lang.id}
                                eventKey={lang.id}
                                title={
                                    <span>
                                        {lang.image && <img src={lang.image?.trim() ? `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}/${lang.image}` : `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${process.env.NEXT_PUBLIC_NO_IMAGE}`} alt={lang.title} style={{ width: 18, marginRight: 6 }} />}
                                        {lang.title} ({lang.langCode.toUpperCase()})
                                    </span>
                                }
                            >
                                <div className="p-3 border border-top-0 rounded-bottom">
                                    <Row className='m-3'>
                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Logo</Form.Label>
                                            <div className="mb-2">
                                                <Image
                                                    src={previewUrls[logoKey] || (companyTranslations[idx]?.companyLogo?.trim() ? `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${companyTranslations[idx].companyLogo}` : `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${process.env.NEXT_PUBLIC_NO_IMAGE}`)}
                                                    alt="Company Logo"
                                                    thumbnail
                                                    style={{ maxHeight: 100 }}
                                                />
                                            </div>
                                            <Form.Control type="file" accept="image/*" onChange={(e: any) => handleImageChange(e, lang.id, 'companyLogo', fileSetters.setCompanyLogos)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>QR Code Logo</Form.Label>
                                            <div className="mb-2">
                                                <Image
                                                    src={previewUrls[qrKey] || (companyTranslations[idx]?.qrCodeImage?.trim() ? `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${companyTranslations[idx].qrCodeImage}` : `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${process.env.NEXT_PUBLIC_NO_IMAGE}`)}
                                                    alt="QR Code Logo"
                                                    thumbnail
                                                    style={{ maxHeight: 100 }}
                                                />
                                            </div>
                                            <Form.Control type="file" accept="image/*" onChange={(e: any) => handleImageChange(e, lang.id, 'qrCodeImage', fileSetters.setQrCodeImages)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Fuar Takvim Görseli</Form.Label>
                                            <div className="mb-2">
                                                <Image
                                                    src={previewUrls[fairCalendarKey] || (companyTranslations[idx]?.fairCalenderImageUrl?.trim() ? `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${companyTranslations[idx].fairCalenderImageUrl}` : `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${process.env.NEXT_PUBLIC_NO_IMAGE}`)}
                                                    alt="Fuar Takvimi"
                                                    thumbnail
                                                    style={{ maxHeight: 100 }}
                                                />
                                            </div>
                                            <Form.Control type="file" accept="image/*" onChange={(e: any) => handleImageChange(e, lang.id, 'fairCalendarImage', fileSetters.setFairCalendarImages)} />
                                        </Form.Group>

                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Adres Satırı 1</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.addressText1`)} />
                                        </Form.Group>
                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Adres Satırı 2</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.addressText2`)} />
                                        </Form.Group>
                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Adres Satırı 3</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.addressText3`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Promo Video Görseli 1</Form.Label>
                                            <div className="mb-2">
                                                <Image
                                                    src={previewUrls[promoVideo1Key] || (companyTranslations[idx]?.promoVideoImageUrl1?.trim() ? `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${companyTranslations[idx].promoVideoImageUrl1}` : `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${process.env.NEXT_PUBLIC_NO_IMAGE}`)}
                                                    alt="Promo Video 1"
                                                    thumbnail
                                                    style={{ maxHeight: 100 }}
                                                />
                                            </div>
                                            <Form.Control type="file" accept="image/*" onChange={(e: any) => handleImageChange(e, lang.id, 'promoVideoImageUrl1', fileSetters.setPromoVideoImageUrl1)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Promo Video Görseli 2</Form.Label>
                                            <div className="mb-2">
                                                <Image
                                                    src={previewUrls[promoVideo2Key] || (companyTranslations[idx]?.promoVideoImageUrl2?.trim() ? `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${companyTranslations[idx].promoVideoImageUrl2}` : `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${process.env.NEXT_PUBLIC_NO_IMAGE}`)}
                                                    alt="Promo Video 2"
                                                    thumbnail
                                                    style={{ maxHeight: 100 }}
                                                />
                                            </div>
                                            <Form.Control type="file" accept="image/*" onChange={(e: any) => handleImageChange(e, lang.id, 'promoVideoImageUrl2', fileSetters.setPromoVideoImageUrl2)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Promo Video Görseli 3</Form.Label>
                                            <div className="mb-2">
                                                <Image
                                                    src={previewUrls[promoVideo3Key] || (companyTranslations[idx]?.promoVideoImageUrl3?.trim() ? `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${companyTranslations[idx].promoVideoImageUrl3}` : `${process.env.NEXT_PUBLIC_HOST_IMAGE_URL}${process.env.NEXT_PUBLIC_NO_IMAGE}`)}
                                                    alt="Promo Video 3"
                                                    thumbnail
                                                    style={{ maxHeight: 100 }}
                                                />
                                            </div>
                                            <Form.Control type="file" accept="image/*" onChange={(e: any) => handleImageChange(e, lang.id, 'promoVideoImageUrl3', fileSetters.setPromoVideoImageUrl3)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Promo Video 1 (Başlık)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.youtubeLabel1`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Promo Video 2 (Başlık)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.youtubeLabel2`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Promo Video 3 (Başlık)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.youtubeLabel3`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Promo Video 1 (URL)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.promoVideoUrl1`)} />
                                        </Form.Group>
                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Promo Video 2 (URL)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.promoVideoUrl2`)} />
                                        </Form.Group>
                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Promo Video 3 (URL)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.promoVideoUrl3`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>İndirme Merkezi Linki (URL)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.downloadCenterLink`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Fuar Linki (URL)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.fairsLink`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Haberler Linki (URL)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.newsLink`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Online Eğitim Linki (URL)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.onlineEducationLink`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>İletişim Linki (URL)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.contactFormLink`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={4} className="mb-3">
                                            <Form.Label>Timotech Linki (URL)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.timotechLink`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={12} className="mb-3">
                                            <Form.Label>Kapanış Metni (Sign Off)</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.signOff`)} />
                                        </Form.Group>


                                        <Form.Group as={Col} md={12} className="mb-3">
                                            <Form.Label>Kdv Bildiri Yazısı</Form.Label>
                                            <Form.Control type="text" {...register(`companyTranslations.${idx}.taxInfo`)} />
                                        </Form.Group>

                                        <hr />
                                        <Form.Group as={Col} md={12} className="mb-3">
                                            <Form.Label>Gdpr Metni</Form.Label>
                                            <Form.Control as="textarea" rows={6} {...register(`companyTranslations.${idx}.gdprText`)} />
                                        </Form.Group>

                                        <Form.Group as={Col} md={12} className="mb-3">
                                            <Form.Label>Çevresel Sorumluluk Metni</Form.Label>
                                            <Form.Control as="textarea" rows={2} {...register(`companyTranslations.${idx}.environmentalText`)} />
                                        </Form.Group>
                                    </Row>
                                </div>
                            </Tab>
                        );
                    })}
                </Tabs>
            </div>
        </>
    )
};

export default CompanyForm;