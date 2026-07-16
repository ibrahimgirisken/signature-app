'use client';

import { formatPhone } from '@/app/utils/formatPhone';
import { companyService } from '@/services/company.service';
import { departmentService } from '@/services/department.service';
import { langService } from '@/services/lang.service';
import { moduleService } from '@/services/module.service';
import { CompanyResponse } from '@/types/company';
import { DepartmentResponse } from '@/types/department';
import { Lang } from '@/types/lang';
import { ModuleResponse } from '@/types/module';
import { SignatureRequest } from '@/types/signature-request';
import { useEffect, useState } from 'react';
import { Button, Col, Form, FormSelect, Row } from 'react-bootstrap';
import { UseFormRegister } from 'react-hook-form';

type SignatureFormProps = {
    register: UseFormRegister<SignatureRequest>;
};

const SignatureForm = ({ register }: SignatureFormProps) => {
    const [companiesLoading, setCompaniesLoading] = useState(true);
    const [departmentsLoading, setDepartmentsLoading] = useState(false);
    const [modulesLoading, setModulesLoading] = useState(false);

    const [companies, setCompanies] = useState<CompanyResponse[]>([]);
    const [departments, setDepartments] = useState<DepartmentResponse[]>([]);
    const [modules, setModules] = useState<ModuleResponse[]>([]);
    const [langs, setLangs] = useState<Lang[]>([]);

    const [selectedCompanyId, setSelectedCompanyId] = useState('');
    const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
    const [selectedModuleCode, setSelectedModuleCode] = useState('');

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [responseCompanies, responseLangs] = await Promise.all([
                    companyService.getAll(),
                    langService.getAll()
                ]);

                setCompanies(responseCompanies);
                setLangs(responseLangs);
            } catch (error) {
                console.error('İlk veriler yüklenirken hata oluştu:', error);
            } finally {
                setCompaniesLoading(false);
            }
        };

        fetchInitialData();
    }, []);

    const handleDepartments = async (companyId: string) => {
        setSelectedCompanyId(companyId);

        // Şirket değiştiğinde bağlı seçimleri hemen sıfırla
        setSelectedDepartmentId('');
        setSelectedModuleCode('');
        setDepartments([]);
        setModules([]);

        if (!companyId) {
            return;
        }

        try {
            setDepartmentsLoading(true);

            const departmentsData =
                await departmentService.getalldepartmentbycompanyid(companyId);

            setDepartments(departmentsData);
        } catch (error) {
            console.error('Departmanlar yüklenirken hata:', error);
            setDepartments([]);
        } finally {
            setDepartmentsLoading(false);
        }
    };

    const handleModules = async (departmentId: string) => {
        setSelectedDepartmentId(departmentId);

        // Departman değiştiğinde eski modülü sıfırla
        setSelectedModuleCode('');
        setModules([]);

        if (!departmentId) {
            return;
        }

        try {
            setModulesLoading(true);

            const modulesData =
                await moduleService.getallmodulebydepartmentid(departmentId);

            setModules(modulesData);
        } catch (error) {
            console.error('Modüller yüklenirken hata:', error);
            setModules([]);
        } finally {
            setModulesLoading(false);
        }
    };

    const companyRegister = register('companyId', {
        required: true
    });

    const moduleRegister = register('moduleCode', {
        required: true
    });

    return (
        <>
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextName"
            >
                <Col sm="6" lg="6" className="justify-center d-flex align">
                    <FormSelect
                        className="mb-3"
                        disabled={companiesLoading}
                        required
                        {...companyRegister}
                        value={selectedCompanyId}
                        onChange={(event) => {
                            companyRegister.onChange(event);
                            handleDepartments(event.target.value);
                        }}
                    >
                        {companiesLoading ? (
                            <option value="">
                                Şirketler yükleniyor...
                            </option>
                        ) : (
                            <option value="" disabled>
                                Firma Seçiniz
                            </option>
                        )}

                        {!companiesLoading &&
                            companies.map((company) => (
                                <option
                                    key={company.id}
                                    value={company.id}
                                >
                                    {company.companyName}
                                </option>
                            ))}
                    </FormSelect>
                </Col>

                <Col sm="6" lg="6" className="justify-center d-flex align">
                    <FormSelect
                        className="mb-3"
                        disabled={companiesLoading}
                        defaultValue=""
                        required
                        {...register('lang', {
                            required: true
                        })}
                    >
                        {companiesLoading ? (
                            <option value="">
                                Diller yükleniyor...
                            </option>
                        ) : (
                            <option value="" disabled>
                                Dil Seçiniz
                            </option>
                        )}

                        {!companiesLoading &&
                            langs.map((lang) => (
                                <option
                                    key={lang.langCode}
                                    value={lang.langCode}
                                >
                                    {lang.title}
                                </option>
                            ))}
                    </FormSelect>
                </Col>

                <Col sm="6" lg="6" className="justify-center d-flex align">
                    <FormSelect
                        className="mb-3"
                        value={selectedDepartmentId}
                        disabled={
                            departmentsLoading ||
                            companiesLoading ||
                            !selectedCompanyId
                        }
                        required
                        onChange={(event) =>
                            handleModules(event.target.value)
                        }
                    >
                        {departmentsLoading ? (
                            <option value="">
                                Departmanlar yükleniyor...
                            </option>
                        ) : (
                            <option value="" disabled>
                                Departman Seçiniz
                            </option>
                        )}

                        {!departmentsLoading &&
                            departments.map((department) => (
                                <option
                                    key={department.id}
                                    value={department.id}
                                >
                                    {department.departmentName}
                                </option>
                            ))}
                    </FormSelect>
                </Col>

                <Col sm="6" lg="6" className="justify-center d-flex align">
                    <FormSelect
                        className="mb-3"
                        disabled={
                            modulesLoading ||
                            departmentsLoading ||
                            !selectedDepartmentId
                        }
                        required
                        {...moduleRegister}
                        value={selectedModuleCode}
                        onChange={(event) => {
                            moduleRegister.onChange(event);
                            setSelectedModuleCode(event.target.value);
                        }}
                    >
                        {modulesLoading ? (
                            <option value="">
                                Modüller yükleniyor...
                            </option>
                        ) : (
                            <option value="" disabled>
                                Modül Seçiniz
                            </option>
                        )}

                        {!modulesLoading &&
                            modules.map((module) => (
                                <option
                                    key={module.id}
                                    value={module.code}
                                >
                                    {module.moduleName}
                                </option>
                            ))}
                    </FormSelect>
                </Col>

                <Col sm="6" lg="12">
                    <Form.Control
                        type="text"
                        className="mb-3"
                        placeholder="İsim & Soyisim"
                        {...register('nameSurname', {
                            required: true
                        })}
                    />
                </Col>

                <Col sm="6" lg="12">
                    <Form.Control
                        type="text"
                        className="mb-3"
                        placeholder="Ünvan"
                        {...register('title', {
                            required: true
                        })}
                    />
                </Col>

                <Col sm="6" lg="12">
                    <Form.Control
                        type="email"
                        className="mb-3"
                        placeholder="E-mail"
                        {...register('email', {
                            required: true
                        })}
                    />
                </Col>

                <Col sm="6" lg="12">
                    <Form.Control
                        type="text"
                        className="mb-3"
                        placeholder="Cep Telefonu 0(5xx) xxx xx xx"
                        {...register('phoneNumber', {
                            required: true
                        })}
                        onChange={(event) => {
                            event.target.value = formatPhone(
                                event.target.value
                            );
                        }}
                    />
                </Col>

                <div className="d-flex gap-2 justify-center">
                    <Button
                        size="sm"
                        variant="dark"
                        type="submit"
                        className="mt-3"
                    >
                        İmza Oluştur
                    </Button>
                </div>
            </Form.Group>

            <hr />
        </>
    );
};

export default SignatureForm;