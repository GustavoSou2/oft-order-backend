// @ts-ignore
import { IDateAT } from "@types/general.data";

export class IUser extends IDateAT {
    id?: number;
    username!: string;
    id_company!: number;
    mail!: string;
    pass!: string;
    phone!: string;
    date_create_at?: string;
    date_update_at?: string;
    date_delete_at?: string;
    ref_id?: number;
}

export enum UserKeys {
    username = 'username',
    mail = 'mail',
    pass = 'pass',
    id_company = 'id_company',
    phone = 'phone',
    date_create_at = 'date_create_at',
    date_update_at = 'date_update_at',
    date_delete_at = 'date_delete_at'
}

export class IUserLoginDirective {
    cnpj!: string;
    pass!: string;
}