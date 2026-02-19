import { cwenerjiSigranuture } from "../signatures/cwenerji";
import { cwsolarcellSignature } from "../signatures/cwsolarcell";
import { tommatechSignature } from "../signatures/tommatech";

export const SUGNATURE_TEMPLATE_BY_COMPANY_ID:Record<string, (data:any)=>string>={
    "Tommatech":tommatechSignature,
    "CW-Solarcell":cwsolarcellSignature,
    "CW-Enerji":cwenerjiSigranuture,
}