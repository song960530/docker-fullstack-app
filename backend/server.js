// 필요한 모듈 가져오기
const exprerss = require("express");
const bodyParser = require("body-parser");

const db = require("./db")

// Express 서버 생성
const app = new exprerss();

// json 형태로 오는 요청의 body를 해석해줄수있게 등록
app.use(bodyParser.json());

// 테이블 생성하기
// db.pool.query('CREATE TABLE LISTS (ID INTEGER AUTO_INCREMENT,VALUE TEXT,PRIMARY KEY (id))', (err, results, fileds) => {
//     console.log("results", results);
// });


app.listen(5000, () => {
    console.log("애플리케이션이 5000번 포트에서 시작되었습니다.")
});

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣어주기
app.post("/api/value", function (req, res, next) {
    db.pool.query('INSERT INTO LISTS (VALUE) VALUES ("${req.body.value}");',
        (err, results, fields) => {
            if (err)
                return res.status(500).send(err);
            else
                return res.json({
                    success: true,
                    value: req.body.value
            })
        }
    )
});


// DB lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기
app.get("/api/values", function (req, res, next) {
    db.pool.query("SELECT * FROM LISTS;",
        (err, results, fields) => {
            if (err)
                return res.status(500).send(err);
            else
                return res.json(results);
        }
    )
});