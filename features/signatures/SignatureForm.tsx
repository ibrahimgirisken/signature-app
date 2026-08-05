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
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

type SignatureFormProps = {
  register: UseFormRegister<SignatureRequest>;
  setValue: UseFormSetValue<SignatureRequest>; // 1. setValue ekledik
};

const SignatureForm = ({ register, setValue }: SignatureFormProps) => {
  const [companiesLoading, setCompaniesLoading] = useState<boolean>(true);
  const [departmentsLoading, setDepartmentsLoading] = useState<boolean>(false);
  const [modulesLoading, setModulesLoading] = useState<boolean>(false);

  const [companies, setCompanies] = useState<CompanyResponse[]>([]);
  const [departments, setDepartment] = useState<DepartmentResponse[]>([]);
  const [modules, setModules] = useState<ModuleResponse[]>([]);
  const [langs, setLangs] = useState<Lang[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [responseCompanies, responseLangs] = await Promise.all([
          companyService.list(),
          langService.getAll()
        ]);
        setCompanies(responseCompanies);
        setLangs(responseLangs);
      } catch (error) {
        console.error("İlk veriler yüklenirken hata oluştu:", error);
      } finally {
        setCompaniesLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  const handleDepartments = async (companyId: string) => {
    // Şirket değişince bağlı alt alanların değerlerini form state'inden sıfırla
    setValue('departmentId' as any, '');
    setValue('moduleId', '');
    setModules([]);

    if (!companyId) {
      setDepartment([]);
      return;
    }

    try {
      setDepartmentsLoading(true);
      const departmentsData = await departmentService.getalldepartmentbycompanyid(companyId);
      setDepartment(departmentsData);
    } catch (error) {
      console.error("Departmanlar yüklenirken hata:", error);
    } finally {
      setDepartmentsLoading(false);
    }
  };

  const handleModules = async (departmentId: string) => {
    // Departman değişince modül değerini form state'inden sıfırla
    setValue('moduleId', '');

    if (!departmentId) {
      setModules([]);
      return;
    }

    try {
      setModulesLoading(true);
      const modulesData = await moduleService.getallmodulebydepartmentid(departmentId);
      setModules(modulesData);
    } catch (error) {
      console.error("Modüller yüklenirken hata:", error);
    } finally {
      setModulesLoading(false);
    }
  };

  // Register'ın kendi onChange'i ile custom handler'ı birleştiren yardımcı fonksiyon
  const companyRegister = register('companyId', { required: true });
  const departmentRegister = register('departmentId' as any, { required: true });
  const phoneRegister = register('phoneNumber', { required: true });

  return (
    <>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        {/* 1. ŞİRKET SEÇİMİ */}
        <Col sm="6" lg="6" className="justify-center d-flex align">
          <FormSelect
            className="mb-3"
            disabled={companiesLoading}
            defaultValue=""
            required
            {...companyRegister}
            onChange={(e) => {
              companyRegister.onChange(e); // React Hook Form state'ini güncelle
              handleDepartments(e.target.value);
            }}
          >
            {companiesLoading ? (
              <option value="">Şirketler yükleniyor...</option>
            ) : (
              <option value="">Firma Seçiniz</option>
            )}

            {!companiesLoading &&
              Array.isArray(companies) &&
              companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.companyName}
                </option>
              ))}
          </FormSelect>
        </Col>

        {/* 2. DİL SEÇİMİ */}
        <Col sm="6" lg="6" className="justify-center d-flex align">
          <FormSelect
            className="mb-3"
            disabled={companiesLoading}
            defaultValue=""
            required
            {...register('lang')}
          >
            {companiesLoading ? (
              <option value="">Diller yükleniyor...</option>
            ) : (
              <option value="">Dil Seçiniz</option>
            )}

            {!companiesLoading &&
              Array.isArray(langs) &&
              langs.map((lang) => (
                <option key={lang.langCode} value={lang.langCode}>
                  {lang.title}
                </option>
              ))}
          </FormSelect>
        </Col>

        {/* 3. DEPARTMAN SEÇİMİ */}
        <Col sm="6" lg="6" className="justify-center d-flex align">
          <FormSelect
            className="mb-3"
            disabled={departmentsLoading || companiesLoading || departments.length === 0}
            defaultValue=""
            required
            {...departmentRegister}
            onChange={(e) => {
              departmentRegister.onChange(e);
              handleModules(e.target.value);
            }}
          >
            {departmentsLoading ? (
              <option value="">Departmanlar yükleniyor...</option>
            ) : (
              <option value="">Departman Seçiniz</option>
            )}

            {!departmentsLoading &&
              Array.isArray(departments) &&
              departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.departmentName}
                </option>
              ))}
          </FormSelect>
        </Col>

        {/* 4. MODÜL SEÇİMİ */}
        <Col sm="6" lg="6" className="justify-center d-flex align">
          <FormSelect
            className="mb-3"
            disabled={modulesLoading || departmentsLoading || modules.length === 0}
            defaultValue=""
            required
            {...register('moduleId', { required: true })}
          >
            {modulesLoading ? (
              <option value="">Modüller yükleniyor...</option>
            ) : (
              <option value="">Modül Seçiniz</option>
            )}

            {!modulesLoading &&
              Array.isArray(modules) &&
              modules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.moduleName}
                </option>
              ))}
          </FormSelect>
        </Col>

        {/* DİĞER GİRDİLER */}
        <Col sm="6" lg="12">
          <Form.Control
            type="text"
            className="mb-3"
            placeholder="İsim & Soyisim"
            {...register('nameSurname', { required: true })}
          />
        </Col>

        <Col sm="6" lg="12">
          <Form.Control
            type="text"
            className="mb-3"
            placeholder="Ünvan"
            {...register('title', { required: true })}
          />
        </Col>

        <Col sm="6" lg="12">
          <Form.Control
            type="email"
            className="mb-3"
            placeholder="E-mail"
            {...register('email', { required: true })}
          />
        </Col>

        <Col sm="6" lg="12">
          <Form.Control
            type="text"
            className="mb-3"
            placeholder="Cep Telefonu 0(5xx) xxx xx xx"
            {...phoneRegister}
            onChange={(e) => {
              e.target.value = formatPhone(e.target.value);
              phoneRegister.onChange(e); // React Hook Form'a veriyi ilet
            }}
          />
        </Col>

        <div className="d-flex gap-2 justify-center">
          <Button size="sm" variant="dark" type="submit" className="mt-3">
            İmza Oluştur
          </Button>
        </div>
      </Form.Group>
      <hr />
    </>
  );
};

export default SignatureForm;