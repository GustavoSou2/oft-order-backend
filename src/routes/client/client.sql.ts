import ClientModel from "@Config/types/client.interface";

export const ClientSQL = {
    "list": (id_user: number) => {
        return `SELECT * FROM client WHERE id_works_provider = ${id_user}`;
    },
    "create": (client: ClientModel) => {
        return `INSERT INTO client(name, phone, id_works_provider, created_at) VALUE ('${client.name}', '${client.phone}', ${client.id_works_provider}, NOW())`;
    },
    "delete": (id_works_type: number) => {
        return `DELETE FROM client WHERE id = ${id_works_type}`
    }
}