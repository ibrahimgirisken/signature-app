'use client'
import { moduleService } from '@/services/module.service';
import { ModuleResponse } from '@/types/module';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap'
function ModuleList() {

  const [modules, setModules] = useState<ModuleResponse[]>([]);

  useEffect(() => {
    const fetchModules = async () => {
      setModules(await moduleService.getAll());
    };
    fetchModules();
  },[]);
  
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Module Listesi</h2>
        <Link href="/admin/modules/new">
          <Button variant="primary">Yeni Modül Ekle</Button>
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
            {modules && modules.map((module, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index+ 1}</td>
                  <td>{module.moduleName}</td>
                  <td>{module.status}</td>
                  <td>
                    <Link href={`/admin/modules/${module.id}/edit`}>
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

export default ModuleList