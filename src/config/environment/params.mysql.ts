import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const MYSQL_USER = process.env.SERVER_ROOT || 'root';
const MYSQL_PASS = process.env.SERVER_PASS || 'admin..';
const MYSQL_DATABABLE = process.env.SERVER_DATABASE || 'orders';

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_POST || 3306;

const config = {
    mysql: {
        hostname: MYSQL_HOSTNAME,
        database: MYSQL_DATABABLE,
        user: MYSQL_USER,
        password: MYSQL_PASS
    },
    server: {
        hostname: SERVER_HOSTNAME,
        port: SERVER_PORT
    }
}


export default config;
