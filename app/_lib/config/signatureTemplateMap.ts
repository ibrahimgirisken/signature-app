import { cwenerjiSigranuture } from "../signatures/cwenerji";
import { cwsolarcellSignature } from "../signatures/cwsolarcell";
import { tommatechSignature } from "../signatures/tommatech";

export const SUGNATURE_TEMPLATE_BY_COMPANY_ID:Record<string, (data:any)=>string>={
    "08de5c9f-2f65-4212-8ec1-51d60e4bd511":tommatechSignature,
    "08de5cb1-7038-40ce-81d3-6e2242827e91":cwsolarcellSignature,
    "08de6584-b430-4f25-8c7d-2a2ccce9aee3":cwenerjiSigranuture
}