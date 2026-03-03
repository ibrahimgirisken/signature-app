import React, { useEffect, useState } from 'react';

interface ImageViewProps {
  // image artık hem File (yerel) hem de string (URL) olabilir
  image: File | null;
}

function ImageView({ image }: ImageViewProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }

    // EĞER image bir dosya (File) ise yerel URL oluştur
    if (image instanceof File) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);
      
      // Bellek temizliği sadece yerel dosyalar için gereklidir
      return () => URL.revokeObjectURL(objectUrl);
    } 
    
    // EĞER image zaten bir string (URL) ise doğrudan state'e ata
    else {
      setPreview(image);
    }
  }, [image]);

  if (!preview) return <p>Görsel bulunamadı.</p>;

  return (
    <img
      src={preview}
      alt="Görsel İçerik"
      style={{
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        maxWidth: '100%',
        width: '150px',
        height: 'auto',
        display: 'block'
      }}
    />
  );
}

export default ImageView;