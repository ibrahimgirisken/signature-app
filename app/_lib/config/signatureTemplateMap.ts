import { cwenerjiSigranuture } from "../signatures/cwenerji";
import { cwsolarcellSignature } from "../signatures/cwsolarcell";
import { tommatechSignature } from "../signatures/tommatech";

export const SUGNATURE_TEMPLATE_BY_COMPANY_ID:Record<string, (data:any)=>string>={
    "08de6a24-3eeb-4a41-807f-58ca9b6699b1":tommatechSignature,
    "08de6a24-4b6e-4831-8da5-6aee482bb8ab":cwsolarcellSignature,
    "08de6a16-110e-4aa5-84fc-33d41a4e4f00":cwenerjiSigranuture
}