import { CompanyCreate, CompanyResponse, CompanyUpdate } from "@/types/company";
import { BaseService } from "./base.service";

export const companyService=new BaseService<CompanyCreate,CompanyUpdate,CompanyResponse>("/Companies");