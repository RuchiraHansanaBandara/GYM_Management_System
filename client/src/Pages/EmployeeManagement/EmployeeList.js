import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function EmployeeList() {
  console.log("EMP LIST")
  const [EmployeeList, setEmployeelist] = useState([]);
  const [search, setSearch] = useState("");
  const [filterEmployee, setFilterEmployee] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/EmployeeList").then((Response) => {
      setEmployeelist(Response.data);
      setFilterEmployee(Response.data);
    });
  }, []);

  //Search bar-------------------------------------------------------------------------------------

  useEffect(() => {
    console.log(EmployeeList);
    const result = EmployeeList.filter((employee) => {
      return (
        employee.Name.toLowerCase().match(search.toLowerCase()) ||
        employee.Email.toLowerCase().match(search.toLowerCase())
      );
    });
    setFilterEmployee(result);
  }, [search]);

  //Delete Employee---------------------------------------------------------------------------------

  const deleteEmployee = async (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that Employee ?")
    ) {
      try {
        const res = await axios.delete(`http://localhost:3001/remove/${id}`);
        if (res.status == 200) {
          const result = EmployeeList.filter(
            (employee) => employee.EmployeeID != id
          );
          toast.success("Employee Deleted Successfully");
          setFilterEmployee(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
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
        <div className="py-4">
          <div className="topic">
            <h1>Employee List</h1>
          </div>
          <div class="SearchBarDiv">
            <Link
              type="button"
              class="btn btn-outline-info m-2"
              to="/AddEmployee"
            >
              Add Employee
            </Link>

            <input
              type="search"
              class="forms-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <table class="table">
            <thead class="table table-striped table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">EMP Role</th>
                <th scope="col">Basic SAL</th>
                <th scope="col">OT Rate</th>
                <th class="Action">Action</th>
              </tr>
            </thead>
            <tbody>
              {filterEmployee.map((val, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{val.Name}</td>
                    <td>{val.UserName}</td>
                    <td>{val.Email}</td>
                    <td>{val.Phone}</td>
                    <td>{val.EMPRole}</td>
                    <td>{val.BasicSal}</td>
                    <td>{val.OTRate}</td>
                    <td>
                      <Link
                        type="button"
                        class="btn btn-outline-primary m-2"
                        to={`/Pages/EmployeeManagement/EmployeeView/${val.EmployeeID}`}
                      >
                        View
                      </Link>
                      <Link
                        type="button"
                        class="btn btn-outline-warning m-2"
                        to={`/Pages/EmployeeManagement/EditEmployee/${val.EmployeeID}`}
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        class="btn btn-outline-danger m-2"
                        onClick={() => deleteEmployee(val.EmployeeID)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
