import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./EmployeeView.css";

const EmployeeView = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/get/${id}`).then((response) => {
      console.log(response.data[0]);
      setEmployee({
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

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="card">
        <div className="card-header">
          <p>Employee Details</p>
        </div>
        <div className="container">
          <strong>Employee ID  :    </strong>
          <span>{id}</span>
          <br />
          <br />

          <strong>Name  :    </strong>
          <span>{employee.name}</span>
          <br />
          <br />

          <strong>User Name  :    </strong>
          <span>{employee.username}</span>
          <br />
          <br />

          <strong>Email  :    </strong>
          <span>{employee.email}</span>
          <br />
          <br />

          <strong>Phone (+94)  :    </strong>
          <span>{employee.phone}</span>
          <br />
          <br />

          <strong>Employee Role  :    </strong>
          <span>{employee.emprole}</span>
          <br />
          <br />

          <strong>Basic Salary(LKR)  :    </strong>
          <span>{employee.basicsal}</span>
          <br />
          <br />

          <strong>OT Rate(H)  :    </strong>
          <span>{employee.otrate}</span>
          <br />
          <br />

          <Link to="/Pages/EmployeeManagement/EmployeeList">
            <div className="btn btn-outline-info">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;
