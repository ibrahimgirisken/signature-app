import { SignatureData } from './types';
export const cwsolarcellSignature=(signatureData:SignatureData)=>{
  const imageBase = process.env.NEXT_PUBLIC_HOST_IMAGE_URL || "";
  const apiImageBase = process.env.NEXT_PUBLIC_API_IMAGE_URL || "";
return `<!-- =========================
     CW SOLARCELL MAIL SIGNATURE
     HTML – MAIL SAFE TEMPLATE
     ========================= -->


  <table cellpadding="0" cellspacing="0" border="0" width="720" style="border-collapse:collapse; font-family: Arial, Helvetica, sans-serif; font-size:12px; line-height:1.3; color:#0B58B5; width:720px; max-width:720px;">
    <tr>
      <td style="padding:0; margin:0;">

        <!-- Selamlama -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td style="font-style:italic; color:#0B58B5; padding:0 0 10px 0;">
             Saygılarımla / Best Regards / Mit freundlichen Grüßen
            </td>
          </tr>
          <tr>
            <td style="font-size:16px; font-weight:700; color:#0B58B5; padding:0 0 4px 0;">
              ${signatureData.fullName}
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; color:#0B58B5; padding:0 0 20px 0;">
              ${signatureData.department}
            </td>
          </tr>
        </table>




  <!-- İletişim + Sağ Banner -->
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
    <tr valign="middle">
      <td width="520" valign="top">
        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr valign="middle">
            <td width="70" style="font-weight:700; color:#0B58B5; padding:0 0 5pt 0;">e-mail</td>
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
            <td style="font-weight:700; color: #0B58B5;">Web</td>
            <td style="color: #0B58B5;">
              :
              <a href="${signatureData.domain_name}" style="text-decoration: underline; color: #0B58B5;" target="_blank">
                ${signatureData.domain_name}
              </a>
            </td>
          </tr>

          <tr>
            <td style="font-weight:700; vertical-align:top; color: #0B58B5;">Address</td>
            <td style="line-height:1.35; color: #0B58B5;">
              : ${signatureData.address}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Video / Reklam Alanı -->
  <table width="720" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-top: 10pt;">
    <tr valign="middle">
      <td width="300" valign="top">
        <a href="${signatureData.domain_name}" target="_blank" style="text-decoration:none;">
          <img
            src="${process.env.NEXT_PUBLIC_API_IMAGE_URL}${signatureData.companyLogo}"
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
            src="cw-solarcell-youtube.png"
            width="110"
            height="86"
            alt=""
            style="display:block; border:0; outline:none; border-radius:12px;"
          />
        </a>
      </td>
    </tr>
  </table>

        <!-- Sosyal medya -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; background-color:#DEEAF6;">
          <tr valign="middle">
            <td style="padding:10px;">
              <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                <tr valign="top">
                  <td style="padding-left:20pt;padding-right:20pt;">
                    <a href="${signatureData.facebook}" target="_blank">
                      <img src="${imageBase}facebook.jpg" width="25" height="25" alt="Facebook" style="display:block; border:0;" />
                    </a>
                  </td>
                  <td style="padding-right:20pt;">
                    <a href="${signatureData.instagram}" target="_blank">
                      <img src="${imageBase}instagram.jpg" width="25" height="25" alt="Instagram" style="display:block; border:0;" />
                    </a>
                  </td>
                  <td style="padding-right:20pt;">
                    <a href="${signatureData.youtubeVideo}" target="_blank">
                      <img src="${imageBase}youtube.png" width="25" height="25" alt="LinkedIn" style="display:block; border:0;" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>

            <td align="right" style="padding-right:20px; text-align:right;">
              <a href="${signatureData.contact}" target="_blank" style="color:#679FD5; text-decoration:none; font-weight:bold;">
                Contact Form
              </a>
            </td>
          </tr>
        </table>

  <!-- Detaylı Yasal Metin (DISCLAIMER) -->
 <div style="margin-top:12px; font-size:10px; line-height:1.35; color:#7F7F7F; white-space:pre-line;">
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
          ${signatureData.environmentText}
        </div>
      </td>
    </tr>
  </table>
`;}