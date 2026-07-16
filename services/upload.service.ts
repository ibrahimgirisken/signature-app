import { companyService } from "./company.service";

export const uploadService = {
  uploadCompanyImage: async (langId: string, file: File): Promise<any> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("langId", langId);
    const response: any = companyService.uploadFile(formData);
    return response;
  }
};