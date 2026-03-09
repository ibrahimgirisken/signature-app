import { SignatureData } from "./types";
export const cwplusSignature = (signatureData: SignatureData) => `
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
    font-size: 10pt;
    line-height: 1.3;
    color: #0070C0;
    max-width: 720px;
>

  <!-- Selamlama -->
  <div style="font-style: italic; margin-bottom: 10pt;">
    Saygılarımla / Best Regards / Mit freundlichen Grüßen
  </div>

  <!-- İsim -->
  <div style="font-size: 13pt; font-weight: 700; color: #0B58B5;">
    ${signatureData.fullName}
  </div>

  <!-- Ünvan -->
  <div style="font-size: 12pt; margin-bottom: 20px;color: #0B58B5;">
    ${signatureData.department}<br/>
  </div>
    <div style="margin-bottom: 5pt;">
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
            <td style="font-weight:700;color: #0B58B5;">Web</td>
            <td style="color: #0B58B5;">: 
             <a href="https://${signatureData.domain_name}.cw-enerji.com" style="color: #0B58B5;" target="_blank">
                ${signatureData.domain_name}.cw-enerji.com
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
            src="gorusleriniz-degerli.png"
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
      <td width="300">
        <a href="https://${signatureData.domain_name}.cw-enerji.com" target="_blank">
          <img
            src="${signatureData.companyLogo}"
            width="250"
            height="116"
            alt=""
          />
        </a>
      </td>

      <td width="210" align="center">
        <a href="https://www.youtube.com/watch?v=nUzN7XuREsA" target="_blank">
          <img
            src="kum.jpg"
            width="110"
            height="86"
            alt=""
            style="border-radius:5pt;"
          />
        </a>
        <div style="font-size:8pt; color:#7F7F7F;">
          CW Enerji Plus Tanıtım
        </div>
      </td>

      <td width="210" align="center">
        <a href="https://www.youtube.com/watch?v=rDa8JF7KywE" target="_blank">
          <img
            src="reklam.jpg"
            width="110"
            height="86"
            alt=""
            style="border-radius:12px;"
          />
        </a>
        <div style="font-size:12px; color:#7F7F7F;">
          CW Enerji Plus Tanıtım
        </div>
      </td>
    </tr>
  </table>
  <table width="160" cellpadding="0" cellspacing="0">
    <tr>
    <td width="100">
    <span style="font-weight:600;font-size:13px;color:#7F7F7F;">Bizi Takip Edin:</span>
        </td>
      <td width="30">
       <a href="${signatureData.facebook}" target="_blank">
          <img
            src="facebook.jpg"
            width="25"
            height="25"
            alt=""
            style="border-radius:12px;"
          />
        </a>
        </td>
      <td width="30">
         <a href="${signatureData.instagram}" target="_blank">
          <img
            src="instagram.jpg"
            width="25"
            height="25"
            alt=""
            style="border-radius:12px;"
          />
        </a>
      </td>
      </tr>
      </table>
  <!-- Çizgi -->
      <br/>
  <div style="border-top:1px solid #D0CECE; margin:12px 0; width:720px;"></div>

  <!-- KDV Metni -->
  <div style="font-size:10px;font-weight:600;color:#7F7F7F;width:720px;height:auto;">
    "${signatureData.kdvInformation}"
  </div>

  <!-- Alt Link Logolar -->
  <table width="720" cellpadding="0" cellspacing="0" style="margin-top:10pt;">
    <tr>
      <td width="240">
        <a href="https://cw-enerji.com/" target="_blank">
          <img src="cw-enerji-logo.jpg" width="200" height="74" alt="" />
        </a>
      </td>
      <td width="240">
        <a href="https://cw-enerji.com/tr/cw-akademi" target="_blank">
          <img src="cw-akademi.png" width="200" height="74" alt="" />
        </a>
      </td>
      <td width="240">
        <a href="https://indir.cw-enerji.com/tr/index.html" target="_blank">
          <img src="indirme-merkezi.jpg" width="200" height="74" alt="" />
        </a>
      </td>
    </tr>
  </table>


  <!-- Detaylı Yasal Metin (DISCLAIMER) -->
  <table width="720" cellpadding="0" cellspacing="0" style="margin-top:10pt;">
       <tr style="color: #7F7F7F;font-size: 6pt;gap:10pt;">
      <td valign="top" style="padding-top:10pt;">
       ${signatureData.informationText}
        </td>
        </tr>
  </table>


  <!-- Çevre Mesajı -->
  <table width="720" cellpadding="0" cellspacing="0" style="margin-top:10pt;">
    <tr>
      <td width="70" valign="top">
        <img src="cevre.jpg" width="64" height="57" alt="" />
      </td>
      <td valign="top" style="padding-left:8pt;padding-top:10pt;">
        <div style="font-size:10px; color:#7F7F7F; font-style:italic;">
         ${signatureData.environmentText}
        </div>
      </td>
    </tr>
  </table>
</div>
  `;
