// @ts-ignore
import { DefaultModel } from "@types/general.data";

export class UserModel extends DefaultModel {
    name!: string;
    mail!: number;
    password?: string;
    work_description?: string;
    company_description?: string;
    company_cnpj?: string;
}


export class IUserLoginDirective {
    mail!: string;
    pass!: string;
}