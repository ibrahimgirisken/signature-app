import { http } from "@/lib/http";
import { BaseService } from "./base.service";
import { DepartmentResponse } from "@/types/department";

class DepartmentService extends BaseService<any, any, any> {
  constructor() {
    super("/Department");
  }

  getalldepartmentbycompanyid(id:string): Promise<DepartmentResponse[]> {
    return http.get(`${this.endpoint}/getalldepartmentbycompanyid?CompanyId=${id}`).then((res) => res.data);
  }
}

export const departmentService = new DepartmentService();