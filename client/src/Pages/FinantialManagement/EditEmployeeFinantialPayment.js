import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditEmployeeFinantialPayment() {
   
    const navigate = useNavigate();
    const { empID } = useParams();
    const [user, setUser] = useState({
      empName: "",
      empMobile: "", 
      basicSal: "", 
      otRate: "",
      otHrs: "",
      ot: "",
      totalSal: "",
    });
  
    const { empName,empMobile,basicSal,otRate,otHrs,ot,totalSal} = user;
  
    const AddEmployeeFinance = (e) => {
      e.preventDefault();
      
      Axios.put(`http://localhost:3001/updateEmployeePayment/${empID}`, {
        empName: empName,
        empMobile: empMobile,
        basicSal: basicSal,
        otRate: otRate,
        otHrs: otHrs,
        ot: ot,
        totalSal: totalSal,

      }).then(() => {
        console.log("success");
        toast.success("Employee Payment Updated Successfully");
        navigate("/Pages/FinantialManagement/EmployeeFinantialList");
      });
    };
  
    useEffect(() => {
      axios.get(`http://localhost:3001/getEmployee/${empID}`).then((response) => {
        console.log(response.data[0]);
        setUser({
          empName: response.data[0].empName,
          empMobile: response.data[0].empMobile,
          basicSal: response.data[0].basicSal,
          otRate: response.data[0].otRate,
          otHrs: response.data[0].otHrs,
          ot: response.data[0].ot,
          totalSal: response.data[0].totalSal,
        });
      });
    }, [empID]);
    
                                    //------------check the name  
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
              <a class="nav-item nav-link active" href="/Pages/FinantialManagement/EmployeeFinantialList">
                Finantial Management
              </a>
              <a class="nav-item nav-link active" href="#">
                Inventory Management
              </a>
            </div>
          </div>
        </nav>
  
        <div className="container-fluid">
          <div className="w-75 mx-auto shado p-5">
            <h2 className="text-center mb-4 m-3">Update Employee Finantial Details</h2>
            <form onSubmit={AddEmployeeFinance}>

              <div className="form-group m-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Employee Name"
                  name="empName"
                  value={empName || ""}
                  onChange={onChange}
                />
              </div>

              <div className="form-group m-2">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter Employee Mobile Number"
                  name="empMobile"
                  value={empMobile || ""}
                  onChange={onChange}
                />
              </div>
              <div className="form-group m-2">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter Employee Basic Salary"
                  name="basicSal"
                  value={basicSal || ""}
                  onChange={onChange}
                />
              </div>

              <div className="form-group m-2">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter Employee OT Rate"
                  name="otRate"
                  value={otRate || ""}
                  onChange={onChange}
                />
              </div>

              <div className="form-group m-2">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter Employee Ot Hours"
                  name="otHrs"
                  value={otHrs || ""}
                  onChange={onChange}
                />
              </div>

              <div className="form-group m-2">
                <input
                  type="Number"
                  className="form-control form-control-lg"
                  placeholder="Enter Employee Basic salery"
                  name="ot"
                  value={ot || ""}
                  onChange={onChange}
                />
              </div>
              <div className="form-group m-2">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter Employee Basic salary"
                  name="totalSal"
                  value={totalSal || ""}
                  onChange={onChange}
                />
              </div>
              <div class="AddEButton">
                <button className="btn btn-outline-info m-3">
                  {" "}
                  Update Employee Payment{" "}
                </button>
                <Link className="btn btn-outline-danger" to="/Pages/FinantialManagement/EmployeeFinantialList">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
