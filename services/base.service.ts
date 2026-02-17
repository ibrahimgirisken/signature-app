import { http } from "@/lib/http";

export class BaseService<TRequest,TResponse> {
    constructor(private readonly endpoint:string){}

    async getAll():Promise<TResponse[]>{
        const res=await http.get<TResponse[]>(`${this.endpoint}/all`)
        return res.data;
    }

    async getById(id:string):Promise<TResponse> {
        const res=await http.get<TResponse>(`${this.endpoint}/getbyid?Id=${id}`)
        return res.data;
    }

    async create(data:TRequest):Promise<TResponse> {
        const res=await http.post<TResponse>(this.endpoint,data)
        return res.data;
    }

    async update(id:string,data:TRequest):Promise<TResponse> {
        const res=await http.put<TResponse>(`${this.endpoint}/update`,data)
        return res.data;
    }

    async delete(id:string):Promise<void> {
        const res=await http.delete(`${this.endpoint}/${id}`)
    }
}