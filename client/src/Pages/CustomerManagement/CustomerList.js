import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';

function CustomerList() {
  console.log("CUST LIST")
  const [CustomerList, setCustomerlist] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCustomer, setFilterCustomer] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/CustomerList").then((Response) => {
      setCustomerlist(Response.data);
      setFilterCustomer(Response.data);
    });
  }, []);

  //Search bar-------------------------------------------------------------------------------------

  useEffect(() => {
    console.log(CustomerList);
    const result = CustomerList.filter((Customer) => {
      return (
        Customer.Name.toLowerCase().match(search.toLowerCase()) ||
        Customer.Email.toLowerCase().match(search.toLowerCase())
      );
    });
    setFilterCustomer(result);
  }, [search]);

  //Delete Customer---------------------------------------------------------------------------------

  const deleteCustomer = async (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that Customer ?")
    ) {
      try {
        const res = await axios.delete(`http://localhost:3001/removecustomer/${id}`);
        if (res.status == 200) {
          const result = CustomerList.filter(
            (Customer) => Customer.id != id
          );
          toast.success("Customer Deleted Successfully");
          setFilterCustomer(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const pdf1 = () => {
    const loading = document.getElementById('loading');
    loading.style.display = "";//display loading icon
    const dwnIcon = document.getElementById('dwn-icon');
    dwnIcon.style.display = "none";//hide download icn

    setTimeout(() => {  
        loading.style.display = "none";
        dwnIcon.style.display = "";
    }, 1300);//display loading icon for 2 seconds  

    let bodyData = [];
    for(let i = 0;CustomerList.length > i ; i++){
        bodyData.push([CustomerList[i].name,
                       CustomerList[i].gender,
                       CustomerList[i].userName,
                       CustomerList[i].email,
                       CustomerList[i].address,
                       CustomerList[i].contact,
                       CustomerList[i].paymentMethod,
                       CustomerList[i].paymentAmount,                      ]);
    }//save json data to bodydata in order to print in the pdf table
    //pdf genarate
    const doc = new jsPDF({orientation:"portrait"});
    var time = new Date().toLocaleString();
    doc.setFontSize(20);
    doc.text(`Customer List Report`, 105, 13, null, null, "center");
    doc.setFontSize(10);
    doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
    doc.setFontSize(12);
    
    
    doc.autoTable({
        theme : 'grid',
        styles: {halign:'center'},
        headStyles:{fillColor:[71, 201, 76]},
        startY:27,
        head: [['Customer Name',
                'Gender',
                'User Name',
                'Email',
                'Adress',
                'Contact',
                'payment Method',
                'payment Amount']],
        body: bodyData
    })
    doc.save('Customer.pdf');
}










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
            <a class="nav-item nav-link active" href="/Pages/CustomerManagement/CustomerList">
              Customer Management
            </a>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="py-4">
          <div className="topic">
            <h1>Customer List</h1>
          </div>
          <div class="SearchBarDiv">
            <Link
              type="button"
              class="btn btn-info"
              to="/AddCustomer"
              
            >
              Add Customer
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
          
          <table class="table table-striped">
            <thead class="table-Info">
              <tr >
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Contact</th>
                <th scope="col">payment Method</th>
                <th scope="col">payment Amt(LKR)</th>
                <th class="Action">Action</th>
              </tr>
            </thead>
            
            <tbody>
              {filterCustomer.map((val, index) => {
                return (
                  <tr>
                    
                    <th scope="row">{index + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.gender}</td>
                    <td>{val.userName}</td>
                    <td>{val.email}</td>
                    <td>{val.address}</td>
                    <td>{val.contact}</td>
                    <td>{val.paymentMethod}</td>
                    <td>{val.paymentAmount}</td>
                    <td>
                      <Link
                        type="button"
                        class="btn btn-primary"
                        to={`/Pages/CustomerManagement/CustomerView/${val.id}`}
                      >
                        View
                      </Link>
                      <Link
                        type="button"
                        class="btn btn-success"
                        to={`/Pages/CustomerManagement/EditCustomer/${val.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => deleteCustomer(val.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button onClick={pdf1} className="downloadPlaylist"><svg id="dwn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
          <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
          </svg><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{display:'none'}}></span> Download Customer List</button>
   
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
//<th scope="row">{index + 1}</th>