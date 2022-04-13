const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors');
const { application } = require('express');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'GYM_Management_System'
});

app.post('/create', (req, res) => {
    const name = req.body.name
    const username = req.body.username
    const email = req.body.email
    const phone = req.body.phone
    const emprole = req.body.emprole
    const basicsal = req.body.basicsal
    const otrate = req.body.otrate 

    db.query("INSERT INTO Employee (name, UserName, Email, Phone, EMPRole, BasicSal, OTRate) VALUES (?,?,?,?,?,?,?)",
        [name, username, email, phone, emprole, basicsal, otrate],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("valuves Inserted")
            }
        }
    );
});

app.get('/EmployeeList', (req, res)=> {
    const sqlSelect = "SELECT * FROM employee";
    db.query(sqlSelect, (err, result) =>{
        res.send(result);
    });
});


app.listen(3001, () => {
    console.log("yey your server is running on port 3001");
});