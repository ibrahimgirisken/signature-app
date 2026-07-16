export interface SignatureRequest {
    nameSurname: string;
    title: string;
    email: string;
    phoneNumber: string;
    companyId: string;
    moduleCode: string;
    lang: string;
}

export interface SignatureRequestResponse {
  htmlDocument: string;
}
