'use client';
import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import SignatureView from './signature-view'
import { formatPhone } from '../utils/formatPhone';
import Download from '../download/page';
import { useSearchParams } from 'next/navigation';

function Signature() {
  const sp=useSearchParams();
  const url=sp.get("bayi") ??"cwplus"
  const [fullName, setFullName] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [mobilePhone, setMobilePhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [logo, setLogo] = React.useState('');
  const [domain_name, setDomainName] = React.useState('');
  const [googleUrlLink, setGoogleUrlLink] = React.useState('');

const sigRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  if (!url) return;

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/mail-data?subdomain=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json();
      const addressData=json.iletisim.adres;
      setAddress(addressData);
      setPhone(json.iletisim.tel);
      setLogo(json.data.img);
      setDomainName(json.data.domain_name);
      setGoogleUrlLink(json.iletisim.google_url);
      console.log(json.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  fetchData();
}, [url]);


  const datas={
    fullName,
    department,
    email,
    phone,
    mobilePhone,
    googleUrlLink,
    address,
    logo,
    domain_name,
  }
  return (
    <>
   <Container className='mt-5 mb-3'>
                <Row className='mb-4'>
                    <h5 className='text-center mt-2 mb-4 fw-bold fs-3' style={{color:'#1796d2'}}>CW Enerji Plus Mail İmzası Oluşturma</h5>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Col sm="6" col-lg="12">
                                <Form.Control type='text' className="mb-3" placeholder="İsim" value={fullName??''} onChange={(e) => setFullName(e.target.value)} />
                            </Col>

                            <Col sm="6" col-lg="12">
                                <Form.Control type="text" className="mb-3" placeholder="Ünvan" value={department??''} onChange={(e) => setDepartment(e.target.value)} />
                            </Col>
                            <Col sm="6" col-lg="12">
                                <Form.Control type="text" className="mb-3" placeholder="E-mail" value={email??''} onChange={(e) => setEmail(e.target.value)} />
                            </Col>
                            <Col sm="6" col-lg="12">
                                <Form.Control type="text" className="mb-3" placeholder="Cep Telefonu 0(5xx) xxx xx xx" value={mobilePhone??''} onChange={(e) => setMobilePhone(formatPhone(e.target.value))} />
                            </Col>
                        </Form.Group>
                    </Form>
                <hr/>
                </Row>
            </Container>
    <SignatureView datas={datas} targetRef={sigRef}/>
    <Download targetRef={sigRef}/>
    </>
  )
}

export default Signature