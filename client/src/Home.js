import './App.css';
import './EmployeeList';
import React from "react";
import { useState } from "react";
import Axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {

   


   
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                    <a class="navbar-brand" href="/">MultiFit GYM</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="/">Home </a>
                            <a class="nav-item nav-link active" href="/EmployeeList">Employee Management</a>
                            <a class="nav-item nav-link active" href="#">Inventory Management</a>
                        </div>
                    </div>
                </nav>

            
        </div>

    );
}

export default Home;