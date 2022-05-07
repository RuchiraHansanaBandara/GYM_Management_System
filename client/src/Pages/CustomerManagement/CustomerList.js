import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

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
              class="btn btn-outline-info m-2"
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

          <table class="table">
            <thead class="table table-striped table-dark">
              <tr>
                <th scope="col">User id</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Contact</th>
                <th scope="col">payment Method</th>
                <th scope="col">payment Amount(LKR)</th>
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
                        class="btn btn-outline-primary m-2"
                        to={`/Pages/CustomerManagement/CustomerView/${val.id}`}
                      >
                        View
                      </Link>
                      <Link
                        type="button"
                        class="btn btn-outline-warning m-2"
                        to={`/Pages/CustomerManagement/EditCustomer/${val.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        class="btn btn-outline-danger m-2"
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
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
