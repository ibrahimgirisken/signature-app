import { SignatureData } from './types';
export const cwsolarcellSignature=(signatureData:SignatureData)=>`
<!-- =========================
     CW SOLARCELL MAIL SIGNATURE
     HTML – MAIL SAFE TEMPLATE
     ========================= -->

<div style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.3; color: #0070C0; max-width: 720px;">

  <!-- Selamlama -->
  <div style="font-style: italic; margin-bottom: 10px;">
    Saygılarımla / Best Regards / Mit freundlichen Grüßen
  </div>

  <!-- İsim -->
  <div style="font-size: 16px; font-weight: 700; color: #0B58B5;">
    ${signatureData.fullName}
  </div>

  <!-- Ünvan / Departman -->
  <div style="font-size: 14px; margin-bottom: 20px; color: #0B58B5;">
    ${signatureData.department}<br/>
  </div>

  <div style="margin-bottom: 20px;">
    <br/><br/>
  </div>

  <!-- İletişim + Sağ Banner -->
  <table width="720" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
    <tr>
      <td width="520" valign="top">
        <table width="520" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td width="110" style="font-weight:700; color: #0B58B5;">E-posta</td>
            <td style="color:#0B58B5;">
              :
              <a href="mailto:${signatureData.email}" style="text-decoration: underline; color: #0B58B5;">
                ${signatureData.email}
              </a>
            </td>
          </tr>

          <tr>
            <td style="font-weight:700; color: #0B58B5;">Cep Telefonu</td>
            <td style="color: #0B58B5;">: ${signatureData.mobilePhone}</td>
          </tr>

          <tr>
            <td style="font-weight:700; color: #0B58B5;">Telefon</td>
            <td style="color: #0B58B5;">: ${signatureData.phone}</td>
          </tr>

          <tr>
            <td style="font-weight:700; color: #0B58B5;">Web</td>
            <td style="color: #0B58B5;">
              :
              <a href="${signatureData.domain_name}" style="text-decoration: underline; color: #0B58B5;" target="_blank">
                ${signatureData.domain_name}
              </a>
            </td>
          </tr>

          <tr>
            <td style="font-weight:700; vertical-align:top; color: #0B58B5;">Adres</td>
            <td style="line-height:1.35; color: #0B58B5;">
              : ${signatureData.address}
            </td>
          </tr>
        </table>
      </td>

      <td width="200" valign="top" align="right">
        <a href="${signatureData.googleUrlLink}" target="_blank" style="text-decoration:none;">
          <img
            src="gorusleriniz-degerli.png"
            width="200"
            height="104"
            alt=""
            style="display:block; border:0; outline:none;"
          />
        </a>
      </td>
    </tr>
  </table>

  <!-- Video / Reklam Alanı -->
  <table width="720" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-top: 10px;">
    <tr>
      <td width="300" valign="top">
        <a href="${signatureData.domain_name}" target="_blank" style="text-decoration:none;">
          <img
            src="${signatureData.companyLogo}"
            width="250"
            height="116"
            alt=""
            style="display:block; border:0; outline:none;"
          />
        </a>
      </td>

      <td width="210" valign="top" align="center">
        <a href="https://www.youtube.com/watch?v=nUzN7XuREsA" target="_blank" style="text-decoration:none;">
          <img
            src="kum.jpg"
            width="110"
            height="86"
            alt=""
            style="display:block; border:0; outline:none; border-radius:12px;"
          />
        </a>
        <div style="font-size:12px; color:#7F7F7F; margin-top:6px;">
          CW Solarcell Tanıtım
        </div>
      </td>

      <td width="210" valign="top" align="center">
        <a href="https://www.youtube.com/watch?v=rDa8JF7KywE" target="_blank" style="text-decoration:none;">
          <img
            src="reklam.jpg"
            width="110"
            height="86"
            alt=""
            style="display:block; border:0; outline:none; border-radius:12px;"
          />
        </a>
        <div style="font-size:12px; color:#7F7F7F; margin-top:6px;">
          CW Enerji Plus Tanıtım
        </div>
      </td>
    </tr>
  </table>

  <!-- Follow -->
  <table width="160" cellpadding="0" cellspacing="0">
    <tr>
    <td width="100">
        <span style="font-weight:600; font-size:13px; color:#7F7F7F;">Bizi Takip Edin:</span>
      </td>
       <td width="30">
        <a href="${signatureData.facebook}" target="_blank" style="text-decoration:none;">
          <img src="facebook.jpg" width="25" height="25" alt="" style="border-radius:12px;" />
        </a>
      </td>
      <td width="30">
        <a href="${signatureData.instagram}" target="_blank" style="text-decoration:none;">
          <img src="instagram.jpg" width="25" height="25" alt="" style="border-radius:12px;"/>
        </a>
      </td>
    </tr>
  </table>

  <div style="border-top:1px solid #D0CECE; margin:12px 0;"></div>

  <!-- KDV Metni -->
  <div style="font-size:10px; font-weight:700; color:#7F7F7F;">
    "${signatureData.kdvInformation}"
  </div>

  <!-- Alt Link Logolar -->
  <table width="720" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-top:10px;">
    <tr>
      <td width="240" valign="top">
        <a href="https://cw-enerji.com/" target="_blank" style="text-decoration:none;">
          <img src="cw-enerji-logo.jpg" width="200" height="74" alt="" style="display:block; border:0; outline:none;" />
        </a>
      </td>
      <td width="240" valign="top">
        <a href="https://cw-enerji.com/tr/cw-akademi" target="_blank" style="text-decoration:none;">
          <img src="cw-akademi.png" width="200" height="74" alt="" style="display:block; border:0; outline:none;" />
        </a>
      </td>
      <td width="240" valign="top">
        <a href="https://indir.cw-enerji.com/tr/index.html" target="_blank" style="text-decoration:none;">
          <img src="indirme-merkezi.jpg" width="200" height="74" alt="" style="display:block; border:0; outline:none;" />
        </a>
      </td>
    </tr>
  </table>

  <!-- Detaylı Yasal Metin (DISCLAIMER) -->
  <div style="margin-top:12px; font-size:10px; line-height:1.35; color:#7F7F7F;">
    ${signatureData.informationText}
  </div>

  <!-- Çevre Mesajı -->
  <table width="720" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-top:10px;">
    <tr>
      <td width="70" valign="top">
        <img src="cevre.jpg" width="64" height="57" alt="" style="display:block; border:0; outline:none;" />
      </td>
      <td valign="top" style="padding-left:8px; padding-top:10px;">
        <div style="font-size:10px; color:#7F7F7F; font-style:italic;">
          Lütfen ağaçları ve doğayı koruyun. Lütfen bu e-postayı yazdırmadan önce düşünün.
        </div>
        <div style="font-size:10px; color:#7F7F7F; font-style:italic;">
          Please protect the trees and the nature. Please think before printing this e-mail.
        </div>
      </td>
    </tr>
  </table>

</div>
`;