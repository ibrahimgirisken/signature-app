import { CompanyRequest, CompanyResponse } from "@/types/company";
import { BaseService } from "./base.service";

export const companyService=new BaseService<CompanyRequest,CompanyResponse>("/Companies");