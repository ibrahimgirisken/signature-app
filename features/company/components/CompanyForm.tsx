import React, { useEffect, useState } from 'react'
import { Form, Row } from 'react-bootstrap';
import { CompanyResponse } from '@/types/company';
import { http } from '@/lib/http';

type CompanyFormProps = {
    initialData?: CompanyResponse,
    onChange: (data: CompanyResponse) => void,
    onSuccess?: () => void
}

function CompanyForm({ initialData, onChange, onSuccess }: CompanyFormProps) {
    const [companyLogo,setCompanyLogo]=useState<File | null>(null);
    const [fairImage,setFairImage]=useState<File | null>(null);

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
    debugger
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setCompanyLogo(file);
            onChange({
                ...formData,
                companyLogo: file.name
            })
        }
    }

    const handleFairImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
             const file = e.target.files[0];
            setFairImage(file);
            onChange({
                ...formData,
                fairImage: file.name
            })
        }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let companyLogoUrl = '';
            let fairImageUrl = ''; 

            if (companyLogo) {
                const formDataWithFile = new FormData();
                formDataWithFile.append("file", companyLogo);
                const response = await http.post('/Companies/upload', formDataWithFile, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                companyLogoUrl = response.data.fileName;
                console.log("Firma logosu yüklendi, alınan URL:", companyLogoUrl);
            }
            
            if (fairImage) {
                const formDataWithFile = new FormData();
                formDataWithFile.append("file", fairImage);
                const response = await http.post('/Companies/upload', formDataWithFile, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                fairImageUrl = response.data.fileName;
                console.log("Fuar görseli yüklendi, alınan URL:", fairImageUrl);
            }

            const finalData = {
                ...formData,
                companyLogo: companyLogoUrl,
                fairImage: fairImageUrl
            }
            onChange(finalData);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Kayıt sırasında hata oluştu:", error);
        }
    };
    return (
        <>
            <Form className='m-5' onSubmit={handleSave}>
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
                        <Form.Control
                            type="file"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                            name="companyLogo"
                            onChange={handleLogoChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Fuar Görseli</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                            name="fairImage"
                            onChange={handleFairImageChange}
                        />
                    </Form.Group>
                </Row>
            </Form>
        </>
    )
}

export default CompanyForm