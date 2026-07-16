import { LangCreate, LangResponse, LangUpdate } from "@/types/lang";
import { BaseService } from "./base.service";

export const langService = new BaseService<
  LangCreate,
  LangUpdate,
  LangResponse
>("/Langs");


