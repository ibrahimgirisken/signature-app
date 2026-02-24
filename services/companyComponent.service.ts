import { CompanyComponentRequest, CompanyComponentResponse} from "@/types/company";
import { BaseService } from "./base.service";

export const companyComponentService=new BaseService<CompanyComponentRequest,CompanyComponentResponse>("/CompanyComponent");