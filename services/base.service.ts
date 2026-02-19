import { http } from "@/lib/http";

export class BaseService<TRequest, TResponse> {
    constructor(private readonly endpoint: string) {}

    async getAll(params?: TRequest | any): Promise<TResponse[]> {
        const res = await http.get<TResponse[]>(`${this.endpoint}/all`, {
            params: params 
        });
        return res.data;
    }

    async getById(id: string): Promise<TResponse> {
        const res = await http.get<TResponse>(`${this.endpoint}/getbyid`, {
            params: { Id: id }
        });
        return res.data;
    }

    async create(data: TRequest | any): Promise<TResponse> {
        const res = await http.post<TResponse>(`${this.endpoint}/add`, data);
        return res.data;
    }

    async update(data: TRequest | any): Promise<TResponse> {
        const res = await http.put<TResponse>(`${this.endpoint}/update`, data);
        return res.data;
    }

    async delete(id: string): Promise<void> {
        await http.delete(`${this.endpoint}/delete`, {
            params: { Id: id }
        });
    }
}