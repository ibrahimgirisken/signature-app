import { http } from "@/lib/http";
import { BaseService } from "./base.service";
import { CompanyResponse } from "@/types/company";

class CompanyService extends BaseService<any, any, any> {
  constructor() {
    super("/Companies");
  }

  list(): Promise<CompanyResponse[]> {
    return http.get(`${this.endpoint}/list`).then((res) => res.data);
  }
}

export const companyService = new CompanyService();