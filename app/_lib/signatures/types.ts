export interface SignatureData{
    fullName: string;
    department: string;
    email: string;
    phone: string;
    fax:string;
    mobilePhone:string;
    address:string;
    companyLogo:string;
    fairImage:string;
    domain_name:string;
    googleUrlLink:string;
    instagram:string;
    facebook:string;
    twitter:string;
    linkedin:string;
    youtube:string;
    contact:string;
    kdvInformation:string;
    informationText:string;
    timotech:string;
    news?:string;
    downloadCenter:string;
    academy?:string;
    fair?:string;
    environmentText:string;
}
export interface SignatureAssetItem{
    label: string;
    targetUrl: string;
    type: string;
    order: number;
    isActive: boolean;
}