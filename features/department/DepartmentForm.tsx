'use client'
import { companyService } from '@/services/company.service'
import { Company } from '@/types/company'
import { DepartmentUpdate } from '@/types/department'
import { useEffect, useState } from 'react'
import { Col, Form, FormSelect, Row } from 'react-bootstrap'
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'

type DepartmentFormProps = {
    register: UseFormRegister<DepartmentUpdate>;
    watch: UseFormWatch<DepartmentUpdate>;
    setValue: UseFormSetValue<DepartmentUpdate>;
}
const DepartmentForm = ({ register, watch, setValue }: DepartmentFormProps) => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const currentCompanyId = watch('companyId');

    useEffect(() => {
        const loadCompanies = async () => {
            try {
                const companiesData = await companyService.getAll();
                setCompanies(companiesData);
                setLoading(false);
                if (currentCompanyId) {
                    setValue('companyId', currentCompanyId);
                }
            } catch (error) {
                console.error("Firmalar yüklenirken hata oluştu:", error);
            }
        };
        loadCompanies();
    }, [setValue, currentCompanyId]);

    return (
        <>
            <div className='m-1'>
                <Row className="mb-4">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextCompanyList">
                        <Form.Label column sm="2">Firma Seç</Form.Label>
                        <Col sm="10">
                            <FormSelect
                                className='mb-3'
                                disabled={loading}
                                defaultValue=""
                                {...register('companyId')}
                            >
                                {loading ? (
                                    <option value="">Şirketler yükleniyor...</option>
                                ) : (
                                    <option value="">
                                        Firma Seçiniz
                                    </option>
                                )}

                                {!loading && Array.isArray(companies) &&
                                    companies.map((company) => (
                                        <option key={company.id} value={company.id}>
                                            {company.companyName}
                                        </option>
                                    ))}
                            </FormSelect>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDepartmentName">
                        <Form.Label column sm="2">Departman Adı</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" {...register("departmentName")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextStatus">
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
            </div>
        </>
    )
}

export default DepartmentForm;