import { SignatureData } from "./types";
export const cwenerjiSigranuture = (signatureData: SignatureData) => `
<!-- =========================
     CW ENERJİ MAIL SIGNATURE
     HTML – MAIL SAFE TEMPLATE
     ========================= -->

<style type="text/css">
  /* Mail client safe reset */
  table { border-collapse: collapse; }
  img { display: block; border: 0; outline: none; }
  a { text-decoration: underline; color: #0070C0; }
</style>

<div
  style="
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 1.3;
    color: #0070C0;
    max-width: 720px;
>

  <!-- Selamlama -->
  <div style="font-style: italic; margin-bottom: 10px;">
    Saygılarımla / Best Regards / Mit freundlichen Grüßen
  </div>

  <!-- İsim -->
  <div style="font-size: 16px; font-weight: 700; color: #0B58B5;">
    ${signatureData.fullName}
  </div>

  <!-- Ünvan -->
  <div style="font-size: 14px; margin-bottom: 20px;color: #0B58B5;">
    ${signatureData.department}<br/>
  </div>
    <div style="margin-bottom: 5px;">
    <br/><br/>
  </div>

  <!-- İletişim + Sağ Banner -->
  <table width="720" cellpadding="0" cellspacing="0">
    <tr>
      <td width="520" valign="top">
        <table width="520" cellpadding="0" cellspacing="0">
          <tr>
            <td width="110" style="font-weight:700;color: #0B58B5;">E-posta</td>
            <td>
              :
              <a href="mailto:${signatureData.email}" style="color: #0B58B5;">
                ${signatureData.email}
              </a>
            </td>
          </tr>
          <tr>
            <td style="font-weight:700;color: #0B58B5;">Cep Telefonu</td>
            <td style="color: #0B58B5;">: ${signatureData.mobilePhone}</td>
          </tr>
          <tr>
            <td style="font-weight:700;color: #0B58B5;">Telefon</td>
            <td style="color: #0B58B5;">: ${signatureData.phone}</td>
          </tr>
                    <tr>
            <td style="font-weight:700;color: #0B58B5;">Fax</td>
            <td style="color: #0B58B5;">: ${signatureData.fax}</td>
          </tr>
           <tr>
            <td style="font-weight:700;color: #0B58B5;">Web</td>
            <td style="color: #0B58B5;">: 
             <a href="https://${signatureData.domain_name}" style="color: #0B58B5;" target="_blank">
                ${signatureData.domain_name}
              </a>
            </td>
          </tr>
          <tr>
            <td style="font-weight:700; vertical-align:top;color: #0B58B5;">Adres</td>
            <td style="line-height:1.35;color: #0B58B5;"">
              : ${signatureData.address}
            </td>
          </tr>
        </table>
      </td>

      <td width="200" valign="top" align="right">
        <a href="${signatureData.googleUrlLink}" target="_blank">
          <img
            src="cw-enerji-gorusleriniz-icon.jpg"
            width="200"
            height="104"
            alt=""
          />
        </a>
      </td>
    </tr>
  </table>

  <!-- Video / Reklam Alanı -->
  <table width="720" cellpadding="0" cellspacing="0">
    <tr>
    <br/>
      <td width="510">
        <a href="https://${signatureData.domain_name}" target="_blank">
          <img
            src="${signatureData.companyLogo ? `${process.env.NEXT_PUBLIC_API_IMAGE_URL}${signatureData.companyLogo}` : "cw-enerji-plus.jpg"}"
            width="510"
            height="116"
            alt=""
          />
        </a>
      </td>

      <td width="210" align="center">
        <a href="https://www.youtube.com/watch?v=rDa8JF7KywE" target="_blank">
          <img
            src="./cw-enerji-youtube-gorseli.png"
            width="110"
            height="86"
            alt=""
            style="border-radius:12px;"
          />
        </a>
        <div style="font-size:12px; color:#7F7F7F;">
          CW Enerji Tanıtım
        </div>
      </td>
    </tr>
  </table>

  <!-- Çizgi -->
      <br/>
  <div style="border-top:1px solid #D0CECE; margin:12px 0; width:720px;"></div>

  <!-- KDV Metni -->
  <div style="font-size:10px;color:#7F7F7F;width:720px;height:auto;">
    "${signatureData.kdvInformation}"
  </div>

  <!-- Alt Link Logolar -->
  <table width="720" cellpadding="0" cellspacing="0" style="margin-top:10px;">
    <tr>
      <td width="240">
        <a href="${signatureData.timotech}" target="_blank">
          <img src="./timotech-logo.png" width="200" height="74" alt="" />
        </a>
      </td>
      <td width="240">
        <a href="${signatureData.academy}" target="_blank">
          <img src="./cw-akademi.png" width="200" height="74" alt="" />
        </a>
      </td>
      <td width="240">
        <a href="${signatureData.downloadCenter}" target="_blank">
          <img src="./indirme-merkezi.jpg" width="200" height="74" alt="" />
        </a>
      </td>
    </tr>
  </table>

<table
  width="720"
  cellpadding="0"
  cellspacing="0"
  style="margin-top:10px; border-collapse:collapse; text-align:center;"
>
  <tr>
    <td width="25%" style="
    width:145.8pt;
    border:none;
    border-bottom:
    solid #4472C4 1.5pt;
    background:#DEEAF6;
    padding:0in 5.4pt 0in 5.4pt
    ">
      <a
        href="${signatureData.news}"
        target="_blank"
        style="
          display:block;
          background-color:#DEEAF6;
          padding:8px 6px;
          font-size:14px;
          color:#679fd5;
          text-decoration:none;
        "
      >
        Haberler
      </a>
    </td>

    <td width="25%" style="
    width:145.8pt;
    border:none;
    border-bottom:
    solid #4472C4 1.5pt;
    background:#DEEAF6;
    padding:0in 5.4pt 0in 5.4pt
    ">
      <a
        href="${signatureData.fair}"
        target="_blank"
        style="
          display:block;
          background-color:#DEEAF6;
          padding:8px 6px;
          font-size:14px;
          color:#679fd5;
          text-decoration:none;
        "
      >
        Fuarlar
      </a>
    </td>

    <td width="25%" style="
    width:145.8pt;
    border:none;
    border-bottom:
    solid #4472C4 1.5pt;
    background:#DEEAF6;
    padding:0in 5.4pt 0in 5.4pt
    ">
      <a
        href="${signatureData.academy}"
        target="_blank"
        style="
          display:block;
          background-color:#DEEAF6;
          padding:8px 6px;
          font-size:14px;
          color:#679fd5;
          text-decoration:none;
        "
      >
        Online Eğitim
      </a>
    </td>

    <td width="25%" style="
    width:145.8pt;
    border:none;
    border-bottom:
    solid #4472C4 1.5pt;
    background:#DEEAF6;
    padding:0in 5.4pt 0in 5.4pt
    ">
      <a
        href="${signatureData.contact}"
        target="_blank"
        style="
          display:block;
          background-color:#DEEAF6;
          padding:8px 6px;
          font-size:14px;
          color:#679fd5;
          text-decoration:none;
        "
      >
        İletişim Formu
      </a>
    </td>
  </tr>
</table>

  <table width="720" cellpadding="0" cellspacing="0" style="margin-top:10px;">
       <tr align="center" valign="middle" style="color: #7F7F7F;font-size: 10px;display: flex;justify-content: center;gap:10px;">
      <td valign="top" style="width:25pt;padding:0in .1pt 0in .1pt">
       <a href="${signatureData.facebook}" target="_blank">
          <img
            src="./facebook.jpg"
            width="25"
            height="25"
            alt=""
            style="border-radius:12px;"
          />
        </a>
        </td>
      <td valign="top" style="width:25pt;padding:0in .1pt 0in .1pt">
         <a href="${signatureData.instagram}" target="_blank">
          <img
            src="./instagram.jpg"
            width="25"
            height="25"
            alt=""
            style="border-radius:12px;"
          />
        </a>
      </td>
       <td valign="top" style="width:25pt;padding:0in .1pt 0in .1pt">
         <a href="${signatureData.twitter}" target="_blank">
          <img
            src="twitter.png"
            width="25"
            height="25"
            alt=""
            style="border-radius:12px;"
          />
        </a>
      </td>
            <td valign="top" style="width:25pt;padding:0in .1pt 0in .1pt">
         <a href="${signatureData.linkedin}" target="_blank">
          <img
            src="linkedin.png"
            width="25"
            height="25"
            alt=""
            style="border-radius:12px;"
          />
        </a>
      </td>
            <td valign="top" style="width:25pt;padding:0in .1pt 0in .1pt">
         <a href="${signatureData.youtube}" target="_blank">
          <img
            src="youtube.png"
            width="25"
            height="25"
            alt=""
            style="border-radius:12px;"
          />
        </a>
      </td>
      </tr>
  </table>
  <table width="720" height="250" cellpadding="0" cellspacing="0" style="margin-top:10px;">
       <tr style="color: #7F7F7F;font-size: 10px;gap:10px;">
      <td valign="top" style="padding-top:10px;">
         <a href="${signatureData.fair}" target="_blank">
      <img src="${signatureData.fairImage ? `${process.env.NEXT_PUBLIC_API_IMAGE_URL}${signatureData.fairImage}` : ""}" width="720" height="360" alt="" />
      </a>
        </td>
        </tr>
  </table>

  <!-- Detaylı Yasal Metin (DISCLAIMER) -->
  <table width="720" cellpadding="0" cellspacing="0" style="margin-top:10px;">
       <tr style="color: #7F7F7F;font-size: 10px;gap:10px;">
      <td valign="top" style="padding-top:10px;">
       ${signatureData.informationText}
        </td>
        </tr>
  </table>


  <!-- Çevre Mesajı -->
  <table width="720" cellpadding="0" cellspacing="0" style="margin-top:10px;">
    <tr>
      <td width="70" valign="top">
        <img src="./cevre.jpg" width="64" height="57" alt="" />
      </td>
      <td valign="top" style="padding-left:8px;padding-top:10px;">
        <div style="font-size:10px; color:#7F7F7F; font-style:italic;">
          ${signatureData.environmentText}
        </div>
      </td>
    </tr>
  </table>
</div>
  `;