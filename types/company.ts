export interface CompanyListResponse {
  companies: CompanyResponse[];
}

export interface CompanyResponse {
  id: string;
  companyName: string;
  phone?: string;
  fax?: string;
  address?: string;
  kdvText?: string;
  informationText?: string;
  environmentText?: string;
  components: CompanyComponentResponse[];
}

export interface CompanyRequest {
  companyName: string;
  email?: string;
  phone?: string;
  isActive?: boolean;
}

export interface CompanyComponentResponse{
  id: string;
  companyId: string;
  label: string;
  imageUrl: string;
  targetUrl: string;
  type: string; // enum da olabilir
  order: number;
  isActive: boolean;
}