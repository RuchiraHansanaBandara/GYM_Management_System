import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./Pages/EmployeeManagement/AddEmployee";
import EmployeeList from "./Pages/EmployeeManagement/EmployeeList";
import EditEmployee from "./Pages/EmployeeManagement/EditEmployee";
import EmployeeView from "./Pages/EmployeeManagement/EmployeeView";

import AddEmployeeFinantialPayment from "./Pages/FinantialManagement/AddEmployeeFinantialPayment";
import EmployeeFinantialList from "./Pages/FinantialManagement/EmployeeFinantialList";
import EditEmployeeFinantialPayment from "./Pages/FinantialManagement/EditEmployeeFinantialPayment";
import EmployeeFinantialView from "./Pages/FinantialManagement/EmployeeFinantialView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";

export default function App() {
  
  return (


    <div>

          <NavBar/>
            
          <Router>
            <ToastContainer position="top-center" />
            <Routes>
              
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Pages/Home" element={<Home />} />
              <Route exact path="/AddEmployee" element={<AddEmployee />} />
              <Route exact path="/Pages/EmployeeManagement/EditEmployee/:id" element={<EditEmployee />} />
              <Route exact path="/Pages/EmployeeManagement/EmployeeList" element={<EmployeeList />} />
              <Route exact path="/Pages/EmployeeManagement/EmployeeView/:id" element={<EmployeeView />} />

              <Route exact path="/Pages/FinantialManagement/AddEmployeeFinantialPayment" element={<AddEmployeeFinantialPayment />} />
              <Route exact path="/Pages/FinantialManagement/EmployeeFinantialList" element={<EmployeeFinantialList />} />
              <Route exact path="/Pages/FinantialManagement/EditEmployeeFinantialPayment/:id" element={<EditEmployeeFinantialPayment />} />
              <Route exact path="/Pages/FinantialManagement/EmployeeFinantialView/:id" element={<EmployeeFinantialView />} />



            </Routes>
          </Router> 
      
      
    </div>
  )    
  }
