'use client'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function AdminFooter() {
  return (
   <>
      <footer>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container className='text-center'>
            <h6 className='text-white'>
              Copyright © 2026 Your Company. All rights reserved.
            </h6>
          </Container>
        </Navbar>
      </footer>
    </>
  )
}

export default AdminFooter