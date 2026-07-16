import { http } from "@/lib/http";
import { BaseService } from "./base.service";
import { ModuleResponse } from "@/types/module";

class ModuleService extends BaseService<any, any, any> {
  constructor() {
    super("/Module");
  }

  getallmodulebydepartmentid(id:string): Promise<ModuleResponse[]> {
    return http.get(`${this.endpoint}/getallmodulebydepartmentid?DepartmentId=${id}`).then((res) => res.data);
  }
}

export const moduleService = new ModuleService();