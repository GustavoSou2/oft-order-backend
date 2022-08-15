import WorksTypeModel from "@Config/types/works-type.interface";
import IWorks from "./works.dto";

export const WorksSQL = {
    "list": (id_user: number) => {
        return `SELECT works.*, 
                       works_type.description AS wors_type_description, 
                       CASE
                            WHEN works.status = 1 THEN 'Pendente'
                            WHEN works.status = 2 THEN 'Andamento'
                            WHEN works.status = 3 THEN 'Aprovação'
                            WHEN works.status = 4 THEN 'Finalizado'
                       END AS status_description,
                       CASE
                            WHEN works.status = 1 THEN '#ff0000'
                            WHEN works.status = 2 THEN '#0000ff'
                            WHEN works.status = 3 THEN '#ffa500'
                            WHEN works.status = 4 THEN '#008000'
                       END AS status_color
                FROM works LEFT  JOIN works_type ON works.id_work_type = works_type.id 
                WHERE works.id_user = ${id_user}`;
    },
    "create": (work: IWorks) => {
        return `INSERT INTO works(id_work_type, id_user, id_client, description, message, has_participants, status, work_total_value, material_total_value, created_at) VALUE (${work.id_work_type}, ${work.id_user}, ${work.id_client}, '${work.description}', '${work.message}', ${work.has_participants}, ${work.status}, '${work.work_total_value}', '${work.material_total_value}', NOW())`;
    },
    "delete": (id_works: number) => {
        return `DELETE FROM works_type WHERE id = ${id_works}`
    },
    "countByStatus": (id_user: number) => {
        return `
        SELECT COUNT(w1.id) AS pending_count, 'Pendente' AS pending_description, COUNT(w2.id) AS ongoing_count, 'Andamento' AS ongoing_description, COUNT(w3.id) AS aproval_count, 'Aprovação' AS aproval_description, COUNT(w4.id) AS finished_count, 'Finalizadas' AS finished_description FROM works
            LEFT JOIN works w1 ON works.id = w1.id AND w1.status = 1
            LEFT JOIN works w2 ON works.id = w2.id AND w2.status = 2
            LEFT JOIN works w3 ON works.id = w3.id AND w3.status = 3
            LEFT JOIN works w4 ON works.id = w4.id AND w4.status = 4
        WHERE works.id_user = ${id_user}
            AND YEAR(works.created_at) = 2022 
        `;
    }
}