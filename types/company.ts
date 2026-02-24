export interface CompanyListResponse {
  companies: CompanyResponse[];
}

export interface CompanyResponse {
  id: string;
  companyName: string;
  domainName: string;
  phone: string;
  fax: string;
  address: string;
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
  imageUrl: string;
  targetUrl: string;
  type: string;
  order: number;
  isActive: boolean;
}
