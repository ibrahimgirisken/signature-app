import { SignatureData } from "./types";
export const tommatechSignature = (signatureData: SignatureData) => `
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
    <br/>
  </div>

  <!-- İletişim + Sağ Banner -->
  <table width="720" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
    <tr>
      <td width="520" valign="top">
        <table width="520" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td width="110" style="font-weight:700; color: #0B58B5;">e-mail</td>
            <td style="color:#0B58B5;">
              :
              <a href="mailto:${signatureData.email}" style="text-decoration: underline; color: #0B58B5;">
                ${signatureData.email}
              </a>
            </td>
          </tr>

          <tr>
            <td style="font-weight:700; color: #0B58B5;">Phone</td>
            <td style="color: #0B58B5;">: ${signatureData.mobilePhone}</td>
          </tr>
          <tr>
            <td style="font-weight:700; vertical-align:top; color: #0B58B5;">(TR) Address</td>
            <td style="line-height:1.35; color: #0B58B5;">
              : ${signatureData.address}
            </td>
          </tr>
          <tr>
            <td style="font-weight:700; vertical-align:top; color: #0B58B5;">(DE) Address</td>
            <td style="line-height:1.35; color: #0B58B5;">
              : ${signatureData.address2}
            </td>
          </tr>
        </table>
      </td>

      <td width="200" height="150" valign="top" align="right">
        <a href="${signatureData.googleUrlLink}" target="_blank" style="text-decoration:none;">
          <img
            src="feedback-logo.webp"
            width="170"
            height="50"
            alt=""
            style="display:block; border:0; outline:none;"
          />
        </a>
      </td>
    </tr>
  </table>

  <!-- Video / Reklam Alanı -->
  <table width="720" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-top: 10px;margin-bottom:40px;">
    <tr style="display:flex;justify-content:center;align-items:center;gap:20px;">
      <td width="300" valign="top">
        <a href="${signatureData.domain_name}" target="_blank" style="text-decoration:none;">
          <img
            src="tommatech-logo.webp"
            width="250"
            height="116"
            alt=""
            style="display:block; border:0; outline:none;"
          />
        </a>
      </td>

      <td width="210" valign="top" align="center">
        <a href="${signatureData.youtubeVideo}" target="_blank" style="text-decoration:none;">
          <img
            src="tt-fabric-video.webp"
            width="125"
            height="100"
            alt=""
            style="display:block; border:0; outline:none; border-radius:12px;"
          />
        </a>
        <div style="font-size:12px; color:#7F7F7F; margin-top:6px;">
          CW Solarcell Tanıtım
        </div>
      </td>

      <td width="210" valign="top" align="center">
        <a href="${signatureData.youtubeVideo2}" target="_blank" style="text-decoration:none;">
          <img
            src="tt-product-video.webp"
            width="125"
            height="100"
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

  <table
  width="720"
  cellpadding="0"
  cellspacing="0"
  style="margin-top:10px border-collapse:collapse; text-align:center;">
       <tr align="center" valign="middle" style="color: #7F7F7F;font-size: 10px;display: flex;justify-content: center;">
    <td width="50%" style="display: flex;justify-content: center;align-items: center;
    width:291.6pt;
    border:none;
    border-bottom:
    solid #4472C4 1.5pt;
    background:#DEEAF6;
    padding:0in 5.4pt 0in 5.4pt;
    gap: 15px;
    ">
     <tr>
       <td style="padding-right:10px;">
    <a href="${signatureData.facebook}" target="_blank" style="text-decoration:none;">
         <img src="facebook.jpg" width="25" height="25" alt="" style="display:block; border:0; outline:none; border-radius:12px;" />
   </a>
       <td style="padding-right:10px;">
   <a href="${signatureData.instagram}" target="_blank" style="text-decoration:none;">
          <img src="instagram.jpg" width="25" height="25" alt="" style="display:block; border:0; outline:none; border-radius:12px;" />
     </a>
       <td style="padding-right:10px;">
       <a href="${signatureData.twitter}" target="_blank" style="text-decoration:none;">
          <img src="twitter.webp" width="25" height="25" alt="" style="display:block; border:0; outline:none; border-radius:12px;" />
     </a>
        <td style="padding-right:10px;">
     <a href="${signatureData.linkedin}" target="_blank" style="text-decoration:none;">
          <img src="linkedin.webp" width="25" height="25" alt="" style="display:block; border:0; outline:none; border-radius:12px;" />
    </a>
         <td style="padding-right:10px;">
         <a href="${signatureData.youtube}" target="_blank" style="text-decoration:none;">
          <img src="youtube.webp" width="25" height="25" alt="" style="display:block; border:0; outline:none; border-radius:12px;" />
    </a>
         </td>
      </tr>
    </td>
    <td width="50%" style="
    width:291.6pt;
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
        <b>Contact Form</b>
      </a>
    </td>
  </tr>
</table>


  <!-- Detaylı Yasal Metin (DISCLAIMER) -->
  <div style="margin-top:12px; font-size:8px; line-height:1.35; color:#BDD6EE;">
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
            '${signatureData.environmentText}'
        </div>
      </td>
    </tr>
  </table>

</div>
`;
