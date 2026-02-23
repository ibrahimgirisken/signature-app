'use client'
import Cookies from 'js-cookie';
import { http } from '@/lib/http';
import React, { Suspense, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

// 1. Hook kullanan form bileşenini ayırıyoruz
function LoginForm() {
  const [formData, setFormData] = useState({ userNameOrEmail: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await http.post(`/Auth/login`, {
        userNameOrEmail: formData.userNameOrEmail,
        password: formData.password,
      });

      const { token } = res.data;
      console.log("Gelen token:", token);
      console.log("env NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL);
      if (token) {
        localStorage.setItem("token", token);
        Cookies.set('token', token, {
          expires: 1,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/'
        });
        window.location.href = '/admin'; // Sayfayı yenileyerek yönlendirme
      }
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
  );
}

// 2. Ana sayfa bileşeni (Default Export)
export default function LoginPage() {
  return (
    // Suspense Boundary build hatasını engeller
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <LoginForm />
    </Suspense>
  )
}