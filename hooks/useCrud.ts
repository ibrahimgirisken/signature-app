import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCrud<TRequest,TResponse>(
    key:string,
    service:{
        getAll:()=>Promise<TResponse[]>;
        getById?:(id:string)=>Promise<TResponse>;
        create:(data:TRequest)=>Promise<TResponse>;
        update:(id:string,data:TRequest)=>Promise<TResponse>;
        delete:(id:string) =>Promise<void>; 
    }
) {
    const queryClient=useQueryClient();

    const list=useQuery({
        queryKey:[key],
        queryFn: () => service.getAll(),
    });

    const create=useMutation({
        mutationFn:(data:TRequest) => service.create(data),
        onSuccess:()=>queryClient.invalidateQueries({queryKey:[key]}),
    });

    const update=useMutation({
        mutationFn:({id,data}:{id:string;data:TRequest})=>
            service.update(id,data),
        onSuccess:()=>queryClient.invalidateQueries({queryKey:[key]}),
    });

    const remove=useMutation({
        mutationFn:(id:string)=>service.delete(id),
        onSuccess:()=>queryClient.invalidateQueries({queryKey:[key]}),
    });

    return {list,create,update,remove};
}