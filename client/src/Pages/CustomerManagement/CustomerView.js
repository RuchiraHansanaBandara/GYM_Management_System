import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./CustomerView.css";

const CustomerView = () => {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/getcustomer/${id}`).then((response) => {
      console.log(response.data[0]);
      setCustomer({
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

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="card">
        <div className="card-header">
          <p>Customer Details</p>
        </div>
        <div className="container">
          <strong>ID  :    </strong>
          <span>{id}</span>
          <br />
          <br />

          <strong>Name  :    </strong>
          <span>{customer.name}</span>
          <br />
          <br />

          <strong>Gender  :    </strong>
          <span>{customer.gender}</span>
          <br />
          <br />

          <strong>User Name  :    </strong>
          <span>{customer.userName}</span>
          <br />
          <br />

          <strong>email :    </strong>
          <span>{customer.email}</span>
          <br />
          <br />

          <strong>address  :    </strong>
          <span>{customer.address}</span>
          <br />
          <br />

          <strong>Contact (+94)  :    </strong>
          <span>{customer.contact}</span>
          <br />
          <br />

          <strong>Payment Methood  :    </strong>
          <span>{customer.paymentMethod}</span>
          <br />
          <br />

          <strong>payment Amount(LKR)  :    </strong>
          <span>{customer.paymentAmount}</span>
          <br />
          <br />
          <Link to="/Pages/CustomerManagement/CustomerList">
            <div className="btn btn-outline-info">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerView;