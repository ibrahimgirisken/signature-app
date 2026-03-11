import { SignatureData } from "./types";

export const tommatechSignature = (signatureData: SignatureData) => {
  const imageBase = process.env.NEXT_PUBLIC_HOST_IMAGE_URL || "";
  const apiImageBase = process.env.NEXT_PUBLIC_API_IMAGE_URL || "";

  return `
  <!-- =========================
       TOMMATECH MAIL SIGNATURE
       HTML - OUTLOOK SAFE
       ========================= -->

  <table
    width="720"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="border-collapse:collapse; width:720px; max-width:720px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.35; color:#0B58B5;"
  >
    <tr>
      <td style="padding:0;">

        <!-- Selamlama -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
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
            <td style="font-size:14px; color:#0B58B5; padding:0 0 16px 0;">
              ${signatureData.department}
            </td>
          </tr>
        </table>

        <!-- İletişim + sağ üst görsel -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr>
            <td width="520" valign="top" style="width:520px; vertical-align:top; padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                <tr>
                  <td width="110" valign="top" style="width:110px; font-weight:700; color:#0B58B5; padding:0 0 6px 0;">E-mail</td>
                  <td valign="top" style="color:#0B58B5; padding:0 0 6px 0;">
                    :
                    <a href="mailto:${signatureData.email}" style="text-decoration:underline; color:#0B58B5;">
                      ${signatureData.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="font-weight:700; color:#0B58B5; padding:0 0 6px 0;">Phone</td>
                  <td valign="top" style="color:#0B58B5; padding:0 0 6px 0;">: ${signatureData.mobilePhone}</td>
                </tr>
                <tr>
                  <td valign="top" style="font-weight:700; color:#0B58B5; padding:0 0 6px 0;">(TR) Address</td>
                  <td valign="top" style="color:#0B58B5; padding:0 0 6px 0;">: ${signatureData.address}</td>
                </tr>
                <tr>
                  <td valign="top" style="font-weight:700; color:#0B58B5; padding:0;">(DE) Address</td>
                  <td valign="top" style="color:#0B58B5; padding:0;">: ${signatureData.address2}</td>
                </tr>
              </table>
            </td>

            <td width="200" valign="top" align="right" style="width:200px; vertical-align:top; text-align:right; padding:0;">
              <a href="${signatureData.googleUrlLink}" target="_blank" style="text-decoration:none;">
                <img
                  src="${imageBase}feedback-logo.jpg"
                  width="170"
                  height="50"
                  alt="Feedback"
                  style="display:block; border:0; outline:none; text-decoration:none;"
                />
              </a>
            </td>
          </tr>
        </table>

        <!-- Logo + video alanı -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="border-collapse:collapse; margin-top:18px; margin-bottom:30px;"
        >
          <tr>
            <td width="300" valign="middle" style="width:300px; vertical-align:middle; padding:0;">
              <a href="${signatureData.domain_name}" target="_blank" style="text-decoration:none;">
                <img
                  src="${apiImageBase}${signatureData.companyLogo}"
                  width="250"
                  height="116"
                  alt="Company Logo"
                  style="display:block; border:0; outline:none; text-decoration:none;"
                />
              </a>
            </td>

            <td width="210" valign="top" align="center" style="width:210px; vertical-align:top; text-align:center; padding:0;">
              <a href="${signatureData.youtubeVideo}" target="_blank" style="text-decoration:none;">
                <img
                  src="${imageBase}tt-fabric-video.jpg"
                  width="125"
                  height="100"
                  alt="Tommatech Tanıtım"
                  style="display:block; border:0; outline:none; text-decoration:none;"
                />
              </a>
            </td>

            <td width="210" valign="top" align="center" style="width:210px; vertical-align:top; text-align:center; padding:0;">
              <a href="${signatureData.youtubeVideo2}" target="_blank" style="text-decoration:none;">
                <img
                  src="${imageBase}tt-product-video.jpg"
                  width="125"
                  height="100"
                  alt="Tommatech Reklam"
                  style="display:block; border:0; outline:none; text-decoration:none;"
                />
              </a>
            </td>
          </tr>
        </table>

        <!-- Sosyal medya + contact form -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="border-collapse:collapse; margin-top:10px;"
        >
          <tr>
            <td
              width="360"
              valign="middle"
              style="width:360px; background:#DEEAF6; border-bottom:1px solid #4472C4; padding:8px 12px;"
            >
              <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="${signatureData.facebook}" target="_blank" style="text-decoration:none;">
                      <img src="${imageBase}facebook.jpg" width="25" height="25" alt="Facebook" style="display:block; border:0; outline:none;" />
                    </a>
                  </td>
                  <td style="padding-right:10px;">
                    <a href="${signatureData.instagram}" target="_blank" style="text-decoration:none;">
                      <img src="${imageBase}instagram.jpg" width="25" height="25" alt="Instagram" style="display:block; border:0; outline:none;" />
                    </a>
                  </td>
                  <td style="padding-right:10px;">
                    <a href="${signatureData.twitter}" target="_blank" style="text-decoration:none;">
                      <img src="${imageBase}twitter.png" width="25" height="25" alt="Twitter" style="display:block; border:0; outline:none;" />
                    </a>
                  </td>
                  <td style="padding-right:10px;">
                    <a href="${signatureData.linkedin}" target="_blank" style="text-decoration:none;">
                      <img src="${imageBase}linkedin.png" width="25" height="25" alt="LinkedIn" style="display:block; border:0; outline:none;" />
                    </a>
                  </td>
                  <td>
                    <a href="${signatureData.youtube}" target="_blank" style="text-decoration:none;">
                      <img src="${imageBase}youtube.png" width="25" height="25" alt="YouTube" style="display:block; border:0; outline:none;" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>

            <td
              width="360"
              align="center"
              valign="middle"
              style="width:360px; background:#DEEAF6; border-bottom:1px solid #4472C4; padding:8px 12px; text-align:center;"
            >
              <a
                href="${signatureData.contact}"
                target="_blank"
                style="font-size:14px; color:#679FD5; text-decoration:none; font-weight:bold;"
              >
                Contact Form
              </a>
            </td>
          </tr>
        </table>

        <!-- Disclaimer -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; margin-top:12px;">
          <tr>
            <td style="font-size:8px; line-height:1.35; color:#BDD6EE;">
              ${signatureData.informationText}
            </td>
          </tr>
        </table>

        <!-- Çevre mesajı -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; margin-top:10px;">
          <tr>
            <td width="70" valign="top" style="width:70px; vertical-align:top;">
              <img
                src="${imageBase}cevre.jpg"
                width="64"
                height="57"
                alt="Environment"
                style="display:block; border:0; outline:none;"
              />
            </td>
            <td valign="top" style="padding-left:8px; padding-top:10px; vertical-align:top;">
              <div style="font-size:10px; color:#7F7F7F; font-style:italic;">
                ${signatureData.environmentText}
              </div>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
  `;
};