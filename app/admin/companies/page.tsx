'use client'
import { useCrud } from '@/hooks/useCrud';
import { companyService } from '@/services/company.service';
import { CompanyRequest, CompanyResponse } from '@/types/company';
import Link from 'next/link'
import { Button, Table } from 'react-bootstrap'
function CompanyList() {
    const { getall } = useCrud<CompanyRequest, CompanyResponse>('companies', companyService);
    const companies = getall.data ?? [];
  return (
    <>
    <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Firma Listesi</h2>
        <Link href="/admin/companies/new">
          <Button variant="primary">Yeni Firma Ekle</Button>
        </Link>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Marka İsmi</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {companies&&companies.map((company,index)=>{
                  return(
                    <tr key={company.id}>
                  <td>{index}</td>
                  <td>{company.companyName}</td>
                  <td>
                    <Link href={`/admin/companies/${company.id}/edit`}>
                      <Button variant="warning" size="sm" className="me-2">
                        Düzenle
                      </Button>
                    </Link>
                  </td>
                </tr>
                  )
                })
            }
          </tbody >
        </Table >
      </div >
    </>
  )
}

export default CompanyList