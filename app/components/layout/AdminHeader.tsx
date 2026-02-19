'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function AdminHeader() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);
  return (
    <>
      <header className="text-white">
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/admin">Mail İmza Düzenleme Sayfası</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <Nav.Link href="../">Site</Nav.Link>
                <Nav.Link href="/logout">Çıkış</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default AdminHeader