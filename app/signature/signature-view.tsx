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
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 15">
<meta name=Originator content="Microsoft Word 15">
<style>
    /* Font Definitions */
    @font-face {
        font-family: "Cambria Math";
        panose-1: 2 4 5 3 5 4 6 3 2 4;
        mso-font-charset: 0;
        mso-generic-font-family: roman;
        mso-font-pitch: variable;
        mso-font-signature: 3 0 0 0 1 0;
    }

    @font-face {
        font-family: Calibri;
        panose-1: 2 15 5 2 2 2 4 3 2 4;
        mso-font-charset: 162;
        mso-generic-font-family: swiss;
        mso-font-pitch: variable;
        mso-font-signature: -469750017 -1073732485 9 0 511 0;
    }

    @font-face {
        font-family: "Calibri Light";
        panose-1: 2 15 3 2 2 2 4 3 2 4;
        mso-font-charset: 162;
        mso-generic-font-family: swiss;
        mso-font-pitch: variable;
        mso-font-signature: -469750017 -1073732485 9 0 511 0;
    }

    @font-face {
        font-family: "Century Gothic";
        panose-1: 2 11 5 2 2 2 2 2 2 4;
        mso-font-charset: 162;
        mso-generic-font-family: swiss;
        mso-font-pitch: variable;
        mso-font-signature: 647 0 0 0 159 0;
    }

    /* Style Definitions */
    p.MsoNormal,
    li.MsoNormal,
    div.MsoNormal {
        mso-style-unhide: no;
        mso-style-qformat: yes;
        mso-style-parent: "";
        margin-top: 0in;
        margin-right: 0in;
        margin-bottom: 5px;
        margin-left: 0in;
        line-height: 90%;
        mso-pagination: widow-orphan;
        font-size: 11.0pt;
        font-family: "Calibri", sans-serif;
        mso-ascii-font-family: Calibri;
        mso-ascii-theme-font: minor-latin;
        mso-fareast-font-family: "Times New Roman";
        mso-fareast-theme-font: minor-fareast;
        mso-hansi-font-family: Calibri;
        mso-hansi-theme-font: minor-latin;
        mso-bidi-font-family: "Times New Roman";
    }

    h2 {
        mso-style-priority: 9;
        mso-style-qformat: yes;
        mso-style-link: "Heading 2 Char";
        mso-style-next: Normal;
        margin-top: 2.0pt;
        margin-right: 0in;
        margin-bottom: 0in;
        margin-left: 0in;
        line-height: 107%;
        mso-pagination: widow-orphan lines-together;
        page-break-after: avoid;
        mso-outline-level: 2;
        font-size: 13.0pt;
        font-family: "Calibri Light", sans-serif;
        mso-ascii-font-family: "Calibri Light";
        mso-ascii-theme-font: major-latin;
        mso-fareast-font-family: "Times New Roman";
        mso-fareast-theme-font: major-fareast;
        mso-hansi-font-family: "Calibri Light";
        mso-hansi-theme-font: major-latin;
        mso-bidi-font-family: "Times New Roman";
        mso-bidi-theme-font: major-bidi;
        color: #2F5496;
        mso-themecolor: accent1;
        mso-themeshade: 191;
        font-weight: normal;
    }

    h6 {
        color: #2F5496;
    }

    a:link,
    span.MsoHyperlink {
        mso-style-priority: 99;
        font-family: "Times New Roman", serif;
        mso-bidi-font-family: "Times New Roman";
        color: #0563C1;
        text-decoration: underline;
        text-underline: single;
    }

    a:visited,
    span.MsoHyperlinkFollowed {
        mso-style-noshow: yes;
        mso-style-priority: 99;
        color: #954F72;
        mso-themecolor: followedhyperlink;
        text-decoration: underline;
        text-underline: single;
    }

    span.Heading2Char {
        mso-style-name: "Heading 2 Char";
        mso-style-priority: 9;
        mso-style-unhide: no;
        mso-style-locked: yes;
        mso-style-link: "Heading 2";
        mso-ansi-font-size: 13.0pt;
        mso-bidi-font-size: 13.0pt;
        font-family: "Calibri Light", sans-serif;
        mso-ascii-font-family: "Calibri Light";
        mso-ascii-theme-font: major-latin;
        mso-fareast-font-family: "Times New Roman";
        mso-fareast-theme-font: major-fareast;
        mso-hansi-font-family: "Calibri Light";
        mso-hansi-theme-font: major-latin;
        mso-bidi-font-family: "Times New Roman";
        mso-bidi-theme-font: major-bidi;
        color: #2F5496;
        mso-themecolor: accent1;
        mso-themeshade: 191;
        mso-fareast-language: TR;
    }

    /* span.SpellE {
    mso-style-name: "";
    mso-spl-e: yes;
  } */

    span.GramE {
        mso-style-name: "";
        mso-gram-e: yes;
    }

    .MsoChpDefault {
        mso-style-type: export-only;
        mso-default-props: yes;
        font-family: "Calibri", sans-serif;
        mso-ascii-font-family: Calibri;
        mso-ascii-theme-font: minor-latin;
        mso-fareast-font-family: Calibri;
        mso-fareast-theme-font: minor-latin;
        mso-hansi-font-family: Calibri;
        mso-hansi-theme-font: minor-latin;
        mso-bidi-font-family: "Times New Roman";
        mso-bidi-theme-font: minor-bidi;
        mso-fareast-language: EN-US;
    }

    .dsc {
        color: #2F5496;
        font-size: 14px;
    }

    .MsoPapDefault {
        mso-style-type: export-only;
        margin-bottom: 8.0pt;
        line-height: 90%;
    }

    @page WordSection1 {
        size: 8.5in 11.0in;
        margin: 70.85pt 70.85pt 70.85pt 70.85pt;
        mso-header-margin: 35.4pt;
        mso-footer-margin: 35.4pt;
        mso-paper-source: 0;
    }

    div.WordSection1 {
        page: WordSection1;
    }
