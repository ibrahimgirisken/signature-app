export interface SignatureData{
    fullName: string;
    department: string;
    email: string;
    phone: string;
    mobilePhone:string;
    googleUrlLink:string;
    address:string;
    address2?:string;
    address3?:string;
    companyLogo:string;
    domain_name:string;
    instagram:string;
    facebook:string;
    kdvInformation:string;
    informationText:string;
    environmentText:string;
    fax?:string;
    fairImage?:string;
    twitter?:string;
    linkedin?:string;
    youtube?:string;
    youtubeVideo?:string;
    youtubeVideo2?:string;
    contact?:string;
    timotech?:string;
    news?:string;
    downloadCenter?:string;
    academy?:string;
    fair?:string;
    other?:string;
}
export interface SignatureAssetItem{
    label: string;
    targetUrl: string;
    type: string;
    order: number;
    isActive: boolean;
}