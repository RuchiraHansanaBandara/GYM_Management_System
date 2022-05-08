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



                                                //Finantial_Management_System

     //Employee finantial        

                 //insert Employee  Payments


            app.post("/createEmployeeFinance", (req, res) => {
              
              const empName = req.body.empName;
              const empMobile = req.body.empMobile;
              const basicSal = req.body.basicSal;
              const otRate = req.body.otRate;
              const otHrs = req.body.otHrs;
              const ot = req.body.ot;
              const totalSal = req.body.totalSal;
              db.query(
                
                "INSERT INTO employees (empName,empMobile,basicSal,otRate,otHrs,ot,totalSal) VALUES (?,?,?,?,?,?,?)",
                [empName,empMobile,basicSal,otRate,otHrs,ot,totalSal],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    res.send("valuves Inserted sucessfully!");
                  }
                }
              );
            });
            
                                 // fetch Employee Finantial List ------------------
         
         
            app.get("/EmployeeFinantialList", (req, res) => {
              const sqlSelect = "SELECT * FROM employees";
              db.query(sqlSelect, (err, result) => {
                res.send(result);
              });
            });
            
                                //Delete Employee finance -------------
            
            app.delete("/DeleteEmployeeFinance/:empID", (req, res) => {
              const { empID } = req.params;
              const sqlRemove = "DELETE FROM employees WHERE empID = ?";
              db.query(sqlRemove, empID, (error, result) => {
                if (error) { 
                  console.log(error);
                  return res.status(400).json({ message: "Error while deleting the Employee Payment Details" });
                }
                return res.status(200).json({ message: "succesfully deleted !" });
              });
            });
            
                               //Update Employee -----------------
            
            app.get("/getEmployee/:empID", (req, res) => {
              const { empID } = req.params;
              const sqlget = "SELECT * FROM employee WHERE empID = ?";
              db.query(sqlget, empID, (error, result) => {
                if (error) {
                  console.log(error);
                }
                res.send(result);
              });
            });
            
            app.put("/updateEmployeePayment/:empID", (req, res) => {
              const { empID } = req.params;
              const { empName,empMobile,basicSal,otRate,otHrs,ot,totalSal } = req.body;
              const sqlUpdate =
                "UPDATE employees SET empName = ? ,empMobile = ?,basicSal = ?,otRate = ?,otHrs = ?,ot = ?,totalSal = ? WHERE empID = ? ";
              db.query(
                sqlUpdate,
                [empName,empMobile,basicSal,otRate,otHrs,ot,totalSal],
                (error, result) => {
                  if (error) {
                    console.log(error);
                  }
                  res.send(result);
                }
              );
            });

app.listen(3001, () => {
  console.log("your server is running on port 3001");
});