</style>

    <div class=WordSection1>
        <span class="dsc" style="color:#0070C0;font-style: italic;font-size:10.0pt;font-family:'Century Gothic'">
            Saygılarımla / Best Regards / Mit freundlichen Grüßen
        </span>
        <p class=MsoNormal><b><span style='font-size:12.0pt;line-height:80%;
font-family:"Century Gothic",sans-serif;color:#0070C0'>
                    </br>
                </span></b></p>
        <p class=MsoNormal><b><span style='font-size:12.0pt;line-height:80%;
font-family:"Century Gothic",sans-serif;color:#0B58B5'>${signatureData.fullName}

                </span></b></p>
        <p class=MsoNormal><span style='font-size:10.0pt;line-height:80%;font-family:
"Century Gothic",sans-serif;color:#0070C0'>${signatureData.department}</span><b><span style='font-size:12.0pt;line-height:80%;font-family:"Century Gothic",sans-serif;
color:#0B58B5'>

                </span></b></p></br>
        <table class=MsoNormalTable cellspacing=0 cellpadding=0
            style='border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in'>
            <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes'>
                <td width=627 valign=top style='width:470.05pt;padding:0in 5.4pt 0in 5.4pt'>
                    <p class=MsoNormal><span style='mso-ascii-font-family:Calibri;mso-hansi-font-family:
  Calibri'>

                        </span></p>
                    <table class=MsoNormalTable cellspacing=0 cellpadding=0 width=747 style='width:560.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;
   mso-padding-alt:0in 0in 0in 0in'>
                        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                            <td width=66 valign=top style='width:78.2pt;padding:0in 5.4pt 0in 5.4pt'>
                                <p class=MsoNormal><b><span style='font-size:10.0pt;line-height:80%;
    font-family:"Century Gothic",sans-serif;color:#0070C0'>
                                            E-posta</span></b></p>
                            </td>
                            <td width=483 valign=top style='width:362.0pt;padding:0in 5.4pt 0in 5.4pt'>
                                <p class=MsoNormal><span style='color:#0070C0'>: </span><a
                                        href="mailto:$signatureData.email"
                                        style="font-size:10.0pt;font-family:'Century Gothic';color:#0070C0">${signatureData.email}</a><span
                                        style='mso-ascii-font-family:Century Gothic;mso-hansi-font-family:Century Gothic;
    color:#0070C0;font-size:11pt' ;></span></p>
                            </td>
                            <td width=198 rowspan=5 valign=top style='width:148.8pt;padding:0in 5.4pt 0in 5.4pt'>
                                <p class=MsoNormal>
                                    <!--[if gte vml 1]><v:shapetype id="_x0000_t75"
     coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe"
     filled="f" stroked="f">
     <v:stroke joinstyle="miter"/>
     <v:formulas>
      <v:f eqn="if lineDrawn pixelLineWidth 0"/>
      <v:f eqn="sum @0 1 0"/>
      <v:f eqn="sum 0 0 @1"/>
      <v:f eqn="prod @2 1 2"/>
      <v:f eqn="prod @3 21600 pixelWidth"/>
      <v:f eqn="prod @3 21600 pixelHeight"/>
      <v:f eqn="sum @0 0 1"/>
      <v:f eqn="prod @6 1 2"/>
      <v:f eqn="prod @7 21600 pixelWidth"/>
      <v:f eqn="sum @8 21600 0"/>
      <v:f eqn="prod @7 21600 pixelHeight"/>
      <v:f eqn="sum @10 21600 0"/>
     </v:formulas>
     <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>
     <o:lock v:ext="edit" aspectratio="t"/>
    </v:shapetype><v:shape id="Resim_x0020_57" o:spid="_x0000_s1027" type="#_x0000_t75"
     href="${signatureData.googleUrlLink}" alt=""
     style='position:absolute;margin-left:30pt;margin-top:-.2pt;width:140.25pt;
     height:62.65pt;z-index:251659264;visibility:visible;mso-wrap-style:square;
     mso-width-percent:0;mso-height-percent:0;mso-wrap-distance-left:9pt;
     mso-wrap-distance-top:0;mso-wrap-distance-right:9pt;
     mso-wrap-distance-bottom:0;mso-position-horizontal:absolute;
     mso-position-horizontal-relative:text;mso-position-vertical:absolute;
     mso-position-vertical-relative:text;mso-width-percent:0;
     mso-height-percent:0;mso-width-relative:page;mso-height-relative:page'
     o:button="t">
     <v:fill o:detectmouseclick="t"/>
     <v:imagedata src="gorusleriniz-degerli.png"
      o:title=""/>
    </v:shape><![endif]-->
                                    <![if !vml]><span style='mso-ignore:vglayout;
    position:absolute;z-index:251659264;margin-left:40px;margin-top:0px;
    width:187px;height:84px'><a href="${signatureData.googleUrlLink}" target="_blank"><img
                                                border=0 width=230 height=120
                                                src="gorusleriniz-degerli.png" title=""
                                                v:shapes="Resim_x0020_57"></a></span>
                                    <![endif]>
                                </p>
                            </td>
                        </tr>
                        <tr style='mso-yfti-irow:2'>
                            <td width=66 valign=top style='width:78.2pt;padding:0in 5.4pt 0in 5.4pt'>
                                <p class=MsoNormal><b><span style='font-size:10.0pt;line-height:80%;
            font-family:"Century Gothic",sans-serif;color:#0070C0'>Cep Telefonu</span></b></p>
                            </td>
                            <td width=483 valign=top style='width:362.0pt;padding:0in 5.4pt 0in 5.4pt'>
                                <p class=MsoNormal><span style='color:#0070C0'>:</span>
                                    <span
                                        style='font-size:10.0pt;line-height:80%;font-family:"Century Gothic",sans-serif; color:#0070C0'>${signatureData.mobilePhone}</span>
                                </p>
                            </td>
                        </tr>
                                                <tr style='mso-yfti-irow:2'>
                            <td width=66 valign=top style='width:78.2pt;padding:0in 5.4pt 0in 5.4pt'>
                                <p class=MsoNormal><b><span style='font-size:10.0pt;line-height:80%;
            font-family:"Century Gothic",sans-serif;color:#0070C0'>Telefon</span></b></p>
                            </td>
                            <td width=483 valign=top style='width:362.0pt;padding:0in 5.4pt 0in 5.4pt'>
                                <p class=MsoNormal><span style='color:#0070C0'>:</span>
                                    <span
                                        style='font-size:10.0pt;line-height:80%;font-family:"Century Gothic",sans-serif; color:#0070C0'>${signatureData.phone}</span>
                                </p>
                            </td>
                        </tr>
                        <!-- 
            // if(isset($_POST['extension-number']))
            // {
            //   echo html_entity_decode($data);
            // };
            ?> -->
                        <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes'>
                            <td width=66 valign=top style='width:78.2pt;padding:0in 5.4pt 0in 5.4pt'>
                                <p class=MsoNormal><b><span style='font-size:10.0pt;line-height:80%;
    font-family:"Century Gothic",sans-serif;color:#0070C0'>Adres</span></b></p>
                            </td>
                            <td width=483 valign=top style='width:362.0pt;padding:0in 5.4pt 0.1in 6.4pt'>
                                <p class=MsoNormal><span style='color:#0070C0'>: </span><span style='font-size:10.0pt;line-height:110%;font-family:"Century Gothic",sans-serif;
    color:#0070C0'>${signatureData.address}
                                    </span></p>
                            </td>
                        </tr>
                    </table>
                <td width=15 valign=top style='width:11.05pt;padding:0in 5.4pt 0in 5.4pt'></td>
            </tr>
        </table>
        <table class=MsoNormalTable cellspacing=0 cellpadding=0 width=1000 style='margin-top:2pt;width:8.0in;border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:
 0in 0in 0in 0in'>
            <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;'>
                     <td width=110 valign=top style='width:95.8pt;border:none;padding:0.5in 0.2in 0.3in .1in'>
                    <p class=MsoNormal style='line-height:105%'>
                        <!--[if gte vml 1]><v:shape
     id="Resim_x0020_56" o:spid="_x0000_s1026" type="#_x0000_t75" alt="metin, cihaz, ölçü aleti içeren bir resim&#10;&#10;Açıklama otomatik olarak oluşturuldu"
     style='position:absolute;margin-left:0.35pt;margin-top:211.55pt;width:134.55pt;
     height:77pt;z-index:-251656192;visibility:visible;mso-wrap-style:square;
     mso-width-percent:0;mso-height-percent:0;mso-wrap-distance-left:9pt;
     mso-wrap-distance-top:0;mso-wrap-distance-right:9pt;
     mso-wrap-distance-bottom:0;mso-position-horizontal:right;
     mso-position-horizontal-relative:text;mso-position-vertical:absolute;
     mso-position-vertical-relative:text;mso-width-percent:0;
     mso-height-percent:0;mso-width-relative:margin;mso-height-relative:margin'>
     <v:imagedata src="TR-CW-ENERJI-MAIL-IMZA-22-AGUSTOS-2022_files/image002.png"
      o:title="metin, cihaz, ölçü aleti içeren bir resim&#10;&#10;Açıklama otomatik olarak oluşturuldu"/>
     <w:wrap type="tight"/>
    </v:shape><![endif]-->
                        <a href="https://${signatureData.domain_name}.cw-enerji.com" target="_blank"><span style='font-family:"Times New Roman",serif;color:black;mso-no-proof:yes;
    text-decoration:none;text-underline:none'>
                                <![if !vml]><img width=250 height=116
                                    src="${signatureData.logo?signatureData.logo:'cw-enerji-plus.jpg'}"
                                    alt="metin içeren bir resim&#10;&#10;Açıklama otomatik olarak oluşturuldu"
                                    v:shapes="_x0000_i1041">
                                <![endif]>
                            </span></a>
                    </p>
                </td>
                <td width=170 valign=top style='width:95.8pt;border:none;padding:0.5in 0.2in 0.3in 0.5in'>
                    <p class=MsoNormal style='line-height:105%;align-items:center;justify-content:center;display:flex;flex-direction:column'><a href="https://www.youtube.com/watch?v=nUzN7XuREsA" target="_blank"><span style='font-family:"Times New Roman",serif;color:black;mso-no-proof:yes;text-decoration:none;
    text-underline:none'>
                                <![if !vml]><img width=110 height=86
                                    src="kum.jpg" style="border-radius:12px"
                                    alt="işaret, yiyecek, tren, mavi içeren bir resimAçıklama otomatik olarak oluşturuldu"
                                    v:shapes="_x0000_i1040">
                                <![endif]>
                            </span></a>
                            <p class=MsoNormal style='line-height:105%;align-items:center;justify-content:center;display:flex;flex-direction:column'>
                            <span style='mso-ascii-font-family:
    Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:Calibri;color:#7F7F7F'>
                               Solar Hücre Tanıtım
                            <span></p></p>
                    <p class=MsoNormal><span style='mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;
  mso-bidi-font-family:Calibri'>
                        </span></p>
                </td>
                <td width=170 valign=top style='width:95.8pt;border:none;padding:0.5in 0.01in 0.3in 0in'>
                    <p class=MsoNormal style='line-height:105%;align-items:center;justify-content:center;display:flex;flex-direction:column'><a href="https://www.youtube.com/watch?v=rDa8JF7KywE" target="_blank"><span style='font-family:"Times New Roman",serif;color:black;mso-no-proof:yes;text-decoration:none;
    text-underline:none'>
                                <![if !vml]><img width=110 height=86
                                    src="reklam.jpg" style="border-radius:12px"
                                    alt="işaret, yiyecek, tren, mavi içeren bir resimAçıklama otomatik olarak oluşturuldu"
                                    v:shapes="_x0000_i1040">
                                <![endif]>
                            </span></a><p class=MsoNormal style='line-height:105%;align-items:center;justify-content:center;display:flex;flex-direction:column'><span style='mso-ascii-font-family:
    Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:Calibri;color:#7F7F7F'>
                                CWPlus Reklam
                            <span></p></p>
                    <p class=MsoNormal><span style='mso-ascii-font-family:Calibri;mso-fareast-font-family:
  Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;
  mso-bidi-font-family:Calibri'>
                        </span></p>
                </td>
            </tr>
                        <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;border-top:solid #D0CECE 1.0pt;'>
                <td width=683 colspan=4 valign=top style='width:837.4pt;border:none;
    padding:0in 5pt 0in 5.4pt'>
                    <p class=MsoNormal style='line-height:105%'>
                    <p class="MsoNormal"><b><span
                                style="font-size:7.0pt;line-height:105%;font-family:&quot;Century Gothic&quot;sans-serif;color:#0070C0">
                                "KDV
                                KANUNUN 117 SAYILI TEBLİĞ’İN 3.1.2/B MADDESİNE GÖRE BORSA İSTANBUL’DA İŞLEM GÖREN
                                ŞİRKETİMİZE
                                DÜZENLENECEK FATURALARDA KDV TEVKİFATINA ÖZEN GÖSTERİLMESİ RİCA OLUNUR."
                            </span></b></p>
                </td>
            </tr>
            <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
                <td width=200 valign=top style='width:300pt;padding:0in 5.4pt 0in 5.4pt'>
                    <p class=MsoNormal style='text-align:left;line-height:105%'><a href="https://cw-enerji.com/" target="_blank"><span
                                style='font-family:"Times New Roman",serif;
    color:black;mso-no-proof:yes;text-decoration:none;text-underline:none'>
                                <![if !vml]><img width=200 height=74
                                    src="cw-enerji-logo.jpg"
                                    alt="çizim içeren bir resimAçıklama otomatik olarak oluşturuldu"
                                    v:shapes="_x0000_i1039">
                                <![endif]>
                            </span></a></p>
                </td>
                <td width=200 valign=top style='width:300pt;padding:0in 5.4pt 0in 5.4pt'>
                    <p class=MsoNormal style='text-align:left;line-height:105%'><a href="https://cw-enerji.com/tr/cw-akademi" target="_blank"><span style='font-family:"Times New Roman",serif;
    color:black;mso-no-proof:yes;text-decoration:none;text-underline:none'>
                                <!--[if gte vml 1]><v:shape
     id="_x0000_i1038" type="#_x0000_t75" alt="çizim içeren bir resimAçıklama otomatik olarak oluşturuldu"
     style='width:135pt;height:55.5pt;visibility:visible'>
     <v:imagedata src="cw-akademi.png"
      o:href="cid:image007.png@01D8ABD2.F6271D30"/>
    </v:shape><![endif]-->
                                <![if !vml]><img width=200 height=74
                                    src="cw-akademi.png"
                                    alt="çizim içeren bir resimAçıklama otomatik olarak oluşturuldu"
                                    v:shapes="_x0000_i1038">
                                <![endif]>
                            </span></a></p>
                </td>
                <td width=200 valign=top style='width:300pt;padding:0in 5.4pt 0in 5.4pt'>
                    <p class=MsoNormal style='text-align:left;line-height:105%'><a href="https://indir.cw-enerji.com/tr/index.html" target="_blank">
                    <span style='font-family:"Times New Roman",serif;
    color:black;mso-no-proof:yes;text-decoration:none;text-underline:none'>
                                <!--[if gte vml 1]><v:shape
     id="_x0000_i1037" type="#_x0000_t75" alt="çizim içeren bir resimAçıklama otomatik olarak oluşturuldu"
     style='width:135pt;height:55.5pt;visibility:visible'>
     <v:imagedata src="indirme-merkezi.jpg"
      o:href="cid:image008.png@01D8ABD2.F6271D30"/>
    </v:shape><![endif]-->
                                <![if !vml]><img width=200 height=74 src="indirme-merkezi.jpg"
                                    alt="çizim içeren bir resimAçıklama otomatik olarak oluşturuldu"
                                    v:shapes="_x0000_i1037">
                                <![endif]>
                            </span></a></p>
                </td>
            </tr>
        </table>
               <table class=MsoNormalTable cellspacing=0 cellpadding=0 width=1000 style='margin-top:2pt;width:14in;border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:
 0in 0in 0in 0in'>
            <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
             <td width=1000 valign=top style='width:837.4pt;padding:0in 5.4pt 0in 5.4pt'>
        <p class=MsoNormal><span style='padding-top:8.0pt;font-size:7.0pt;line-height:110%;color:#BDD6EE'>Bu
                elektronik posta ve bu posta <span class=GramE>ile birlikte</span> iletilen
                bütün dosyalar sadece göndericisi <span class=SpellE>tarafindan</span> <span class=SpellE>almasi</span>
                amaçlanan yetkili gerçek ya da tüzel <span class=SpellE>kisinin</span> <span
                    class=SpellE>kullanimi</span> içindir. <span class=SpellE>Eger</span> söz konusu yetkili <span
                    class=SpellE>alici</span> <span class=SpellE>degilseniz</span> bu<br> elektronik <span
                    class=SpellE>postanin</span> <span class=SpellE>içerigini</span> <span
                    class=SpellE>açiklamaniz</span>, <span class=SpellE>kopyalamaniz</span>, yönlendirmeniz ve <span
                    class=SpellE>kullanmaniz</span> kesinlikle <span class=SpellE>yasaktir</span> ve bu elektronik <span
                    class=SpellE>postayi</span> derhal silmeniz <span class=SpellE><span
                        class=GramE>gerekmektedir.CW</span></span> ENERJI MÜH. TICARET SANAYI AŞ bu <span
                    class=SpellE>mesajin</span><br> <span class=SpellE>içerdigi</span> bilgilerin <span
                    class=SpellE>dogrulugu</span> veya eksiksiz <span class=SpellE>oldugu</span> konusunda herhangi bir
                garanti vermemektedir. Bu nedenle bu bilgilerin ne <span class=SpellE>sekilde</span> olursa olsun <span
                    class=SpellE>içeriginden</span>,
                iletilmesinden, <span class=SpellE>alinmasindan</span> ve <span class=SpellE>saklanmasindan</span><br>
                sorumlu <span class=SpellE>degildir</span>. Bu mesajdaki <span class=SpellE>görüsler</span> <span
                    class=SpellE>yalnizca</span> gönderen <span class=SpellE>kisiye</span> aittir ve CW <span
                    class=GramE>ENERJI&nbsp; MÜH.TICARET</span> SANAYI AŞ'nin <span class=SpellE>görüslerini</span>
                <span class=SpellE>yansitmayabilir</span>.

            </span></p>
        <p class=MsoNormal><span class=SpellE><span style='font-size:7.0pt;
  line-height:110%;color:#BDD6EE'>This</span></span><span style='font-size:
  7.0pt;line-height:110%;color:#BDD6EE'> <span class=GramE>e-mail</span> <span class=SpellE>and</span> <span
                    class=SpellE>any</span> <span class=SpellE>files</span> <span class=SpellE>transmitted</span> <span
                    class=SpellE>with</span> it <span class=SpellE>are</span> <span class=SpellE>confidential</span>
                <span class=SpellE>and</span> <span class=SpellE>intended</span> <span class=SpellE>solely</span> <span
                    class=SpellE>for</span> <span class=SpellE>the</span> <span class=SpellE>use</span> of <span
                    class=SpellE>the</span> <span class=SpellE>individual</span> <span class=SpellE>or</span> <span
                    class=SpellE>entity</span> <span class=SpellE>to</span> <span class=SpellE>whom</span> they <span
                    class=SpellE>are</span> <span class=SpellE>addressed</span>. <span class=SpellE>If</span> <span
                    class=SpellE>you</span> <span class=SpellE>are</span> not <span class=SpellE>the</span> <span
                    class=SpellE>intended</span> <span class=SpellE>recipient</span> <span class=SpellE>you</span> <span
                    class=SpellE>are</span> <span class=SpellE>hereby</span> <span class=SpellE>notified</span><br>
                <span class=SpellE>that</span> <span class=SpellE>any</span> <span class=SpellE>dissemination</span>,
                <span class=SpellE>forwarding</span>, <span class=SpellE>copying</span> <span class=SpellE>or</span>
                <span class=SpellE>use</span> of <span class=SpellE>any</span> of <span class=SpellE>the</span> <span
                    class=SpellE>information</span> is <span class=SpellE>strictly</span> <span
                    class=SpellE>prohibited</span>, <span class=SpellE>and</span> <span class=SpellE>the</span> <span
                    class=GramE>e-mail</span> <span class=SpellE>should</span> <span class=SpellE>immediately</span> be
                <span class=SpellE>deleted</span>.<br>
            </span></p>
        <p class=MsoNormal><span style='font-size:7.0pt;line-height:80%;color:#BDD6EE'>CW <span class=GramE>ENERJI&nbsp;
                    MÜH.TICARET</span> SANAYI AŞ <span class=SpellE>makes</span> <span class=SpellE>no</span> <span
                    class=SpellE>warranty</span> as <span class=SpellE>to</span> <span class=SpellE>the</span> <span
                    class=SpellE>accuracy</span> <span class=SpellE>or</span> <span class=SpellE>completeness</span> of
                <span class=SpellE>any</span> <span class=SpellE>information</span><span class=SpellE>contained</span>
                in <span class=SpellE>this</span> <span class=SpellE>message</span> <span class=SpellE>and</span> <span
                    class=SpellE>hereby</span> <span class=SpellE>excludes</span> <span class=SpellE>any</span> <span
                    class=SpellE>liability</span> of <span class=SpellE>any</span> <span class=SpellE>kind</span> <span
                    class=SpellE>for</span> <span class=SpellE>the</span> <span class=SpellE>information</span> <span
                    class=SpellE>contained</span><br> <span class=SpellE>therein</span> <span class=SpellE>or</span>
                <span class=SpellE>for</span> <span class=SpellE>the</span> <span class=SpellE>information</span> <span
                    class=SpellE>transmission</span>, <span class=SpellE>reception</span>, <span
                    class=SpellE>storage</span> <span class=SpellE>or</span> <span class=SpellE>use</span> of <span
                    class=SpellE>such</span> in <span class=SpellE>any</span> <span class=SpellE>way</span> <span
                    class=SpellE>whatsoever</span>. <span class=SpellE>The</span> <span class=SpellE>opinions</span>
                <span class=SpellE>expressed</span> in <span class=SpellE>this</span> <span class=SpellE>message</span>
                <span class=SpellE>belong</span> <span class=SpellE>to</span> <span class=SpellE>sender</span> <span
                    class=SpellE>alone</span> <span class=SpellE>and</span> <span class=SpellE>may</span> not <span
                    class=SpellE>necessarily</span> <span class=SpellE>reflect</span> <span class=SpellE>the</span>
                <span class=SpellE>opinions</span><br> <span class=GramE>of&nbsp;
                    CW</span> ENERJI&nbsp; MÜH.TICARET SANAYI AŞ</span></p>

        </td>
        </tr>
        <tr style='width:14in;mso-yfti-irow:1;mso-yfti-lastrow:yes;height:13.5pt'>
            <td width=119 style='width:89.3pt;border:solid white 1.0pt;border-top:none;
  padding:0in 5.4pt 0in 5.4pt;height:13.5pt'>
                <p class=MsoNormal><span>
                        <!--[if gte vml 1]><v:shape
   id="_x0000_i1026" type="#_x0000_t75" style='width:458pt;height:42.75pt;
   visibility:visible'>
   <v:imagedata src="cevre.jpg"
    o:href="cid:image019.jpg@01D8ABD2.F6271D30"/>
  </v:shape><![endif]-->
                        <![if !vml]><img width=64 height=57
                            src="cevre.jpg" v:shapes="_x0000_i1026">
                        <![endif ]>
                    </span></p>
                    <p class=MsoNormal><i><span style='font-size:10.0pt;line-height:80%;
  color:#7F7F7F'>'Please protect the trees and the nature... Please think before printing this email; Do you really need it?'</span></i></p>
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