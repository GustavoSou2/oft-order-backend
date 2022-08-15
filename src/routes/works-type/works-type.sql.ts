import WorksTypeModel from "@Config/types/works-type.interface";

export const WorksTypeSQL = {
    "list": (id_user: number) => {
        return `SELECT * FROM works_type WHERE id_user = ${id_user}`;
    },
    "create": (workType: WorksTypeModel) => {
        return `INSERT INTO works_type(description, weight, id_user, created_at) VALUE ('${workType.description}', ${workType.weight}, ${workType.id_user}, NOW())`;
    },
    "delete": (id_works_type: number) => {
        return `DELETE FROM works_type WHERE id = ${id_works_type}`
    }
}