import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./EmployeeFinantialView.css";


export default function EmployeeFinantialView() {
    const [employeeFinance, setEmployeeFinance] = useState({});
    const { empID } = useParams();
  
    useEffect(() => {
      axios.get(`http://localhost:3001/getEmployee/${empID}`).then((response) => {
        console.log(response.data[0]);
        setEmployeeFinance({
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
  
    return (

        <div>

        <NavBar/>

      <div style={{ marginTop: "100px" }}>
        <div className="card">
          <div className="card-header">
            <p>Employee Details</p>
          </div>

          <div className="container">
            <strong>Employee ID  :    </strong>
            <span>{empID}</span>
            <br />
            <br />
  
            <strong>Employee Name  :    </strong>
            <span>{employeeFinance.empName}</span>
            <br />
            <br />
  
            <strong>Employee Mobile  :    </strong>
            <span>{employeeFinance.empMobile}</span>
            <br />
            <br />
  
            <strong>Basic Salary :    </strong>
            <span>{employeeFinance.basicSal}</span>
            <br />
            <br />
  
            <strong>OT Rate :    </strong>
            <span>{employeeFinance.otRate}</span>
            <br />
            <br />
  
            <strong>OT Hours  :    </strong>
            <span>{employeeFinance.otHrs}</span>
            <br />
            <br />
  
            <strong>OT  :    </strong>
            <span>{employeeFinance.ot}</span>
            <br />
            <br />
  
            <strong>Total Salary  :    </strong>
            <span>{employeeFinance.totalSal}</span>
            <br />
            <br />
  
            <Link to="/Pages/FinantialManagement/EmployeePaymentList">
              <div className="btn btn-outline-info">Go  Back</div>
            </Link>
          </div>
        </div>
      </div>
        </div>


    );
  }
  