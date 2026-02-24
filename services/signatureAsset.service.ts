import { SignatureAssetRequest, SignatureAssetResponse } from "@/types/signature-asset-types";
import { BaseService } from "./base.service";

export const signatureAssetService=new BaseService<SignatureAssetRequest,SignatureAssetResponse>("/signature-asset-types");