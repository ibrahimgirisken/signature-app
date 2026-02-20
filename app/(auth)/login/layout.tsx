import '@/app/globals.css';
import React from 'react'

export const metadata={
    title:"Login",
    description:"Yönetici Panel Girişi"
}

function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <>
            {children}
    </>
  )
}

export default RootLayout