export interface Module{
    id:string;
    moduleName:string|null;
    departmentId?:string|null;
    code?: string;
    status:boolean;
}

export interface ModuleCreate{
    moduleName:string|null;
    departmentId?:string|null;
    code?: string;
    status:boolean;
}

export interface ModuleUpdate{
    id:string;
    moduleName:string|null;
    departmentId?:string|null;
    code?: string;
    status:boolean;
}

export interface ModuleResponse{
    id:string;
    moduleName:string|null;
    departmentId?:string|null;
    code?: string;
    status:boolean;
}
