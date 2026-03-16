import { SignatureData } from "./types";

export const tommatechVerandaSignature = (signatureData: SignatureData) => {
  const imageBase = process.env.NEXT_PUBLIC_HOST_IMAGE_URL || "";
  const apiImageBase = process.env.NEXT_PUBLIC_API_IMAGE_URL || "";

  return `
  <!-- TOMMATECH VERANDA MAIL SIGNATURE -->
  <table cellpadding="0" cellspacing="0" border="0" width="720" style="border-collapse:collapse; font-family: Arial, Helvetica, sans-serif; font-size:12px; line-height:1.3; color:#0B58B5; width:720px; max-width:720px;">
    <tr>
      <td style="padding:0; margin:0;">

        <!-- Selamlama -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td style="font-style:italic; color:#0B58B5; padding:0 0 10px 0;">
              Mit freundlichen Grüßen
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

        <!-- İletişim + feedback görsel -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr valign="top">
            <td width="520" valign="top">
              <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                <tr valign="top">
                  <td width="220" style="font-weight:700; color:#0B58B5; padding:0 0 5pt 0;">Tommatech GmbH</td>
                  <td style="color:#0B58B5; padding:0 0 5pt 0;">: ${signatureData.address}</td>
                </tr>
                <tr valign="top">
                  <td style="font-weight:700; color:#0B58B5; padding:0 0 5px 0;">Tel</td>
                  <td style="color:#0B58B5; padding:0 0 5px 0;">: ${signatureData.mobilePhone}</td>
                </tr>
                <tr valign="top">
                  <td style="font-weight:700; color:#0B58B5; padding:0 0 5px 0;">E-mail</td>
                  <td style="color:#0B58B5; padding:0 0 5px 0;">: 
                    <a href="mailto:${signatureData.email}" style="color:#0B58B5; text-decoration:underline;">
                      ${signatureData.email}
                    </a>
                  </td>
                </tr>
                <tr valign="top">
                  <td style="font-weight:700; color:#0B58B5; padding:0 0 5px 0;">Web</td>
                  <td style="color:#0B58B5; padding:0 0 5px 0;">: 
                    <a href="https://${signatureData.domain_name}" target="_blank" style="color:#0B58B5; text-decoration:underline;">
                      ${signatureData.domain_name}
                    </a>
                  </td>
                </tr>
                                <tr valign="top">
                  <td style="font-weight:700; color:#0B58B5; padding:0 0 5px 0;">Registergericht</td>
                  <td style="color:#0B58B5; padding:0 0 5px 0;">: 
                    <a href="https://${signatureData.domain_name}" target="_blank" style="color:#0B58B5; text-decoration:underline;">
                      ${signatureData.fax}
                    </a>
                  </td>
                </tr>
                                <tr valign="top">
                  <td style="font-weight:700; color:#0B58B5; padding:0 0 5px 0;">Umsatzsteuer-Identifikationsnummer</td>
                  <td style="color:#0B58B5; padding:0 0 5px 0;">: 
                    <a href="https://${signatureData.domain_name}" target="_blank" style="color:#0B58B5; text-decoration:underline;">
                      ${signatureData.other}
                    </a>
                  </td>
                </tr>
              </table>
            </td>

            <td width="200" valign="top" align="right" style="width:200px;height:150px; vertical-align:top; text-align:right;">
              <a href="${signatureData.googleUrlLink}" target="_blank">
                <img 
                  src="${imageBase}feedback-logo.jpg" 
                  width="170" 
                  height="100" 
                  alt="Feedback" 
                  style="display:block; border:0; outline:none; text-decoration:none;"
                />
              </a>
            </td>
          </tr>
        </table>

        <!-- Logo + videolar -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; margin-top:20px; margin-bottom:20px;">
          <tr valign="top">
            <td width="300" valign="middle" style="width:450px; vertical-align:middle;">
              <a href="https://${signatureData.domain_name}" target="_blank">
                <img 
                  src="${apiImageBase}${signatureData.companyLogo}" 
                  width="250" 
                  height="116" 
                  alt="Logo" 
                  style="display:block; border:0; outline:none; text-decoration:none;"
                />
              </a>
            </td>

           <td width="210" align="center" valign="top" style="width:210px; text-align:center; vertical-align:top;">
                <img 
                  src="${imageBase}veranda-qr.png" 
                  width="75" 
                  height="100" 
                  alt="QR" 
                  style="display:block; border:0; outline:none; text-decoration:none;"
                />
            </td>

            <td width="210" align="center" valign="top" style="width:210px; text-align:center; vertical-align:top;">
              <a href="${signatureData.youtubeVideo}" target="_blank">
                <img 
                  src="${imageBase}tt-fabric-video.jpg" 
                  width="125" 
                  height="100" 
                  alt="Video 1" 
                  style="display:block; border:0; outline:none; text-decoration:none;"
                />
              </a>
            </td>

            <td width="210" align="center" valign="top" style="width:210px; text-align:center; vertical-align:top;">
              <a href="${signatureData.youtubeVideo2}" target="_blank">
                <img 
                  src="${imageBase}tt-product-video.jpg" 
                  width="125" 
                  height="100" 
                  alt="Video 2" 
                  style="display:block; border:0; outline:none; text-decoration:none;"
                />
              </a>
            </td>
          </tr>
        </table>

        <!-- Sosyal medya -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; background-color:#DEEAF6;">
          <tr>
            <td style="padding:10px;">
              <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                <tr>
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
                    <a href="${signatureData.twitter}" target="_blank">
                      <img src="${imageBase}twitter.png" width="25" height="25" alt="Instagram" style="display:block; border:0;" />
                    </a>
                  </td>
                  <td style="padding-right:20pt;">
                    <a href="${signatureData.linkedin}" target="_blank">
                      <img src="${imageBase}linkedin.jpg" width="25" height="25" alt="LinkedIn" style="display:block; border:0;" />
                    </a>
                  </td>
                                    <td style="padding-right:20pt;">
                    <a href="${signatureData.youtube}" target="_blank">
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

        <!-- Bilgilendirme metni -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; margin-top:10px;">
          <tr>
            <td style="font-size:10px; color:#7F7F7F; font-style:italic; padding-left:10px;">
              ${signatureData.informationText}
            </td>
          </tr>
        </table>

        <!-- Çevre metni -->
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; margin-top:10px;">
          <tr>
            <td width="70" style="width:70px;">
              <img 
                src="${imageBase}cevre.jpg" 
                width="64" 
                height="57" 
                alt="Environment" 
                style="display:block; border:0; outline:none; text-decoration:none;" 
              />
            </td>
            <td style="font-size:10px; color:#7F7F7F; font-style:italic; padding-left:10px;">
              ${signatureData.environmentText}
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
  `;
};