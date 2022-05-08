import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditCustomer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    gender: "",
    userName: "",
    email: "",
    address: "",
    contact: "",
    paymentMethod: "",
    paymentAmount: "",
  });

  const { name, gender, userName, email, address, contact, paymentMethod, paymentAmount } = user;

  const addCustomer = (e) => {
    e.preventDefault();
    
    Axios.put(`http://localhost:3001/updatecustomer/${id}`, {
      name: name,
      gender: gender,
      userName: userName,
      email: email,
      address: address,
      contact: contact,
      paymentMethod: paymentMethod,
      paymentAmount: paymentAmount,
    }).then(() => {
      console.log("success");
      toast.success("Customer Updated Successfully");
      navigate("/Pages/CustomerManagement/CustomerList");
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/getcustomer/${id}`).then((response) => {
      console.log(response.data[0]);
      setUser({
        name: response.data[0].name,
        gender: response.data[0].gender,
        userName: response.data[0].userName,
        email: response.data[0].email,
        address: response.data[0].address,
        contact: response.data[0].contact,
        paymentMethod: response.data[0].paymentMethod,
        paymentAmount: response.data[0].paymentAmount,
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
            <a class="nav-item nav-link active" href="/Pages/CustomerManagement/CustomerList">
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
          <h2 className="text-center mb-4 m-3">Update Customer</h2>
          <form onSubmit={addCustomer}>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Customer Name"
                name="name"
                value={name || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Customer User gender"
                name="gender"
                value={gender || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Custmer UserName"
                name="userName"
                value={userName || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Customer email"
                name="email"
                value={email || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Custmer address"
                name="address"
                value={address || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="Number"
                className="form-control form-control-lg"
                placeholder="Enter Customer contact Number"
                pattern="[0-9]{10}"
                name="contact"
                value={contact || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="Text"
                className="form-control form-control-lg"
                placeholder="Enter Customer Payment Method"
                name="paymentMethod"
                value={paymentMethod || ""}
                onChange={onChange}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="Text"
                className="form-control form-control-lg"
                placeholder="Enter Customer Payment Amount"
                name="paymentAmount"
                value={paymentAmount || ""}
                onChange={onChange}
              />
            </div>
            <div class="AddEButton">
              <button className="btn btn-primary">
                {" "}
                Update Customer{" "}
              </button>
              <Link className="btn btn-outline-danger" to="/Pages/CustomerManagement/CustomerList">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCustomer;
