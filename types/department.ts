export interface Department{
    id:string;
    departmentName:string|null;
    companyId:string|null;
    status:boolean;
}

export interface DepartmentCreate{
    departmentName:string|null;
    companyId?:string|null;
    status:boolean;
}


export interface DepartmentUpdate{
    id:string;
    departmentName:string|null;
    companyId?:string|null;
    status:boolean;
}

export interface DepartmentResponse{
    id:string;
    departmentName:string|null;
    companyId:string|null;
    status:boolean;
}