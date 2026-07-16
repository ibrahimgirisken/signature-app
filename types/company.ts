export interface CompanyTranslation {
  langId: string;
  langLangCode?: string;
  langLangImage?: string;
  addressText1?: string;
  addressText2?: string;
  addressText3?: string;
  companyLogo?: string;
  youtubeLabel1?:string;
  youtubeLabel2?:string;
  youtubeLabel3?:string;
  promoVideoUrl1?: string;
  promoVideoUrl2?: string;
  promoVideoUrl3?: string;
  qrCodeImage?: string;
  downloadCenterLink?:string;
  newsLink?:string;
  fairsLink?:string;
  fairCalenderImageUrl?:string;
  onlineEducationLink?: string;
  contactFormLink?: string;
  googleFeedbackLink?: string;
  fairCalenderUrl?: string;
  signOff?: string;
  gdprText?: string;
  environmentalText?: string;
  taxInfo?:string;
}

export interface Company {
  id: string;
  companyName?: string;
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
  status:boolean|true;
  companyTranslations: CompanyTranslation[];
}

export interface CompanyCreate {
  id: string;
  companyName: string;
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
  status:boolean|true;
  companyTranslations: CompanyTranslation[];
}

export interface CompanyUpdate {
  id: string;
  companyName: string;
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
  status:boolean|true;
  companyTranslations: CompanyTranslation[];
}

export interface CompanyResponse {
  id: string;
  companyName: string;
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
  status:boolean|true;
  companyTranslations: CompanyTranslation[];
}

