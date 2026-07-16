import { http } from "@/lib/http";
import { BaseService } from "./base.service";

class SignatureService extends BaseService<any, any, any> {
  constructor() {
    super("/Signature");
  }

  getmailtemplatelist(): Promise<string[]> {
    return http.get(`${this.endpoint}/getmailtemplatelist`).then((res) => res.data);
  }

  getMailTemplate(data: any): Promise<any> {
    return http
      .post(`${this.endpoint}/getmailtemplate`, data)
      .then((res) => res.data);
  }
}

export const signatureService = new SignatureService();