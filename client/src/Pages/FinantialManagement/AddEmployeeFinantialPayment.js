import React from 'react'
import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from '../NavBar';

export default function AddEmployeeFinantialPayment() {

    const [empName, setEmpName] = useState("");
    const [empMobile, setEmpMobile] = useState("");
    const [basicSal, setBasicSal] = useState("");
    const [otRate, setOtRate] = useState("");
    const [otHrs, setOtHrs] = useState("");
    const [ot, setOt] = useState("");
    const [totalSal, setTotalSal] = useState("");
  
    const navigate = useNavigate();
  
    const AddEmployeeFinance = (e) => {
      e.preventDefault();
      if (
        !empName ||
        !empMobile ||
        !basicSal ||
        !otRate ||
        !otHrs ||
        !ot ||
        !totalSal
      ) {
        toast.error("Please provide valuves into each input fields");
      } else {
        Axios.post("http://localhost:3001/createEmployeeFinance", {
          empName: empName,
          empMobile: empMobile,
          basicSal: basicSal,
          otRate: otRate,
          otHrs: otHrs,
          ot: ot,
          totalSal: totalSal,
        }).then(() => {
          console.log("success");
          toast.success("Employee payment Added Successfully!");
          navigate("/Pages/FinantialManagement/EmployeeFinantialList");
        });
      }
    };

  return (
    <div>

    <NavBar/>

    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="/Pages/Home">
        MultiFit GYM
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/Pages/Home">
             Home  {" "}
          </a>
          <a
            class="nav-item nav-link active"
            href="/Pages/EmployeeManagement/EmployeeList"
          >
            Employee Management  
          </a>

          <a
            class="nav-item nav-link active"
            href="/Pages/FinantialManagement/EmployeeFinantialList"
          >
            Finantial  Management  
          </a>

          <a class="nav-item nav-link active" href="#">
            Inventory Management  
          </a>
          <a
            class="nav-item nav-link active"
            href="/Pages/FinantialManagement/EmployeeFinantialList"
          >
          </a>
        </div>
      </div>
    </nav>

    <div className="container-fluid">
      <div className="w-75 mx-auto shado p-5">
        <h2 className="text-center mb-4 m-3"> Employee Finantial Details</h2>
        <form onSubmit={AddEmployeeFinance}>

          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Employee Name"
              name="empName"
              value={empName}
              onChange={(event) => {
                setEmpName(event.target.value);
              }}
            />
          </div>

          <div className="form-group m-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Employee Mobile (+94)"
              name="empMobile"
              value={empMobile}
              onChange={(event) => {
                setEmpMobile(event.target.value);
              }}
            />
          </div>

          <div className="form-group m-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Employee BasicSalary"
              name="basicSal"
              value={basicSal}
              onChange={(event) => {
                setBasicSal(event.target.value);
              }}
            />
          </div>

          <div className="form-group m-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Employee OT Rate"
              name="otRate"
              value={otRate}
              onChange={(event) => {
                setOtRate(event.target.value);
              }}
            />
          </div>

          <div className="form-group m-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Employee OT Hours"
              name="otHrs"
              value={otHrs}
              onChange={(event) => {
                setOtHrs(event.target.value);
              }}
            />
          </div>

          <div className="form-group m-2">
            <input
              type="Number"
              className="form-control form-control-lg"
              placeholder="Enter Ot"
              name="ot"
              value={ot}
              onChange={(event) => {
                setOt(event.target.value);
              }}
            />
          </div>

          <div className="form-group m-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Employee Total Salary"
              name="totalSal"
              value={totalSal}
              onChange={(event) => {
                setTotalSal(event.target.value);
              }}
            />
          </div>

          <div class="AddEButton">
            <button className="btn btn-outline-info m-3">
              {" "}
              Add Employee Payment{" "}
            </button>
            <Link
              className="btn btn-outline-danger"
              to="/Pages/FinantialManagement/EmployeeFinantialList"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);
  
}
 
 