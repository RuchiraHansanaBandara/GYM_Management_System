import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";
import EditEmployee from "./EditEmployee";
import EmployeeView from "./EmployeeView";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    
    <Router>
      <ToastContainer position="top-center" />
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AddEmployee" element={<AddEmployee />} />
        <Route exact path="/EditEmployee/:id" element={<EditEmployee />} />
        <Route exact path="/EmployeeList" element={<EmployeeList />} />
        <Route exact path="/EmployeeView" element={<EmployeeView />} />
      </Routes>
    </Router>
  );
}

export default App;
