import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./Pages/EmployeeManagement/AddEmployee";
import EmployeeList from "./Pages/EmployeeManagement/EmployeeList";
import EditEmployee from "./Pages/EmployeeManagement/EditEmployee";
import EmployeeView from "./Pages/EmployeeManagement/EmployeeView";
import Home from "./Pages/Home";
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


      </Routes>
    </Router>
  );
}

export default App;
