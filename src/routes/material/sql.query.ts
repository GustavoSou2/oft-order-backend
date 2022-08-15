import IMaterial from "@Config/types/material.interface"

export const MaterialRoutingQueries = {
    "list": (idUser: number) => {
        return `SELECT * FROM material WHERE id_user = ${idUser}`
    },
    "create": (material: IMaterial) => {
        return `INSERT INTO material (description, code, value, id_user, created_at) 
                VALUES ('${material.description}', '${material.code}', '${material.value}', ${material.id_user},NOW());`;
    },
    "delete": (id_material: number) => {
        return `DELETE FROM material WHERE id = ${id_material}`;
    }
}