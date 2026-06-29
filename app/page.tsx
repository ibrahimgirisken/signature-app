'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  companyLogo: string;
  fairImage: string;
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

  const [selectedCompanyName, setSelectedCompanyName] = React.useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [fullName, setFullName] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [mobilePhone, setMobilePhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [address3, setAddress3] = React.useState('');
  const [companyLogo, setCompanyLogo] = React.useState('');
  const [fairImage, setFairImage] = React.useState('');
  const [domain_name, setDomainName] = React.useState('');
  const [news, setNews] = React.useState('');
  const [fair, setFair] = React.useState('');
  const [downloadCenter, setDownloadCenter] = React.useState('');
  const [timotech, setTimotech] = React.useState('');
  const [academy, setAcademy] = React.useState('');
  const [googleUrlLink, setGoogleUrlLink] = React.useState('');
  const [contactUrlLink, setContactUrlLink] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [facebook, setFacebook] = React.useState('');
  const [linkedin, setLinkedin] = React.useState('');
  const [twitter, setTwitter] = React.useState('');
  const [youtube, setYoutube] = React.useState('');
  const [youtubeVideo, setYoutubeVideo] = React.useState('');
  const [youtubeVideo2, setYoutubeVideo2] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [fax, setFax] = React.useState('');
  const [other, setOther] = React.useState('');
  const [rawCompanies, setRawCompanies] = useState<CompanyResponse[]>([]);
  const [kdvInformation, setKdvInformation] = React.useState(
    'KDV KANUNUN 117 SAYILI TEBLİĞ’İN 3.1.2/B MADDESİNE GÖRE BORSA İSTANBUL’DA İŞLEM GÖREN ŞİRKETİMİZE DÜZENLENECEK FATURALARDA KDV <br/> TEVKİFATINA ÖZEN GÖSTERİLMESİ RİCA OLUNUR.'
  );

  const [informationText, setInformationText] = React.useState(
    'Bu elektronik posta ve ekleri gizlidir ve yalnızca gönderildiği gerçek veya tüzel kişi tarafından kullanılması amacıyla gönderilmiştir. Eğer bu elektronik postayı yanlışlıkla aldıysanız,<br>lütfen göndereni derhal bilgilendiriniz ve mesajı sisteminizden siliniz. Bu mesajın izinsiz kullanımı, kopyalanması, ifşa edilmesi veya dağıtılması kesinlikle yasaktır.<br><br>This e-mail and any attachments are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this e-mail in error,<br>please notify the sender immediately and delete it from your system.'
  );

  const [environmentText, setEnvironmentText] = React.useState(
    'Lütfen ağaçları ve doğayı koruyun. Lütfen bu e-postayı yazdırmadan önce düşünün.</br>Please protect the trees and the nature. Please think before printing this e-mail.'
  );

  const { getall } = useCrud<CompanyRequest, CompanyResponse>('companies', companyService);

  useEffect(() => {
    if (getall?.data) {
      setRawCompanies(getall.data);
      setLoading(false);
    }
  }, [getall?.data]);


  const companies = useMemo(() => {
    if (!Array.isArray(rawCompanies)) return [];

    return [...rawCompanies].sort((a, b) => {
      return (a.companyName || '').localeCompare(b.companyName || '', 'tr', {
        sensitivity: 'base',
        numeric: true
      });
    });
  }, [rawCompanies]);

  const datas: SignatureData = useMemo(
    () => ({
      fullName,
      department,
      email,
      phone,
      fax,
      mobilePhone,
      googleUrlLink,
      contactUrlLink,
      address,
      address2,
      address3,
      companyLogo,
      fairImage,
      domain_name,
      instagram,
      facebook,
      twitter,
      linkedin,
      youtube,
      youtubeVideo,
      youtubeVideo2,
      contact,
      kdvInformation,
      informationText,
      news,
      fair,
      downloadCenter,
      timotech,
      academy,
      environmentText,
      other
    }),
    [
      fullName,
      department,
      email,
      phone,
      fax,
      mobilePhone,
      googleUrlLink,
      contactUrlLink,
      address,
      address2,
      address3,
      companyLogo,
      fairImage,
      domain_name,
      instagram,
      facebook,
      twitter,
      linkedin,
      youtube,
      youtubeVideo,
      youtubeVideo2,
      contact,
      kdvInformation,
      informationText,
      news,
      fair,
      downloadCenter,
      timotech,
      academy,
      environmentText,
      other
    ]
  );

  const signatureHtml = useMemo(() => {
    if (!selectedCompanyName) return '';
    const templateFn = SUGNATURE_TEMPLATE_BY_COMPANY_ID[selectedCompanyName];
    return templateFn ? templateFn(datas) : '';
  }, [selectedCompanyName, datas]);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCompanyName = e.target.value;
    setSelectedCompanyName(selectedCompanyName);

    let selectedCompany = companies.find((c) => c.companyName === selectedCompanyName);
    if (!selectedCompany) return;
    setCompanyLogo(selectedCompany.companyLogo || '');
    setFairImage(selectedCompany.fairImage || '');
    setDomainName(selectedCompany.domainName || '');
    setPhone(selectedCompany.phone || '');
    setFax(selectedCompany.fax || '');
    setAddress(selectedCompany.address || '');
    setAddress2(selectedCompany.address2 || '');
    setAddress3(selectedCompany.address3 || '');
    setKdvInformation(selectedCompany.kdvText || '');
    setInformationText(selectedCompany.informationText || '');
    setEnvironmentText(selectedCompany.environmentText || environmentText);

    const assetsByType = mapAssetsByType(selectedCompany.components);

    setFacebook(assetsByType.Facebook?.targetUrl || '');
    setInstagram(assetsByType.Instagram?.targetUrl || '');
    setTwitter(assetsByType.Twitter?.targetUrl || '');
    setLinkedin(assetsByType.LinkedIn?.targetUrl || '');
    setYoutube(assetsByType.Youtube1?.targetUrl || '');
    setYoutubeVideo(assetsByType.Youtube2?.targetUrl || '');
    setYoutubeVideo2(assetsByType.Youtube3?.targetUrl || '');
    setGoogleUrlLink(assetsByType.Google?.targetUrl || '');
    setContactUrlLink(assetsByType.Contact?.targetUrl || '');
    setNews(assetsByType.News?.targetUrl || '');
    setTimotech(assetsByType.Timotech?.targetUrl || '');
    setFair(assetsByType.Fair?.targetUrl || '');
    setDownloadCenter(assetsByType.DownloadCenter?.targetUrl || '');
    setContact(assetsByType.Contact?.targetUrl || '');
    setAcademy(assetsByType.Academy?.targetUrl || '');
    setOther(assetsByType.Other?.targetUrl || '');
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
              <FormSelect
                value={selectedCompanyName}
                className='mb-3'
                onChange={handleCompanyChange}
                disabled={loading}
              >
                {loading ? (
                  <option value="">Şirketler yükleniyor...</option>
                ) : (
                  <option value="" disabled>
                    Seçiniz
                  </option>
                )}

                {!loading && Array.isArray(companies) &&
                  companies.map((company) => (
                    <option key={company.id} value={company.companyName}>
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

        <SignatureView signatureHtml={signatureHtml} targetRef={sigRef} />
      </Row>
    </Container>
  );
}

export default Home;
