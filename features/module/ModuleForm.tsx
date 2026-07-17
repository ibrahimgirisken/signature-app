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
    reset: UseFormResetDefaultValues<ModuleUpdate>;
}

const ModuleForm = ({ register, watch, setValue, reset }: ModuleFormProps) => {
    const [departments, setDepartments] = useState<Department[]>([]);
    const [templates, setTemplates] = useState<string[]>([]);
    const [departmentLoading, setDepartmentLoading] = useState<boolean>(true);
    const [templateLoading, setTemplateLoading] = useState<boolean>(true);

    // Formun başlangıçta veri tabanından (parent bileşenden) aldığı varsayılan değerler
    const defaultDepartmentId = watch('departmentId');
    const defaultTemplate = watch('code');

    // 1. Departmanları Yükle
    useEffect(() => {
        const loadDepartments = async () => {
            try {
                const departmentsData = await departmentService.getAll();
                setDepartments(departmentsData);
                setDepartmentLoading(false);
            } catch (error) {
                console.error("Departmanlar yüklenirken hata oluştu:", error);
                setDepartmentLoading(false);
            }
        };
        loadDepartments();
    }, []);

    // 2. Şablonları (Templates) Yükle
    useEffect(() => {
        const loadTemplates = async () => {
            try {
                const templatesData = await signatureService.getmailtemplatelist();
                setTemplates(templatesData);
                setTemplateLoading(false);
            } catch (error) {
                console.error("Template listesi yüklenirken hata oluştu:", error);
                setTemplateLoading(false);
            }
        };
        loadTemplates();
    }, []);

    // 3. Veri tabanından gelen veriler yüklendiğinde form değerlerini zorla eşitle (Garantör useEffect)
    useEffect(() => {
        if (!departmentLoading && defaultDepartmentId) {
            setValue('departmentId', defaultDepartmentId, { shouldValidate: true });
        }
    }, [departmentLoading, defaultDepartmentId, setValue]);

    useEffect(() => {
        if (!templateLoading && defaultTemplate) {
            setValue('code', defaultTemplate, { shouldValidate: true });
        }
    }, [templateLoading, defaultTemplate, setValue]);

    return (
        <div className='m-1'>
            <Row className="mb-4">
                {/* DEPARTMAN SEÇİMİ */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextCompanyList">
                    <Form.Label column sm="2">Departman Seç</Form.Label>
                    <Col sm="10">
                        <FormSelect
                            className='mb-3'
                            disabled={departmentLoading}
                            {...register('departmentId')}
                        >
                            <option value="">
                                {departmentLoading ? "Departmanlar yükleniyor..." : "Departman Seçiniz"}
                            </option>
                            {!departmentLoading && Array.isArray(departments) &&
                                departments.map((department) => (
                                    <option key={department.id} value={department.id}>
                                        {department.departmentName}
                                    </option>
                                ))}
                        </FormSelect>
                    </Col>
                </Form.Group>

                {/* MODÜL ADI */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextDepartmentName">
                    <Form.Label column sm="2">Modül Adı</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register("moduleName")} />
                    </Col>
                </Form.Group>

                {/* TEMPLATE SEÇİMİ */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextTemplateName">
                    <Form.Label column sm="2">Template Seç</Form.Label>
                    <Col sm="10">
                        <FormSelect
                            className='mb-3'
                            disabled={templateLoading}
                            {...register('code')}
                        >
                            <option value="">
                                {templateLoading ? "Template listesi yükleniyor..." : "Template Seçiniz"}
                            </option>
                            {!templateLoading && Array.isArray(templates) &&
                                templates.map((template) => (
                                    <option key={template} value={template}>
                                        {template}
                                    </option>
                                ))}
                        </FormSelect>
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

export default ModuleForm;