'use client';
import React from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Signature() {
    return (
        <>
            <Container className='mt-5'>
                <Row className='mb-4'>
                    <h5 className='text-center'>CW Plus Mail İmzası</h5>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">
                                İsim
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' placeholder="İsim" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
                            <Form.Label column sm="2">
                                Soyisim
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Soyisim" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextTitle">
                            <Form.Label column sm="2">
                                Ünvan
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Ünvan" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                E-mail
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="E-mail" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
                            <Form.Label column sm="2">
                                Cep Telefonu
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Cep Telefonu" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Signature