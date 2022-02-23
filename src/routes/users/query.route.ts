// @ts-ignore
import {IUser} from "@types/user.data";

const queries = {
    'getAllUsers': 'SELECT * FROM users',
    'findUser': (id: number) => {
        return `SELECT * FROM users WHERE id = ${id};`;
    },
    'sendUser': (user: IUser) => {
        return `INSERT INTO users (name, mail, pass, id_company, phone, date_create_at) 
                VALUES ('${user.username}', '${user.mail}', '${user.pass}', ${user.id_company}, '${user.phone}', NOW());`
    },
    'setUser': (user: IUser) => {
        return `
        UPDATE INTO users ()
        `;
    }

}

export default queries;

