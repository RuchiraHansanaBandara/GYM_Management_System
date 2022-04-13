const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { application } = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "GYM_Management_System",
});
// ===================================================================== ============================ Employee management ============================= =====================================================================
// ===================================================================== ============================ Employee management ============================= =====================================================================
// ===================================================================== ============================ Employee management ============================= =====================================================================
//Insert Employeee --------------------------------------------------------------------------
app.post("/create", (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone;
  const emprole = req.body.emprole;
  const basicsal = req.body.basicsal;
  const otrate = req.body.otrate;
  db.query(
    "INSERT INTO Employee (name, UserName, Email, Phone, EMPRole, BasicSal, OTRate) VALUES (?,?,?,?,?,?,?)",
    [name, username, email, phone, emprole, basicsal, otrate],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("valuves Inserted");
      }
    }
  );
});

//Employee List -----------------------------------------------------------------------------------------------------------
app.get("/EmployeeList", (req, res) => {
  const sqlSelect = "SELECT * FROM employee";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//Delete Employee -------------------------------------------------------------------------------------------------------

app.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM employee WHERE EmployeeID = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(400).json({ message: "Error while deleting the user" });
    }
    return res.status(200).json({ message: "succesfully deleted" });
  });
});

//Update Employee --------------------------------------------------------------------------------------------------------

app.get("/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlget = "SELECT * FROM employee WHERE EmployeeID = ?";
  db.query(sqlget, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/update-employee/:id", (req, res) => {
  const { id } = req.params;
  const { name, username, email, phone, emprole, basicsal, otrate } = req.body;
  const sqlUpdate =
    "UPDATE employee SET name = ?, username = ?,  email = ?, phone = ?, emprole = ?, basicsal = ?, otrate = ? WHERE EmployeeID = ? ";
  db.query(
    sqlUpdate,
    [name, username, email, phone, emprole, basicsal, otrate, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});
// ===================================================================== ============================ Employee management ============================= =====================================================================
// ===================================================================== ============================ Employee management ============================= =====================================================================
// ===================================================================== ============================ Employee management ============================= =====================================================================
app.listen(3001, () => {
  console.log("yey your server is running on port 3001");
});
