import React, { useEffect,useState } from 'react'
import { Form, Row } from 'react-bootstrap';
import { CompanyResponse } from '@/types/company';
import ImageView from '@/app/utils/imageView';

type CompanyFormProps = {
    initialData?: CompanyResponse,
    onChange: (data: Partial<CompanyResponse>) => void,
    setCompanyLogo?: (file: File | null) => void,
    setFairImage?: (file: File | null) => void,
    onSuccess?: () => void
}

const CompanyForm = ({ initialData, onChange, setCompanyLogo, setFairImage, onSuccess }: CompanyFormProps) => {
    const [companyLogoFile, setCompanyLogoFile] = useState<File | null>(null);
    const [fairImageFile, setFairImageFile] = useState<File | null>(null);
    const [formData, setFormData] = useState<CompanyResponse>({
        id: '',
        companyName: '',
        companyLogo: '',
        fairImage: '',
        domainName: '',
        phone: '',
        fax: '',
        address: '',
        kdvText: '',
        informationText: '',
        environmentText: '',
        components: []
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const updatedData = {
            ...formData,
            [name]: value,
        };

        setFormData(updatedData);
        onChange(updatedData);
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setCompanyLogoFile(file);
            setCompanyLogo?.(file);
        }
    }

    const handleFairImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFairImageFile(file);
            setFairImage?.(file);
        }
    }

    const handleSave = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        onChange(formData);
        onSuccess?.();
        return formData;
    };
    return (
        <>
            <Form className='m-1' onSubmit={handleSave}>
                <Row className="mb-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Firma Adı</Form.Label>
                        <Form.Control
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Domain</Form.Label>
                        <Form.Control
                            type="text"
                            name="domainName"
                            value={formData.domainName}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Telefon</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Fax</Form.Label>
                        <Form.Control
                            type="text"
                            name="fax"
                            value={formData.fax}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Adres</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Kdv Metni</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            type="text"
                            name="kdvText"
                            value={formData.kdvText}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Güvenlik Yazısı</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            type="text"
                            name="informationText"
                            value={formData.informationText}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Çevre Yazısı</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            type="text"
                            name="environmentText"
                            value={formData.environmentText}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Firma Logosu</Form.Label>
                        {formData.companyLogo && !companyLogoFile && (
                        <img src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${formData.companyLogo}`} alt="Mevcut Logo" style={{ maxWidth: '150px', marginBottom: '10px' }} />
                        )}
                        <Form.Control
                            type="file"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                            name="companyLogo"
                            onChange={handleLogoChange}
                        />
                        <ImageView image={companyLogoFile} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Fuar Görseli</Form.Label>
                        {formData.fairImage && !fairImageFile && (
                        <img src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${formData.fairImage}`} alt="Mevcut Fuar Görseli" style={{ maxWidth: '150px', marginBottom: '10px' }} />
                        )}
                        <Form.Control
                            type="file"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                            name="fairImage"
                            onChange={handleFairImageChange}
                        />
                        <ImageView image={fairImageFile} />
                    </Form.Group>
                </Row>
            </Form>
        </>
    )
};

export default CompanyForm