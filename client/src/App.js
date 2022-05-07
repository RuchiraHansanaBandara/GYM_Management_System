import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


//==============================employee management=====================================================
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./Pages/EmployeeManagement/AddEmployee";
import EmployeeList from "./Pages/EmployeeManagement/EmployeeList";
import EditEmployee from "./Pages/EmployeeManagement/EditEmployee";
import EmployeeView from "./Pages/EmployeeManagement/EmployeeView";
//==============================employee management=====================================================


///=================customer Function
import AddCustomer from "./Pages/CustomerManagement/AddCustomer";
import CustomerList from "./Pages/CustomerManagement/CustomerList";
import EditCustomer from "./Pages/CustomerManagement/EditCustomer";
import CustomerView from "./Pages/CustomerManagement/CustomerView";
import Home from "./Pages/Home";
///=========Custmer=========================

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    
    <Router>
      <ToastContainer position="top-center" />
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Pages/Home" element={<Home />} />
        <Route exact path="/AddEmployee" element={<AddEmployee />} />
        <Route exact path="/Pages/EmployeeManagement/EditEmployee/:id" element={<EditEmployee />} />
        <Route exact path="/Pages/EmployeeManagement/EmployeeList" element={<EmployeeList />} />
        <Route exact path="/Pages/EmployeeManagement/EmployeeView/:id" element={<EmployeeView />} />

        <Route exact path="/AddCustomer" element={<AddCustomer />} />
        <Route exact path="/Pages/CustomerManagement/EditCustomer/:id" element={<EditCustomer />} />
        <Route exact path="/Pages/CustomerManagement/CustomerList" element={<CustomerList />} />
        <Route exact path="/Pages/CustomerManagement/CustomerList/:id" element={<CustomerList />} />
        <Route exact path="/Pages/CustomerManagement/CustomerView/:id" element={<CustomerView />} />


      </Routes>
    </Router>
  );
}

export default App;
