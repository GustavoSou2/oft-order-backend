import { DefaultModel } from "@Config/types/general.data";

export default class IWorks extends DefaultModel {
    id_work_type!: number;
    id_user!: number;
    id_client!: number;
    description!: string;
    message!: string;
    has_participants!: boolean;
    status!: string;
    work_total_value!: number;
    material_total_value!: number;
}