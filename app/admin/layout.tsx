import '@/app/globals.css';
import { ReactNode } from 'react';
import AdminLayoutClient from '../components/layout/AdminLayoutClient';

export const metadata = {
  title: 'Signature Admin Paneli',
  description: 'Signature içerik yönetimi',
  icons:{
    icon:"app\favicon.ico"
  }
};


export default async function AdminLayout({ children }: { children: ReactNode }) {
  const locale = 'tr';

  return (
    <AdminLayoutClient>
        {children}
    </AdminLayoutClient>
  );
}
