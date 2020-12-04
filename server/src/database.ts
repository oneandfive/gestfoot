import mysql from 'promise-mysql';
import keys from "./keys";

const pool = mysql.createPool(keys.database);

pool.getConnection().then(
    connection => {
        pool.releaseConnection(connection);
        console.log("DB is connect");
    },
    error => {
        console.log("Initialize server. Error connecting DB: ", error);
    }
);

export default pool;