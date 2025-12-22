import { color } from "html2canvas/dist/types/css/types/color";

function Download({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement | null>;
}) {
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

    alert("İmza HTML olarak panoya kopyalandı ✅");
  };

  const handleHtmlDownload = () => {
    if (!targetRef.current) return;

    const html = targetRef.current.innerHTML;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "signature.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
  <>
  <button style={{display:"flex",position:"absolute",float:"right",right:"25%",top:"45%",backgroundColor:"#1796d2",color:"white",padding:"10px",borderRadius:"5px"}} onClick={handleCopy}>Kopyala</button>;

  <button style={{display:"flex",position:"absolute",float:"right",right:"25%",top:"50%",backgroundColor:"#ffc107",color:"white",padding:"10px",borderRadius:"5px"}} onClick={handleHtmlDownload}>HTML İndir</button>;  
  </>
  )
}

export default Download;