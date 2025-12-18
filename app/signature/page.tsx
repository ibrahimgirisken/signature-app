'use client';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import SignatureView from './signature-view'

function Signature({url}:{url?:string}) {

  const [fullName, setFullName] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [mobilePhone, setMobilePhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [logo, setLogo] = React.useState('');

 useEffect(() => {
  if (!url) return;

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/mail-data?subdomain=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json();
      const addressData=json.data.adres+' '+json.data.ilce_name +' / '+json.data.il_name;
      setAddress(addressData);
      setPhone(json.data.phone);
      setLogo(json.data.img);
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
    address,
    logo,
  }
  return (
    <>
   <Container className='mt-5 mb-3'>
                <Row className='mb-4'>
                    <h5 className='text-center mt-2 mb-4 fw-bold fs-3' style={{color:'#0070C0'}}>CW Enerji Plus Mail İmzası Oluşturma</h5>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Col sm="6">
                                <Form.Control type='text' className="mb-3" placeholder="İsim" value={fullName??''} onChange={(e) => setFullName(e.target.value)} />
                            </Col>

                            <Col sm="6">
                                <Form.Control type="text" className="mb-3" placeholder="Ünvan" value={department??''} onChange={(e) => setDepartment(e.target.value)} />
                            </Col>
                            <Col sm="6">
                                <Form.Control type="text" className="mb-3" placeholder="E-mail" value={email??''} onChange={(e) => setEmail(e.target.value)} />
                            </Col>
                            <Col sm="6">
                                <Form.Control type="text" className="mb-3" placeholder="Cep Telefonu" value={mobilePhone??''} onChange={(e) => setMobilePhone(e.target.value)} />
                            </Col>
                        </Form.Group>
                    </Form>
                <hr/>
                </Row>
            </Container>
    <SignatureView datas={datas} />
    </>
  )
}

export default Signature