import { DefaultModel } from "@Config/types/general.data";

export default class IClient extends DefaultModel {
    name!: string;
    id_works_provider?: string;
    phone?: string;
}