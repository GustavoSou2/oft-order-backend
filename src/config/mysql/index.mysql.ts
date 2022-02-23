import paramsMysql from "../environment/params.mysql";
import mysql from 'mysql';
import queryRoute from "@routes_costumer/users/query.route";

const params = {
    user: paramsMysql.mysql.user,
    password: paramsMysql.mysql.password,
    host: paramsMysql.mysql.hostname,
    database: paramsMysql.mysql.database
}

const Connection = async () => new Promise<mysql.Connection>((resolve, reject) => {
    const conn = mysql.createConnection(params)

    conn.connect((err) => {
        if (err) {
            reject(err);
            return;
        }

        resolve(conn);
    })
})

const Query = async (conn: mysql.Connection, sql: string) => new Promise((resolve, reject) => {
    conn.query(sql, conn, (err, res) => {
        if (err) {
            reject(err);
            return
        }

        resolve(res);
    })
})


export { Connection, Query }