'use client';

import React, { useMemo, useRef } from 'react';
import { Container, FormSelect } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { formatPhone } from './utils/formatPhone';
import { useCrud } from '@/hooks/useCrud';
import { CompanyRequest, CompanyResponse } from '@/types/company';
import { companyService } from '@/services/company.service';

import DownloadSignature from './components/DownloadSignature';
import SignatureView from './signature/signature-view';

import { mapAssetsByType } from './utils/signatureAssets';
import { SUGNATURE_TEMPLATE_BY_COMPANY_ID } from './_lib/config/signatureTemplateMap';

type SignatureData = {
  fullName: string;
  department: string;
  email: string;
  phone: string;
  mobilePhone: string;
  address: string;
  logo: string;
  domain_name: string;
  googleUrlLink: string;
  instagram: string;
  facebook: string;
  kdvInformation: string;
  informationText: string;
  news: string;
  environmentText: string;
};

function Home() {
  const sigRef = useRef<HTMLDivElement | null>(null);

  const [selectedCompanyId, setSelectedCompanyId] = React.useState<string>('');

  const [fullName, setFullName] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [mobilePhone, setMobilePhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [logo, setLogo] = React.useState('');
  const [news, setNews] = React.useState('');
  const [domain_name, setDomainName] = React.useState('');
  const [googleUrlLink, setGoogleUrlLink] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [facebook, setFacebook] = React.useState('');

  const [kdvInformation, setKdvInformation] = React.useState(
    'KDV KANUNUN 117 SAYILI TEBLİĞ’İN 3.1.2/B MADDESİNE GÖRE BORSA İSTANBUL’DA İŞLEM GÖREN ŞİRKETİMİZE DÜZENLENECEK FATURALARDA KDV <br/> TEVKİFATINA ÖZEN GÖSTERİLMESİ RİCA OLUNUR.'
  );

  const [informationText, setInformationText] = React.useState(
    'Bu elektronik posta ve ekleri gizlidir ve yalnızca gönderildiği gerçek veya tüzel kişi tarafından kullanılması amacıyla gönderilmiştir. Eğer bu elektronik postayı yanlışlıkla aldıysanız,<br>lütfen göndereni derhal bilgilendiriniz ve mesajı sisteminizden siliniz. Bu mesajın izinsiz kullanımı, kopyalanması, ifşa edilmesi veya dağıtılması kesinlikle yasaktır.<br><br>This e-mail and any attachments are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this e-mail in error,<br>please notify the sender immediately and delete it from your system.'
  );

  const [environmentText, setEnvironmentText] = React.useState(
    'Lütfen ağaçları ve doğayı koruyun. Lütfen bu e-postayı yazdırmadan önce düşünün.</br>Please protect the trees and the nature. Please think before printing this e-mail.'
  );

  const { list } = useCrud<CompanyRequest, CompanyResponse>('companies', companyService);
  const companies = list.data ?? [];

  // ✅ tek kaynak: state'lerden datas üret
  const datas: SignatureData = useMemo(
    () => ({
      fullName,
      department,
      email,
      phone,
      mobilePhone,
      googleUrlLink,
      address,
      logo,
      domain_name,
      instagram,
      facebook,
      kdvInformation,
      informationText,
      news,
      environmentText
    }),
    [
      fullName,
      department,
      email,
      phone,
      mobilePhone,
      googleUrlLink,
      address,
      logo,
      domain_name,
      instagram,
      facebook,
      kdvInformation,
      informationText,
      news,
      environmentText,
    ]
  );

  // ✅ imza html'i seçili firmaya göre derived üret
  const signatureHtml = useMemo(() => {
    if (!selectedCompanyId) return '';
    const templateFn = SUGNATURE_TEMPLATE_BY_COMPANY_ID[selectedCompanyId];
    return templateFn ? templateFn(datas) : '';
  }, [selectedCompanyId, datas]);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    setSelectedCompanyId(selectedId);

    const selectedCompany = companies.find((c) => c.id === selectedId);
    if (!selectedCompany) return;

    // company bilgileri
    setDomainName(selectedCompany.domainName || '');
    setPhone(selectedCompany.phone || '');
    setAddress(selectedCompany.address || '');
    setKdvInformation(selectedCompany.kdvText || '');
    setInformationText(selectedCompany.informationText || '');
    setEnvironmentText(selectedCompany.environmentText || environmentText);

    const assetsByType = mapAssetsByType(selectedCompany.components);

    setFacebook(assetsByType.Facebook?.targetUrl || '');
    setInstagram(assetsByType.Instagram?.targetUrl || '');
    setGoogleUrlLink(assetsByType.Google?.targetUrl || '');
    setNews(assetsByType.News?.targetUrl || '');
  };

  return (
    <Container className="mt-5 mb-3">
      <Row className="mb-4">
        <h5 className="text-center mt-2 mb-4 fw-bold fs-3" style={{ color: '#1796d2' }}>
          CW Enerji Firmalar Mail İmzası Oluşturma
        </h5>

        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
           <Col sm="6" col-lg="12">
              <FormSelect value={selectedCompanyId} className='mb-3' onChange={handleCompanyChange}>
                <option value="" disabled>
                  Seçiniz
                </option>
                {Array.isArray(companies) &&
                  companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.companyName}
                    </option>
                  ))}
              </FormSelect>
            </Col>

            <Col sm="6" col-lg="12">
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="İsim"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Col>

           <Col sm="6" col-lg="12">
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="Ünvan"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </Col>

          <Col sm="6" col-lg="12">
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>

            <Col sm="6" lg="12">
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="Cep Telefonu 0(5xx) xxx xx xx"
                value={mobilePhone}
                onChange={(e) => setMobilePhone(formatPhone(e.target.value))}
              />
            </Col>
          </Form.Group>
        </Form>

        <DownloadSignature targetRef={sigRef} />
        <hr />

        {/* ✅ sadece HTML bas */}
        <SignatureView signatureHtml={signatureHtml} targetRef={sigRef} />
      </Row>
    </Container>
  );
}

export default Home;
