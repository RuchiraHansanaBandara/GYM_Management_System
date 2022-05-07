import React from "react";

function Home() {
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
            <a
              class="nav-item nav-link active"
              href="/Pages/EmployeeManagement/EmployeeList"
            >
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
    </div>
  );
}

export default Home;
