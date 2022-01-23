const mysql = require("mysql");
// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: "mysql", // docker-compose에서 사용하는 서비스 이름
//     user: "root",
//     password: "test",
//     database: "myapp"
// });

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST, // docker-compose에서 사용하는 서비스 이름
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});

exports.pool = pool;