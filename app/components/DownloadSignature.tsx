'use client';
import { useEffect } from "react";

export default function DownloadSignature({ targetRef }: { targetRef: React.RefObject<HTMLDivElement | null> }) {
 const handleCopy = async () => {
     if (!targetRef.current) return;
 
     const html = targetRef.current.innerHTML;
     const text = targetRef.current.innerText;
 
     await navigator.clipboard.write([
       new ClipboardItem({
         "text/html": new Blob([html], { type: "text/html" }),
         "text/plain": new Blob([text], { type: "text/plain" }),
       }),
     ]);
     const alertify = (await import('alertifyjs')).default;
     alertify.set("notifier", "position", "top-center");
     alertify.success("İmza HTML olarak panoya kopyalandı ✅");
   };
 
   const handleHtmlDownload = () => {
     if (!targetRef.current) return;
    
     const html = targetRef.current.innerHTML;
     const blob = new Blob([html], { type: "text/html" });
     const url = URL.createObjectURL(blob);
    
 
     URL.revokeObjectURL(url);
   }

  return (
    <div className="btn-items">
      <button style={{ display: "flex", position: "absolute", float: "right", right: "15%", top: "48%", backgroundColor: "#1796d2", color: "white", padding: "10px", borderRadius: "5px" }} onClick={handleCopy}>Kopyala</button>

      <button style={{ display: "flex", position: "absolute", float: "right", right: "15%", top: "53%", backgroundColor: "#ffc107", color: "white", padding: "10px", borderRadius: "5px" }} onClick={handleHtmlDownload}>HTML İndir</button>
    </div>
  )
}
