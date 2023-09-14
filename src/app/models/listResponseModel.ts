import { ResponseModel } from "./responseModel";

export interface ListResponseModule<T> extends ResponseModel{
    data: T[];

}