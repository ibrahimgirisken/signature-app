'use client'
import Cookies from 'js-cookie';
import { http } from '@/lib/http';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function login() {
  const [formData, setFormData] = useState({ userNameOrEmail: '', password: '' });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const sp = useSearchParams();
  const callbackUrl = sp.get('callbackUrl') || '/admin';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await http.post(`${process.env.NEXT_PUBLIC_API_URL}/Auth/login`, {
        userNameOrEmail: formData.userNameOrEmail,
        password: formData.password,
      });

      if (res.data.ok) {
        router.replace(callbackUrl);
        return;
      }

      const { token } = res.data;
      localStorage.setItem("token", token);
      Cookies.set('token', token, { expires: 1, secure: true });
      router.push(callbackUrl);
    } catch (error: any) {
      alert("Giriş başarısız: " + (error.response?.data?.message || "Hata!"));
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="border rounded p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <Col>
          <h3 className="text-center mb-4">Kullanıcı Girişi</h3>
          <Form onSubmit={handleLogin} noValidate>
            <Form.Group className="mb-3" controlId="userNameOrEmail">
              <Form.Label>Kullanıcı Adı | E-posta</Form.Label>
              <Form.Control
                type="text"
                name="userNameOrEmail"
                value={formData.userNameOrEmail}
                onChange={(e) => setFormData((s) => ({ ...s, userNameOrEmail: e.target.value }))}
                autoComplete="username"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData((s) => ({ ...s, password: e.target.value }))}
                autoComplete="current-password"
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? 'Giriş yapılıyor…' : 'Giriş Yap'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default login