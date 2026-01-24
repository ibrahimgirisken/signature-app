export interface CompanyResponse {
  id: string;
  companyName: string;
  email?: string;
  phone?: string;
  isActive: boolean;
  createdAt: string; 
  updatedAt?: string;
}

export interface CompanyRequest {
  companyName: string;
  email?: string;
  phone?: string;
  isActive?: boolean;
}