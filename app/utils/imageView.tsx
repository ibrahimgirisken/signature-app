import React, { useEffect, useState } from 'react';

interface ImageViewProps {
  image: File | null;
}

function ImageView({ image }: ImageViewProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }

    if (image instanceof File) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);
      
      return () => URL.revokeObjectURL(objectUrl);
    } 
    
    else {
      setPreview(image);
    }
  }, [image]);

  if (!preview) return <p>Yeni Görsel Seçilmedi</p>;

  return (
    <>
    <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Seçilen Görsel:</div>
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
    </>

  );
}

export default ImageView;