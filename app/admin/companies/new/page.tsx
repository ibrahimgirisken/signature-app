'use client'
import CompanyForm from '@/features/company/components/CompanyForm'
import { useRouter } from 'next/navigation'
import React from 'react'

function CompanyAdd() {
      const router = useRouter()
  return (
     <>
            <h2>Firma Ekleme Sayfası</h2>
            <CompanyForm onSuccess={() => {
                console.log("Firma Eklendi")
                router.push('/admin/companies/new')
            }} />
        </>
  )
}

export default CompanyAdd