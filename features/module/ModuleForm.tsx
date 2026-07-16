'use client'
import { departmentService } from '@/services/department.service'
import { signatureService } from '@/services/signature.service'
import { Department } from '@/types/department'
import { ModuleUpdate } from '@/types/module'
import { useEffect, useState } from 'react'
import { Col, Form, FormSelect, Row } from 'react-bootstrap'
import { UseFormRegister, UseFormResetDefaultValues, UseFormSetValue, UseFormWatch } from 'react-hook-form'

type ModuleFormProps = {
    register: UseFormRegister<ModuleUpdate>;
    watch: UseFormWatch<ModuleUpdate>;
    setValue: UseFormSetValue<ModuleUpdate>;
    reset:UseFormResetDefaultValues<ModuleUpdate>;
}
const ModuleForm = ({ register, watch, setValue,reset }: ModuleFormProps) => {
    const [departments, setDepartmens] = useState<Department[]>([]);
    const [templates, setTemplates] = useState<string[]>([]);
    const [departmentLoading, setDepartmentLoading] = useState<boolean>(true);
    const [templateLoading, setTemplateLoading] = useState<boolean>(true);
    const currentDepartmentId = watch('departmentId');
    const currentTemplate = watch('code');

    useEffect(() => {
        const loadDepartments = async () => {
            try {
                const departmentsData = await departmentService.getAll();
                setDepartmens(departmentsData);
                setDepartmentLoading(false);
                if (currentDepartmentId) {
                    setValue('departmentId', currentDepartmentId);
                }
            } catch (error) {
                console.error("Departmanlar yüklenirken hata oluştu:", error);
            }
        };
        loadDepartments();
    }, []);

    useEffect(() => {
        const loadTemplates = async () => {
            try {
                const templatesData = await signatureService.getmailtemplatelist();
                setTemplates(templatesData);
                setTemplateLoading(false);
                 if (currentTemplate) {
                    setValue('code', currentTemplate);
                }
            } catch (error) {
                console.error("Template listesi yüklenirken hata oluştu:", error);
            }
        };
        loadTemplates();
    }, []);



    console.log("Veri Tabanından Gelen Kod:", watch('code'));
    return (
        <>
            <div className='m-1'>
                <Row className="mb-4">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextCompanyList">
                        <Form.Label column sm="2">Departmant Seç</Form.Label>
                        <Col sm="10">
                            <FormSelect
                                className='mb-3'
                                disabled={departmentLoading}
                                defaultValue=""
                                {...register('departmentId')}
                            >
                                {departmentLoading ? (
                                    <option value="">Departmanlar yükleniyor...</option>
                                ) : (
                                    <option value="">
                                        Departman Seçiniz
                                    </option>
                                )}

                                {!departmentLoading && Array.isArray(departments) &&
                                    departments.map((department) => (
                                        <option key={department.id} value={department.id}>
                                            {department.departmentName}
                                        </option>
                                    ))}
                            </FormSelect>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDepartmentName">
                        <Form.Label column sm="2">Modül Adı</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" {...register("moduleName")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextTemplateName">
                        <Form.Label column sm="2">Template Seç</Form.Label>
                        <Col sm="10">
                            <FormSelect
                                className='mb-3'
                                disabled={templateLoading}
                                defaultValue=""
                                {...register('code')}
                            >
                                {templateLoading ? (
                                    <option value="">Template listesi yükleniyor...</option>
                                ) : (
                                    <option value="">
                                        Template Seçiniz
                                    </option>
                                )}

                                {!templateLoading && Array.isArray(templates) &&
                                    templates.map((template) => (
                                        <option key={template} value={template}>
                                            {template}
                                        </option>
                                    ))}
                            </FormSelect>
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

export default ModuleForm;