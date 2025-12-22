'use client';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'
import { formatPhone } from "./utils/formatPhone";

function Home() {
  const [fullName, setFullName] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [mobilePhone, setMobilePhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [logo, setLogo] = React.useState('');
    const [domain_name, setDomainName] = React.useState('');
    const [googleUrlLink, setGoogleUrlLink] = React.useState('');
  return (
     <>
   <Container className='mt-5 mb-3'>
                <Row className='mb-4'>
                    <h5 className='text-center mt-2 mb-4 fw-bold fs-3' style={{color:'#1796d2'}}>CW Enerji Firmalar Mail İmzası Oluşturma</h5>
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
    </>
  )
}

export default Home