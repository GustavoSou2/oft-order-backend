// @ts-ignore
import { UserModel } from "@types/user.data";

const queries = {
    'getAllUsers': 'SELECT * FROM users',
    'findUser': (id: number) => {
        return `SELECT * FROM users WHERE id = ${id};`;
    },
    'sendUser': (user: any) => {
        return `INSERT INTO users (name, mail, password, work_description, company_description, company_cnpj, created_at) 
                VALUES ('${user.name}', '${user.mail}', md5('${user.password}'), '${user.description_work}', '${user.company_name}', '${user.cnpj}', NOW());`
    }
}

export default queries;

