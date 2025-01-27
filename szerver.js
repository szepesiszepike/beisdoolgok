const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql")
const bodyparser = require("body-parser")
app.use(bodyparser.json())
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  port: 3306,
  password: "",
  database: "kozutak",
});

app.get("/", (req, res) => {
    res.send("fut a backend");
})
app.get("/regiok", (req,res) => {
  const sql = "SELECT * From `regiok`"
  db.query(sql, (err, result)=>{
    if (err) return res.json(err);
    return res.json(result)
  })
})
app.get ("/alfold, ")

app.delete("/torles/:id", (req, res) => {
  const sql = "DELETE FROM regiok WHERE `regiok`.`Rid` = ?"
  db.query(sql, [req.params.id], (err,result)=>{
      if (err) return res.json(err)
      return res.json(result)
  })
})

app.listen(3001, () => {
    console.log("szerver is running on port 3001")
})