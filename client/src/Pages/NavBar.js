import React from 'react'

export default function NavBar() {
  return (

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/Pages/Home">
        Home{" "} 
      </a>

          <a class="nav-item nav-link active"
          href="/Pages/EmployeeManagement/EmployeeList">
            Employee Management
          </a>
 
          <a
          class="nav-item nav-link active"
          href="/Pages/FinantialManagement/EmployeeFinantialList">
          Finantial  Management  
        </a>

        <a class="nav-item nav-link active" href="#">
            Inventory Management
        </a>

          <a class="nav-item nav-link active" href="#">
            User Management
          </a>


    </div>
  </div>
  )
}
