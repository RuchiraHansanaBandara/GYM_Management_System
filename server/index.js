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


//Delete Employee -------------------------------------------------------------------------------------------------------

/*app.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM employee WHERE EmployeeID = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(400).json({ message: "Error while deleting the user" });
    }
    return res.status(200).json({ message: "succesfully deleted" });
  });
});*/

//Delet
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


//======================================================================customer Management
app.post("/createcustomer", (req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;
  const userName = req.body.userName;
  const email = req.body.email;
  const address = req.body.address;
  const contact = req.body.contact;
  const paymentMethod = req.body.paymentMethod;
  const paymentAmount = req.body.paymentAmount;
  db.query(
    "INSERT INTO Customer (name, gender, userName, email, address, contact, paymentMethod, paymentAmount) VALUES (?,?,?,?,?,?,?,?)",
    [name, gender, userName, email, address, contact, paymentMethod, paymentAmount],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("valuves Inserted");
      }
    }
  );
});

//Customer List -----------------------------------------------------------------------------------------------------------
app.get("/CustomerList", (req, res) => {
  const sqlSelect = "SELECT * FROM customer";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//Delete Customer -------------------------------------------------------------------------------------------------------

app.delete("/removecustomer/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM Customer WHERE id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(400).json({ message: "Error while deleting the user" });
    }
    return res.status(200).json({ message: "succesfully deleted" });
  });
});


//Delete Employee -------------------------------------------------------------------------------------------------------

/*app.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM employee WHERE EmployeeID = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(400).json({ message: "Error while deleting the user" });
    }
    return res.status(200).json({ message: "succesfully deleted" });
  });
});*/

//Delet
//Update Customer --------------------------------------------------------------------------------------------------------

app.get("/getcustomer/:id", (req, res) => {
  const { id } = req.params;
  const sqlget = "SELECT * FROM Customer WHERE id = ?";
  db.query(sqlget, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/updatecustomer/:id", (req, res) => {
  const { id } = req.params;
  const {name, gender, userName, email, address, contact, paymentMethod, paymentAmount } = req.body;
  const sqlUpdate =
    "UPDATE customer SET name = ?, gender = ?,  userName = ?, email = ?, address = ?, contact = ?, paymentMethod = ?, paymentAmount=? WHERE id = ? ";
  db.query(
    sqlUpdate,
    [name, gender, userName, email, address, contact, paymentMethod, paymentAmount, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );

  app.listen(3001, () => {
    console.log("yey your server is running on port 3001");
  });
});
