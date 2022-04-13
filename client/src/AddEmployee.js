import "./App.css";
import "./EmployeeList";
import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Link , useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

function AddEmployee() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emprole, setEmpRole] = useState("");
  const [basicsal, setBasicSal] = useState("");
  const [otrate, setOtRate] = useState("");

  const navigate = useNavigate();
  

  const addEmployee = (e) => {
    e.preventDefault();
    if (
      !name ||
      !username ||
      !email ||
      !phone ||
      !emprole ||
      !basicsal ||
      !otrate
    ) {
      toast.error("Please provide valuves into each input fields");
    } else {
      Axios.post("http://localhost:3001/create", {
        name: name,
        username: username,
        email: email,
        phone: phone,
        emprole: emprole,
        basicsal: basicsal,
        otrate: otrate,
      }).then(() => {
        console.log("success");
        toast.success("Employee Added Successfully");
        navigate("/EmployeeList")
      });
      
    
     
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="/">
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
            <a class="nav-item nav-link active" href="/">
              Home{" "}
            </a>
            <a class="nav-item nav-link active" href="/EmployeeList">
              Employee Management
            </a>
            <a class="nav-item nav-link active" href="#">
              Inventory Management
            </a>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="w-75 mx-auto shado p-5">
          <h2 className="text-center mb-4 m-3">Add Employee</h2>
          <form onSubmit={addEmployee}>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Employee Name"
                name="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Employee User Name"
                name="username"
                value={username}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Employee Email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Employee Telephone Number"
                name="phone"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Employee Role"
                name="emprole"
                value={emprole}
                onChange={(event) => {
                  setEmpRole(event.target.value);
                }}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="Number"
                className="form-control form-control-lg"
                placeholder="Enter Employee Basic salery"
                name="basicsal"
                value={basicsal}
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
                name="otrate"
                value={otrate}
                onChange={(event) => {
                  setOtRate(event.target.value);
                }}
              />
            </div>
            <div class="AddEButton">
              <button className="btn btn-outline-info m-3">
                {" "}
                Add Employee{" "}
              </button>
              <Link className="btn btn-outline-danger" to="/EmployeeList">
                Cancle
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
