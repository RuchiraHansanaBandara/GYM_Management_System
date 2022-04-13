import "./App.css";
import "./EmployeeList";
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    emprole: "",
    basicsal: "",
    otrate: "",
  });

  const { name, username, email, phone, emprole, basicsal, otrate } = user;

  const addEmployee = (e) => {
    e.preventDefault();
    // todo create update employee endpoint
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
      window.location.href = "/EmployeeList";
    });
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async (id) => {
    const result = await axios.get(`http://localhost:3001/create/${id}`);
    //todo get user by id
    setUser(result.data);
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
          <h2 className="text-center mb-4 m-3">Update Employee</h2>
          <form onSubmit={addEmployee}>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Employee Name"
                name="name"
                value={name}
                onChange={(event) => {
                  setUser(event.target.value);
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
                    setUser(event.target.value);
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
                    setUser(event.target.value);
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
                    setUser(event.target.value);
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
                    setUser(event.target.value);
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
                    setUser(event.target.value);
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
                    setUser(event.target.value);
                }}
              />
            </div>
            <div class="AddEButton">
              <button className="btn btn-outline-info m-3">
                {" "}
                Update Employee{" "}
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

export default EditEmployee;
