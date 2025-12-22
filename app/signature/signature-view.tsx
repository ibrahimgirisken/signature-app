'use client';
import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap'

function SignatureView({datas,targetRef}:{datas:{fullName:string, department:string, email:string, phone:string,mobilePhone:string, address:string, logo:string, domain_name:string, googleUrlLink:string},targetRef:any}) {
  const signatureDatas={
    fullName: '',
    department: '',
    email: '',
    phone: '',
    mobilePhone:'',
    address:'',
    logo:'',
    domain_name:'',
    googleUrlLink:'',
  }
  const [signatureData, setSignatureData] = useState(signatureDatas);
  React.useEffect(() => {
    setSignatureData(datas);
  }, [datas]);
  
  const signatureHtml=`
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
  <div style="margin-bottom: 20px;color: #0B58B5;">
    ${signatureData.department}<br/>
  </div>
    <div style="margin-bottom: 20px;">
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
      <td width="300">
        <a href="https://${signatureData.domain_name}.cw-enerji.com" target="_blank">
          <img
            src="${signatureData.logo ? signatureData.logo :"cw-enerji-plus.jpg"}"
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
            style="border-radius:12px;"
          />
        </a>
        <div style="font-size:12px; color:#7F7F7F;">
          Solar Hücre Tanıtım
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
          CWPlus Reklam
        </div>
      </td>
    </tr>
    <tr><br/><br/></tr>
  </table>

  <!-- Çizgi -->
  <div style="border-top:1px solid #D0CECE; margin:12px 0;"></div>

  <!-- KDV Metni -->
  <div style="font-size:10px; font-weight:700;">
    "KDV KANUNUN 117 SAYILI TEBLİĞ’İN 3.1.2/B MADDESİNE GÖRE
    BORSA İSTANBUL’DA İŞLEM GÖREN ŞİRKETİMİZE DÜZENLENECEK
    FATURALARDA KDV <br/> TEVKİFATINA ÖZEN GÖSTERİLMESİ RİCA OLUNUR."
  </div>

  <!-- Alt Link Logolar -->
  <table width="720" cellpadding="0" cellspacing="0" style="margin-top:10px;">
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
  <div
    style="
      margin-top:12px;
      font-size:10px;
      line-height:1.35;
      color:#7F7F7F;
    "
  >
    Bu elektronik posta ve ekleri gizlidir ve yalnızca gönderildiği gerçek veya tüzel kişi
    tarafından kullanılması amacıyla gönderilmiştir. Eğer bu elektronik postayı
    yanlışlıkla aldıysanız,<br/> lütfen göndereni derhal bilgilendiriniz ve mesajı sisteminizden
    siliniz. Bu mesajın izinsiz kullanımı, kopyalanması, ifşa edilmesi veya dağıtılması
    kesinlikle yasaktır.
    <br /><br />
    This e-mail and any attachments are confidential and intended solely for the use of
    the individual or entity to whom they are addressed. If you have received this e-mail
    in error,<br/> please notify the sender immediately and delete it from your system.
  </div>

  <!-- Çevre Mesajı -->
  <table width="720" cellpadding="0" cellspacing="0" style="margin-top:10px;">
    <tr>
      <td width="70" valign="top">
        <img src="cevre.jpg" width="64" height="57" alt="" />
      </td>
      <td valign="top" style="padding-left:8px;padding-top:10px;">
        <div style="font-size:10px; color:#7F7F7F; font-style:italic;">
          Lütfen ağaçları ve doğayı koruyun.
          Lütfen bu e-postayı yazdırmadan önce düşünün.
        </div>
        <div style="font-size:10px; color:#7F7F7F; font-style:italic;">
    Please protect the trees and the nature.
          Please think before printing this e-mail.
        </div>
      </td>
    </tr>
  </table>

</div>

  `;
  return (
    <>
    <Container className='signature-shema'>
     <div ref={targetRef} dangerouslySetInnerHTML={{ __html: signatureHtml }} />
     </Container>
    </>
  )
}

export default SignatureView