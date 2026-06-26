import { cwenerjiSigranuture } from "../signatures/cw-enerji";
import { cwsolarcellSignature } from "../signatures/cwsolarcell";
import { tommatechSignature } from "../signatures/tommatech";
import { tommatechVerandaSignature } from "../signatures/tommatech-veranda";
import { cwenergySigranuture } from "../signatures/cw-energy";
import { cwenerjiEnSigranuture } from "../signatures/cw-enerji-en";

export const SUGNATURE_TEMPLATE_BY_COMPANY_ID:Record<string, (data:any)=>string>={
    "Tommatech":tommatechSignature,
    "CW-Solarcell":cwsolarcellSignature,
    "CW-Enerji":cwenerjiSigranuture,
    "CW-Enerji-EN":cwenerjiEnSigranuture,
    "CW-Energy":cwenergySigranuture,
    "Tommatech-Veranda":tommatechVerandaSignature
}