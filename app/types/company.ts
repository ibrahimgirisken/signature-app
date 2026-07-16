export interface CompanyTranslation {
  langId: string;
  langLangCode: string;
  langLangImage: string;
  addressText1: string;
  addressText2: string;
  addressText3: string;
  companyLogo: string;
  youtubeLabel1: string;
  youtubeLabel2: string;
  youtubeLabel3: string;
  promoVideoUrl1: string;
  promoVideoUrl2: string;
  promoVideoUrl3: string;
  qrCodeImage: string;
  downloadCenterLink: string;
  newsLink: string;
  fairsLink: string;
  onlineEducationLink: string;
  fairCalendarUrl: string;
  fairCalendarImageUrl: string;
  contactFormLink: string;
  googleFeedbackLink: string;
  signOff: string;
  gdprText: string;
  environmentalText:string;
  taxInfo:string;
}

export interface Company {
  id: string;
  companyName: string;
  code: string;
  googleFeedbackLink: string;
  domainName: string;
  phone: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  fax: string;
  gdprText: string;
  companyTranslations: CompanyTranslation[];
}

export interface DocumentResponse {
  id: string;
  targetUrl?: string;
  htmlContent?: string;
  userName: string;
  createdDate: string;
}

export interface DocumentRequest {
  id: string;
  targetUrl?: string;
  htmlContent?: string;
  userName: string;
  createdDate: string;
}

export interface DocumentCreate {
  targetUrl?: string;
  htmlContent?: string;
  userName: string;
  createdDate: string;
}