"use client"; // <--- Bu satırı en üste ekleyin

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        // 1. Temizlik İşlemleri
        localStorage.removeItem("token");
        Cookies.remove('token');

        // 2. Yönlendirme
        router.push("/login");
        
        // 3. Cache'i temizlemek için sayfayı yenile
        router.refresh();
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <p>Çıkış yapılıyor, lütfen bekleyin...</p>
        </div>
    );
}