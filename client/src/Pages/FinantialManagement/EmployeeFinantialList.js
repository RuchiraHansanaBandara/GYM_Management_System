import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function EmployeeFinantialList() {

  const [employeePaymentList, setEmployeePaymentList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterEmployeePayment, setFilterEmployeePayment] = useState([]);
  const doc = new jsPDF();

  useEffect(() => {
    Axios.get("http://localhost:3001/EmployeeFinantialList").then((Response) => {
      setEmployeePaymentList(Response.data);
      setFilterEmployeePayment(Response.data);
    });
  }, []);


  // Report genaration Part

  const genarateEmployeeFinantialReport = () => {
		doc.text('Employees Finantial Details of Multi fitness GYM', 10, 10);
		doc.autoTable({ html: '#my-table' });
		doc.autoTable({ theme: 'grid' });
		let array = [];
		employeePaymentList.map((f, idx) => {
			let item = [];
			item.push(idx + 1);
			item.push(f.empName);
			item.push(f.empMobile);
			item.push(f.basicSal);
			item.push(f.OTRate);
			item.push(f.otHrs);
			item.push(f.ot);
      item.push(f.totalSal);
			array.push(item);
			return item;
		});

		doc.autoTable({
			head: [
				['Index', 'Name', 'Mobile', 'Basic Salary', 'OT Rate', 'OT Hours', 'OT', 'Total Salary']
			],

			body: array
		});

		doc.save('EmployeesPaymentList.pdf');
	};


  //Search bar-------------------------------------------------------------------------------------

  useEffect(() => {
    console.log(employeePaymentList);
    const result = employeePaymentList.filter((employee) => {
      return (
        employee.empName.toLowerCase().match(search.toLowerCase()) ||
        employee.empID.toLowerCase().match(search.toLowerCase())
      );
    });
    setFilterEmployeePayment(result);
  }, [search]);

  //Delete Employee---------------------------------------------------------------------------------

  const deleteEmployeePayment = async (empID) => {
    if (
      window.confirm("Are you sure to Delete ?")
    ) {
      try {
        const res = await axios.delete(`http://localhost:3001/DeleteEmployeeFinance/${empID}`);
        if (res.status == 200) {
          const result = employeePaymentList.filter(
            (employee) => employee.EmployeeID != empID
          );
          toast.success("Employee Deleted Successfully");
          setFilterEmployeePayment(result);
        }
      } catch (error) {
        console.log(error);
      }
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
              Home{" "}
            </a>
            <a class="nav-item nav-link active"
             href="/Pages/EmployeeManagement/EmployeeList">
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
          </div>
        </div>
      </nav>


      <div className="container-fluid">
        <div className="py-4">
          <div className="topic">
            <h1>Employee Payment List</h1>
          </div>
          <div class="SearchBarDiv">
            <Link
              type="button"
              class="btn btn-outline-info m-2"
              to="/AddEmployeeFinantialPayment"
            >
              Add Employee Payments
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
                <th scope="col">Mobile(+94)</th>
                <th scope="col">Basic Salary</th>
                <th scope="col">OT Rate</th>
                <th scope="col">OT hours</th>
                <th scope="col">OT</th>
                <th scope="col">Total Salary</th>
                <th class="Action">Action</th>
              </tr>
            </thead>
            <tbody>
              {filterEmployeePayment.map((val, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{val.empName}</td>
                    <td>{val.empMobile}</td>
                    <td>{val.basicSal}</td>
                    <td>{val.otRate}</td>
                    <td>{val.otHrs}</td>
                    <td>{val.ot}</td>
                    <td>{val.totalSal}</td>
                    <td>

                      <Link
                        type="button"
                        class="btn btn-outline-primary m-2"
                        to={`/Pages/FinantialManagement/EmployeeFinantialView/${val.EmployeeID}`}
                      >
                        View
                      
                      </Link>
                      <Link
                        type="button"
                        class="btn btn-outline-warning m-2"
                        to={`/Pages/EmployeeManagement/EditEmployeeFinantialPayment/${val.EmployeeID}`}
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        class="btn btn-outline-danger m-2"
                        onClick={() => deleteEmployeePayment(val.EmployeeID)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
                        type="button"
                        class="btn btn-outline-success m-2"
                        onClick={ genarateEmployeeFinantialReport}
                      >
                        Genarate Report
                      </button>  
        </div>
      </div>
    </div>
  );
}

export default EmployeeFinantialList;
