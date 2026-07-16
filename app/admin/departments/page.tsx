'use client'
import { departmentService } from '@/services/department.service';
import { DepartmentResponse } from '@/types/department';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap'
function DepartmentList() {

  const [departments, setDepartments] = useState<DepartmentResponse[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      setDepartments(await departmentService.getAll());
    };
    fetchDepartments();
  },[]);
  
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Departman Listesi</h2>
        <Link href="/admin/departments/new">
          <Button variant="primary">Yeni Departman Ekle</Button>
        </Link>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Departman İsmi</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {departments && departments.map((department, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index+ 1}</td>
                  <td>{department.departmentName}</td>
                  <td>{department.status}</td>
                  <td>
                    <Link href={`/admin/departments/${department.id}/edit`}>
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

export default DepartmentList