// @/features/department/DepartmentForm.tsx

'use client'
import { Company } from '@/types/company'
import { Col, Form, FormSelect, Row } from 'react-bootstrap'
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'

type DepartmentFormProps = {
    register: UseFormRegister<any>;
    watch: UseFormWatch<any>;
    setValue: UseFormSetValue<any>;
    companies: Company[]; // Üstten gelen şirket listesi
}

const DepartmentForm = ({ register, companies }: DepartmentFormProps) => {
    return (
        <div className='m-1'>
            <Row className="mb-4">
                {/* ŞİRKET SEÇİMİ */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCompany">
                    <Form.Label column sm="2">Şirket Seç</Form.Label>
                    <Col sm="10">
                        <FormSelect
                            className='mb-3'
                            {...register('companyId')}
                        >
                            <option value="">Şirket Seçiniz</option>
                            {Array.isArray(companies) &&
                                companies.map((company) => (
                                    <option key={company.id} value={company.id}>
                                        {company.companyName}
                                    </option>
                                ))}
                        </FormSelect>
                    </Col>
                </Form.Group>

                {/* DEPARTMAN ADI */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextDepartmentName">
                    <Form.Label column sm="2">Departman Adı</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register("departmentName")} />
                    </Col>
                </Form.Group>

                {/* DURUM SWITCH */}
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
    );
}

export default DepartmentForm;