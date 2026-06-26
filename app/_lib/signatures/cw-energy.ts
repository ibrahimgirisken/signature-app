import { SignatureData } from "./types";

export const cwenergySigranuture = (signatureData: SignatureData) => `
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
    max-width: 800px;
  "
>

  <div style="font-style: italic;">
    Best Regards
  </div>

  <div style="font-size: 16px; font-weight: 700; color: #0B58B5; margin-top: 20px;">
    ${signatureData.fullName}
  </div>

  <div style="font-size: 14px; margin-bottom: 20px; color: #0B58B5;">
    ${signatureData.department}<br/>
  </div>
  <div style="margin-bottom: 5px;">
    <br/><br/>
  </div>

  <table width="800" cellpadding="0" cellspacing="0">
    <tr>
      <td width="520" valign="top">
        <table width="520" cellpadding="0" cellspacing="0">
          <tr>
            <td width="110" style="font-weight:700; color: #0B58B5;">e-mail</td>
            <td>
              :
              <a href="mailto:${signatureData.email}" style="color: #0B58B5; text-decoration: none;">
                ${signatureData.email}
              </a>
            </td>
          </tr>
          <tr>
            <td style="font-weight:700; color: #0B58B5;">Mobile</td>
            <td style="color: #0B58B5;">: ${signatureData.mobilePhone}</td>
          </tr>
          <tr>
            <td style="font-weight:700; color: #0B58B5;">Phone</td>
            <td style="color: #0B58B5;">: ${signatureData.phone}</td>
          </tr>
          <tr>
            <td style="font-weight:700; color: #0B58B5;">Fax</td>
            <td style="color: #0B58B5;">: ${signatureData.fax}</td>
          </tr>
          <tr>
            <td style="font-weight:700; color: #0B58B5;">Web</td>
            <td style="color: #0B58B5;">: 
              <a href="https://${signatureData.domain_name}" style="color: #0B58B5; text-decoration: none;" target="_blank">
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

      <td width="200" valign="top" align="right">
        <a href="${signatureData.googleUrlLink}" target="_blank">
          <img
            src="./we-value-your-feedback.png"
            width="200"
            height="104"
            alt=""
          />
        </a>
      </td>
    </tr>
  </table>

  <table width="800" cellpadding="0" cellspacing="0">
    <tr>
      <br/>
      <td width="510">
        <a href="https://\${signatureData.domain_name}" target="_blank">
          <img
            src="${signatureData.companyLogo ? `${process.env.NEXT_PUBLIC_API_IMAGE_URL}${signatureData.companyLogo}` : "cw-enerji-plus.jpg"}"
            width="510"
            height="116"
            alt=""
          />
        </a>
      </td>

      <td width="210" align="center">
        <a href="${signatureData.youtubeVideo}" target="_blank">
          <img
            src="./cw-enerji-youtube-gorseli.png"
            width="110"
            height="86"
            alt=""
            style="border-radius:12px;"
          />
        </a>
      </td>
    </tr>
  </table>

  <br/>
  <div style="border-top:1px solid #D0CECE; margin:12px 0; width:800px;"></div>

  <div style="font-size:10px; color:#7F7F7F; width:800px; height:auto;">
    "${signatureData.kdvInformation}"
  </div>

  <table width="800" cellpadding="0" cellspacing="0" style="margin-top:10px;">
    <tr>
      <td width="240">
        <a href="${signatureData.timotech}" target="_blank">
          <img src="timotech-logo.png" width="200" height="74" alt="" />
        </a>
      </td>
      <td width="240">
        <a href="${signatureData.academy}" target="_blank">
          <img src="cw-akademi.png" width="200" height="74" alt="" />
        </a>
      </td>
      <td width="240">
        <a href="${signatureData.downloadCenter}" target="_blank">
          <img src="./download-center.png" width="200" height="74" alt="" />
        </a>
      </td>
    </tr>
  </table>

  <table
    width="800"
    cellpadding="0"
    cellspacing="0"
    style="margin-top:10px; border-collapse:collapse; text-align:center;"
  >
    <tr>
      <td width="25%" style="width:145.8pt; border:none; border-bottom: solid #4472C4 1.5pt; background:#DEEAF6; padding:4px 0;">
        <a href="${signatureData.news}" target="_blank" style="display:block; text-decoration:none;">
          <img src="/news-icon.png" width="100" height="50" alt="" style="margin:0 auto; border-radius:12px;" />
        </a>
      </td>

      <td width="25%" style="width:145.8pt; border:none; border-bottom: solid #4472C4 1.5pt; background:#DEEAF6; padding:4px 0;">
        <a href="${signatureData.fair}" target="_blank" style="display:block; text-decoration:none;">
          <img src="/fairs-icon.png" width="100" height="50" alt="" style="margin:0 auto; border-radius:12px;" />
        </a>
      </td>

      <td width="25%" style="width:145.8pt; border:none; border-bottom: solid #4472C4 1.5pt; background:#DEEAF6; padding:4px 0;">
        <a href="${signatureData.academy}" target="_blank" style="display:block; text-decoration:none;">
          <img src="/online-education-icon.png" width="100" height="50" alt="" style="margin:0 auto; border-radius:12px;" />
        </a>
      </td>

      <td width="25%" style="width:145.8pt; border:none; border-bottom: solid #4472C4 1.5pt; background:#DEEAF6; padding:4px 0;">
        <a href="${signatureData.contact}" target="_blank" style="display:block; text-decoration:none;">
          <img src="/contact-form-icon.png" width="100" height="50" alt="" style="margin:0 auto; border-radius:12px;" />
        </a>
      </td>
    </tr>
  </table>

  <table width="800" border="0" cellpadding="0" cellspacing="0" style="padding-top: 15px; padding-bottom: 15px;">
    <tr>
      <td align="center" valign="middle">
        <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto;">
          <tr>
            <td valign="middle" style="padding: 0 5px;">
              <a href="${signatureData.facebook}" target="_blank" style="display: inline-block; text-decoration: none;">
                <img src="facebook.jpg" width="25" height="25" alt="Facebook" style="display: block; border: 0; border-radius: 12px;" />
              </a>
            </td>
            <td valign="middle" style="padding: 0 5px;">
              <a href="${signatureData.instagram}" target="_blank" style="display: inline-block; text-decoration: none;">
                <img src="instagram.jpg" width="25" height="25" alt="Instagram" style="display: block; border: 0; border-radius: 12px;" />
              </a>
            </td>
            <td valign="middle" style="padding: 0 5px;">
              <a href="${signatureData.twitter}" target="_blank" style="display: inline-block; text-decoration: none;">
                <img src="twitter.png" width="25" height="25" alt="Twitter" style="display: block; border: 0; border-radius: 12px;" />
              </a>
            </td>
            <td valign="middle" style="padding: 0 5px;">
              <a href="${signatureData.linkedin}" target="_blank" style="display: inline-block; text-decoration: none;">
                <img src="linkedin.png" width="25" height="25" alt="LinkedIn" style="display: block; border: 0; border-radius: 12px;" />
              </a>
            </td>
            <td valign="middle" style="padding: 0 5px;">
              <a href="${signatureData.youtube}" target="_blank" style="display: inline-block; text-decoration: none;">
                <img src="youtube.png" width="25" height="25" alt="YouTube" style="display: block; border: 0; border-radius: 12px;" />
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <table width="800" height="250" cellpadding="0" cellspacing="0" style="margin-top:10px;">
    <tr style="color: #7F7F7F; font-size: 10px; gap:10px;">
      <td valign="top" style="padding-top:10px;">
        <a href="${signatureData.fair}" target="_blank">
          <img src="${signatureData.fairImage ? `${process.env.NEXT_PUBLIC_API_IMAGE_URL}${signatureData.fairImage}` : ""}" width="800" height="360" alt="" />
        </a>
      </td>
    </tr>
  </table>

  <table width="800" cellpadding="0" cellspacing="0" style="margin-top:10px;">
    <tr style="color: #7F7F7F; font-size: 10px; gap:10px;">
      <td valign="top" style="padding-top:10px;">
        ${signatureData.informationText}
      </td>
    </tr>
  </table>

  <table width="800" cellpadding="0" cellspacing="0" style="margin-top:10px;">
    <tr>
      <td width="70" valign="top">
        <img src="cevre.jpg" width="64" height="57" alt="" />
      </td>
      <td valign="top" style="padding-left:8px; padding-top:10px;">
        <div style="font-size:10px; color:#7F7F7F; font-style:italic;">
          ${signatureData.environmentText}
        </div>
      </td>
    </tr>
  </table>
</div>
`;