import React, { useEffect, useState } from 'react'
import { Form, Row } from 'react-bootstrap';
import { CompanyResponse } from '@/types/company';
import { http } from '@/lib/http';
import { companyService } from '@/services/company.service';

type CompanyFormProps = {
    initialData?: CompanyResponse,
    onChange: (data: CompanyResponse) => void,
    onSuccess?: () => void
}

function CompanyForm({ initialData, onChange, onSuccess }: CompanyFormProps) {
    const [formData, setFormData] = useState<CompanyResponse>({
        id: '',
        companyName: '',
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
        const fetchData = async () => {
            try {
                const signatureAsset = await http.get("/Enums/signature-asset-types");
            } catch (error) {
                console.error("Veri çekme hatası:", error);
            }
        };
        fetchData();
    }, []);


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

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
             await companyService.create(formData as any);
            // Burada API çağrısı yaparak veriyi kaydedebilirsiniz.
            // Örneğin: await companyService.create(formData);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Kayıt sırasında hata oluştu:", error);
        } finally {
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
                </Row>
            </Form>
        </>
    )
}

export default CompanyForm