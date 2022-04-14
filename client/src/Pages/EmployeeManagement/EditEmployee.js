import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditEmployee() {
  const navigate = useNavigate();
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
    
    Axios.put(`http://localhost:3001/update-employee/${id}`, {
      name: name,
      username: username,
      email: email,
      phone: phone,
      emprole: emprole,
      basicsal: basicsal,
      otrate: otrate,
    }).then(() => {
      console.log("success");
      toast.success("Employee Updated Successfully");
      navigate("/Pages/EmployeeManagement/EmployeeList");
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/get/${id}`).then((response) => {
      console.log(response.data[0]);
      setUser({
        name: response.data[0].Name,
        username: response.data[0].UserName,
        email: response.data[0].Email,
        phone: response.data[0].Phone,
        emprole: response.data[0].EMPRole,
        basicsal: response.data[0].BasicSal,
        otrate: response.data[0].OTRate,
      });
    });
  }, [id]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
              Home{" "}
            </a>
            <a class="nav-item nav-link active" href="/Pages/EmployeeManagement/EmployeeList">
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
                value={name || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Employee User Name"
                name="username"
                value={username || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Employee Email"
                name="email"
                value={email || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Employee Telephone Number"
                name="phone"
                value={phone || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Employee Role"
                name="emprole"
                value={emprole || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="Number"
                className="form-control form-control-lg"
                placeholder="Enter Employee Basic salery"
                name="basicsal"
                value={basicsal || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Employee OT Rate"
                name="otrate"
                value={otrate || ""}
                onChange={onChange}
              />
            </div>
            <div class="AddEButton">
              <button className="btn btn-outline-info m-3">
                {" "}
                Update Employee{" "}
              </button>
              <Link className="btn btn-outline-danger" to="/Pages/EmployeeManagement/EmployeeList">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
