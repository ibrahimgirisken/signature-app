import { http } from "@/lib/http";

export class BaseService<TCreate = any, TUpdate = any, TResponse = any> {
  constructor(protected readonly endpoint: string) {}

  getAll(): Promise<TResponse[]> {
    return http.get(`${this.endpoint}/all`).then((res) => res.data);
  }

  getById(id: string): Promise<TResponse> {
    return http
      .get(`${this.endpoint}/getbyid?Id=${id}`)
      .then((res) => res.data);
  }

  create(data: TCreate): Promise<TResponse> {
    return http.post(`${this.endpoint}/add`, data).then((res) => res.data);
  }

  update(data: TUpdate): Promise<void> {
    return http.put(`${this.endpoint}/update`, data).then((res) => res.data);
  }

  delete(id: string): Promise<void> {
    return http
      .delete(`${this.endpoint}/delete?Id=${id}`)
      .then((res) => res.data);
  }

  uploadFile(formData: FormData): Promise<void> {
    return http
      .post(`${this.endpoint}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);
  }

  getmailtemplate(data: any): Promise<TResponse> {
    return http
      .post(`${this.endpoint}/getmailtemplate`, data)
      .then((res) => res.data);
  }

  getLocalization(lang: any): Promise<TResponse> {
    return http
      .get(`${this.endpoint}/${lang}`)
      .then((res) => res.data);
  }

  updateLocalization(data: TUpdate, lang: any): Promise<TResponse> {
    return http
      .post(`${this.endpoint}/${lang}`,data)
      .then((res) => res.data);
  }
}
