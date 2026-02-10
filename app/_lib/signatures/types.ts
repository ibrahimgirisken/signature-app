export interface SignatureData{
    fullName: string;
    department: string;
    email: string;
    phone: string;
    mobilePhone:string;
    address:string;
    logo:string;
    domain_name:string;
    googleUrlLink:string;
    instagram:string;
    facebook:string;
    kdvInformation:string;
    informationText:string;
    news?:string;
    environmentText:string;
}
export interface SignatureAssetItem{
    label: string;
    imageUrl: string;
    targetUrl: string;
    type: string;
    order: number;
    isActive: boolean;
}