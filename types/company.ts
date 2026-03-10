export interface CompanyListResponse {
  companies: CompanyResponse[];
}

export interface CompanyResponse {
  id: string;
  companyName: string;
  companyLogo:string;
  fairImage: string;
  domainName: string;
  phone: string;
  fax: string;
  address: string;
  address2: string;
  address3: string;
  kdvText: string;
  informationText: string;
  environmentText: string;
  components: CompanyComponentResponse[];
}

export interface CompanyRequest {
  id?: string;
}

export interface CompanyComponentRequest {
  id?: string;
}


export interface CompanyComponentResponse {
  id: string;
  companyId: string;
  label: string;
  targetUrl: string;
  type: string;
  order: number;
  isActive: boolean;
}
