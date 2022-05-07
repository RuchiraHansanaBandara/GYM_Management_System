import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddCustomer() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");


  const navigate = useNavigate();

  const addCustomer = (e) => {
    e.preventDefault();
    if (
      !name ||
      !gender ||
      !userName ||
      !email ||
      !address ||
      !contact ||
      !paymentMethod ||
      !paymentAmount
    ) {
      toast.error("Please provide valuves into each input fields");
    } else {
      Axios.post("http://localhost:3001/createcustomer", {
        name: name,
        gender:gender,
        userName: userName,
        email: email,
        address: address,
        contact: contact,
        paymentMethod: paymentMethod,
        paymentAmount: paymentAmount,
      }).then(() => {
        console.log("success");
        toast.success("Customer Added Successfully");
        navigate("/Pages/CustomerManagement/CustomerList");
      });
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
               Home  {" "}
            </a>
            <a
              class="nav-item nav-link active"
              href="/Pages/CustomerManagement/CustomerList"
            >
              Employee Management  
            </a>
            <a class="nav-item nav-link active" href="#">
              Inventory Management  
            </a>
            <a class="nav-item nav-link active" href="#">
              Customer Management  
            </a>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="w-75 mx-auto shado p-5">
          <h2 className="text-center mb-4 m-3">Add Customer</h2>
          <form onSubmit={addCustomer}>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Cutomer Name"
                name="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="form-group m-2">
              <input type="text"
                className="form-control form-control-lg"
                placeholder="Enter customer gender"
                name="gender"
                value={gender}
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Customer User Name"
                name="userName"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </div>

            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Customer Email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Customer Address"
                name="address"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Customer Telephone Number (+94)"
                name="Contact"
                value={contact}
                onChange={(event) => {
                  setContact(event.target.value);
                }}
              />
            </div>

            <div className="form-group m-2">
              <input
                type="select"
                className="form-control form-control-lg"
                placeholder="Select payment method"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(event) => {
                  setPaymentMethod(event.target.value);
                }}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Payment Amount(LKR)"
                name="PaymentAmount"
                value={paymentAmount}
                onChange={(event) => {
                  setPaymentAmount(event.target.value);
                }}
              />
            </div>
            <div class="AddEButton" >
              <button color="blue" className="btn btn-outline-info m-3">
                {" "}
                Add Customer{" "}
              </button>
              <Link
                className="btn btn-outline-danger"
                to="/Pages/CustomerManagement/CustomerList"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
