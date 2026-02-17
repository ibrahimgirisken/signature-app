import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { companyService } from '@/services/company.service';
import { CompanyResponse } from '@/types/company';

type CompanyFormProps = {
    initialData?: CompanyResponse,
    onSuccess?: () => void
}
function CompanyForm({ initialData, onSuccess }: CompanyFormProps) {
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
        if (initialData)
            setFormData(initialData)
    }, [initialData]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'number' ? Number(value) : value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (formData.id) {
                const {components,...dataToSend}=formData
                await companyService.update(dataToSend);
            } else {
                const { id,components,...dataToSend } = formData
                await companyService.create(dataToSend)
            }
            if (onSuccess) onSuccess()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Form className='m-5' onSubmit={handleSubmit}>
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
                    <Button style={{ width: '5rem', padding: '2px' }} variant="primary" type="submit">
                        {formData.id ? 'Güncelle' : 'Ekle'}
                    </Button>
                </Row>
            </Form>
        </>
    )
}

export default CompanyForm