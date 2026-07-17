export interface SignatureRequest {
    nameSurname: string;
    title: string;
    email: string;
    phoneNumber: string;
    companyId: string;
    moduleId: string;
    lang: string;
}

export interface SignatureRequestResponse {
  htmlDocument: string;
}
