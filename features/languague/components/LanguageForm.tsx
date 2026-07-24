'use client'
import { Lang } from '@/types/lang'
import { Form, Table, Tabs, Tab, Card } from 'react-bootstrap'
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'

type LanguageFormProps = {
    languages: Lang[],
    register: UseFormRegister<Record<string, any>>,
    watch: UseFormWatch<Record<string, any>>,
    setValue: UseFormSetValue<Record<string, any>>
}

// Düzenlenecek tüm alanlar ve Türkçe açıklamaları
const formFields = [
    { key: "MailLabel", label: "Mail Etiketi", type: "text" },
    { key: "MobilePhoneLabel", label: "Cep Telefonu Etiketi", type: "text" },
    { key: "PhoneLabel", label: "Sabit Telefon Etiketi", type: "text" },
    { key: "MobileLabel", label: "Mobil Etiketi", type: "text" },
    { key: "FaxLabel", label: "Fax Etiketi", type: "text" },
    { key: "WebLabel", label: "Web Etiketi", type: "text" },
    { key: "AddressLabel1", label: "Adres Etiketi-1", type: "text" },
    { key: "AddressLabel2", label: "Adres Etiketi-2", type: "text" },
    { key: "AddressLabel3", label: "Adres Etiketi-3", type: "text" },
    { key: "NewsTitle", label: "Haberler Başlığı", type: "text" },
    { key: "FairTitle", label: "Fuar Başlığı", type: "text" },
    { key: "OnlineEducationTitle", label: "Online Eğitim Başlığı", type: "text" },
    { key: "ContactFormTitle", label: "İletişim Formu Başlığı", type: "text" },
    { key: "Registergericht", label: "Ticaret Odası / Mahkemesi (Registergericht)", type: "text" },
    { key: "Umsatzsteuer-Identifikationsnummer", label: "KDV Muafiyet No (Umsatzsteuer)", type: "text" },
    { key: "DownloadCenterIcon", label: "İndirme Merkezi İkonu", type: "text" },
    { key: "GoogleContactIcon", label: "Google Yorum Linki", type: "text" },
    { key: "YoutubeVideoIcon", label: "Youtube Video Görseli", type: "text" }
]

const LanguageForm = ({ languages, register, watch, setValue }: LanguageFormProps) => {
    if (!languages || languages.length === 0) {
        return <div className="text-muted p-3 text-center">Yüklü dil bilgisi bulunamadı.</div>
    }

    return (
        <Card className="shadow-sm border-0">
            <Card.Body className="p-3">
                {/* Her dil için dinamik bir sekme oluşturuyoruz */}
                <Tabs defaultActiveKey={languages[0].langCode} id="localization-tabs" className="mb-3 fw-bold">
                    {languages.map((lang) => (
                        <Tab 
                            eventKey={lang.langCode} 
                            title={`${lang.title.toUpperCase()} (${lang.langCode})`} 
                            key={lang.langCode}
                        >
                            <div className="pt-2">
                                <Table responsive striped bordered hover className="align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th style={{ width: '30%' }}>Açıklama / Key</th>
                                            <th style={{ width: '70%' }}>Değer (Value)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {formFields.map((field) => (
                                            <tr key={`${lang.langCode}-${field.key}`}>
                                                <td>
                                                    <div className="fw-semibold text-dark small">{field.label}</div>
                                                    <div className="text-muted" style={{ fontSize: '11px' }}>{field.key}</div>
                                                </td>
                                                <td>
                                                    {field.type === "textarea" ? (
                                                        <Form.Control 
                                                            as="textarea"
                                                            rows={2}
                                                            placeholder={`${lang.title} karşılığını girin...`}
                                                            {...register(`${lang.langCode}.${field.key}`)}
                                                        />
                                                    ) : (
                                                        <Form.Control 
                                                            type="text"
                                                            placeholder={`${lang.title} karşılığını girin...`}
                                                            {...register(`${lang.langCode}.${field.key}`)}
                                                        />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    ))}
                </Tabs>
            </Card.Body>
        </Card>
    )
}

export default LanguageForm