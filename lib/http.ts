import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

// İstek gönderilmeden hemen önce araya giriyoruz (Request Interceptor)
http.interceptors.request.use(
  (config) => {
    // Token'ı localStorage'dan (veya cookie'den) alıyoruz
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      // "Authorization: Bearer <token>" formatında header'a ekliyoruz
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Cevap geldiğinde hata kontrolü yapıyoruz (Response Interceptor)
http.interceptors.response.use(
  (response) => response,
  (error) => {
    // Eğer sunucu 401 (Unauthorized) dönerse, token süresi dolmuş olabilir
    if (error.response?.status === 401) {
      // Kullanıcıyı login sayfasına yönlendirebilir veya token yenileyebilirsiniz
      console.error("Oturum süresi dolmuş!");
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
