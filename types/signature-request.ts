export interface SignatureRequest {
    nameSurname: string;
    title: string;
    email: string;
    phoneCode:string;
    phoneNumber: string;
    companyId: string;
    moduleId: string;
    lang: string;
}

export interface SignatureRequestResponse {
  htmlDocument: string;
}
