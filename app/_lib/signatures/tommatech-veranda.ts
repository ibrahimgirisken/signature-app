import { SignatureData } from "./types";
export const tommatechVerandaSignature = (signatureData: SignatureData) => {
  // Görsel ana dizini (Bu değişkenin tanımlı olduğundan emin olun)
  const baseUrl = process.env.NEXT_PUBLIC_API_IMAGE_URL || "https://siteniz.com/images/";

  return `
<div style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.3; color: #0B58B5; max-width: 720px;">

  <div style="font-style: italic; margin-bottom: 10px;">
    <strong>Mit freundlichen Grüßen</strong>
  </div>

  <div style="font-size: 16px; font-weight: 700; color: #0B58B5;">
    ${signatureData.fullName}
  </div>

  <div style="font-size: 14px; margin-bottom: 20px; color: #0B58B5;">
    ${signatureData.department}
  </div>

  <table width="720" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td width="520" valign="top">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="230" style="font-weight:700; color: #0B58B5; padding-bottom:5px;">Tommatech GmbH</td>
            <td style="color: #0B58B5; padding-bottom:5px;">: ${signatureData.address}</td>
          </tr>
          <tr>
            <td style="font-weight:700; color: #0B58B5; padding-bottom:5px;">Tel</td>
            <td style="color: #0B58B5; padding-bottom:5px;">: ${signatureData.mobilePhone}</td>
          </tr>
          <tr>
            <td style="font-weight:700; color: #0B58B5; padding-bottom:5px;">E-mail</td>
            <td style="color:#0B58B5; padding-bottom:5px;">: <a href="mailto:${signatureData.email}" style="color: #0B58B5; text-decoration: underline;">${signatureData.email}</a></td>
          </tr>
          <tr>
            <td style="font-weight:700; color: #0B58B5; padding-bottom:5px;">Web</td>
            <td style="color:#0B58B5; padding-bottom:5px;">: <a href="https://${signatureData.domain_name}" target="_blank" style="color: #0B58B5; text-decoration: underline;">${signatureData.domain_name}</a></td>
          </tr>
        </table>
      </td>
      <td width="200" valign="top" align="right">
        <a href="${signatureData.googleUrlLink}" target="_blank">
          <img src="${baseUrl}feedback-logo.png" width="170" height="50" alt="Feedback" style="display:block; border:0;" />
        </a>
      </td>
    </tr>
  </table>

  <table width="720" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px; margin-bottom: 20px;">
    <tr>
      <td width="300" valign="middle">
        <a href="https://${signatureData.domain_name}" target="_blank">
          <img src="${baseUrl}${signatureData.companyLogo}" width="250" height="116" style="display:block; border:0;" alt="Logo" />
        </a>
      </td>
      <td width="210" align="center" valign="top">
        <a href="${signatureData.youtubeVideo}" target="_blank">
          <img src="${baseUrl}tt-fabric-video.png" width="125" height="100" style="display:block; border:0; border-radius:12px;" alt="Video 1" />
        </a>
        <div style="font-size:10px; color:#7F7F7F; margin-top:5px;">CW Solarcell Tanıtım</div>
      </td>
      <td width="210" align="center" valign="top">
        <a href="${signatureData.youtubeVideo2}" target="_blank">
          <img src="${baseUrl}tt-product-video.png" width="125" height="100" style="display:block; border:0; border-radius:12px;" alt="Video 2" />
        </a>
        <div style="font-size:10px; color:#7F7F7F; margin-top:5px;">CW Enerji Plus Tanıtım</div>
      </td>
    </tr>
  </table>

  <table width="720" cellpadding="0" cellspacing="0" border="0" style="background-color:#DEEAF6;">
    <tr>
      <td style="padding: 10px;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right:10px;"><a href="${signatureData.facebook}"><img src="${baseUrl}facebook.jpg" width="25" height="25" style="border:0;" /></a></td>
            <td style="padding-right:10px;"><a href="${signatureData.instagram}"><img src="${baseUrl}instagram.jpg" width="25" height="25" style="border:0;" /></a></td>
            <td style="padding-right:10px;"><a href="${signatureData.linkedin}"><img src="${baseUrl}linkedin.jpg" width="25" height="25" style="border:0;" /></a></td>
          </tr>
        </table>
      </td>
      <td align="right" style="padding-right:20px;">
        <a href="${signatureData.contact}" target="_blank" style="color:#679fd5; text-decoration:none; font-weight:bold;">Contact Form</a>
      </td>
    </tr>
  </table>

  <div style="margin-top:12px; font-size:8px; color:#BDD6EE;">
    ${signatureData.informationText}
  </div>

  <table width="720" cellpadding="0" cellspacing="0" border="0" style="margin-top:10px;">
    <tr>
      <td width="70"><img src="${baseUrl}cevre.jpg" width="64" height="57" style="display:block; border:0;" /></td>
      <td style="font-size:10px; color:#7F7F7F; font-style:italic; padding-left:10px;">
        ${signatureData.environmentText}
      </td>
    </tr>
  </table>
</div>
`;
};