const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "mysql", // docker-compose에서 사용하는 서비스 이름
    user: "test",
    password: "test",
    database: "myapp"
});

exports.pool = pool;