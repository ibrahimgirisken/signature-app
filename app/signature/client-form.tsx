'use client';
import React from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function ClientForm() {
    return (
        <>
            <Container className='mt-5'>
                <Row className='mb-4'>
                    <h5 className='text-center mt-2 mb-4'>CW Plus Mail İmzası</h5>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Col sm="6">
                                <Form.Control type='text' className="mb-3" placeholder="İsim" />
                            </Col>
                            <Col sm="6">
                                <Form.Control type="text" className="mb-3" placeholder="Soyisim" />
                            </Col>

                            <Col sm="6">
                                <Form.Control type="text" className="mb-3" placeholder="Ünvan" />
                            </Col>
                            <Col sm="6">
                                <Form.Control type="text" className="mb-3" placeholder="E-mail" />
                            </Col>
                            <Col sm="6">
                                <Form.Control type="text" className="mb-3" placeholder="Cep Telefonu" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default ClientForm