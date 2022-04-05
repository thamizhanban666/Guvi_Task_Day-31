import React from 'react'
import { Link }  from "react-router-dom";

function SideBar() {
  return (
   //  <!-- Sidebar -->
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">ADMIN DASHBOARD</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                MANAGEMENT
            </div>

            {/* <!-- Nav Item - Teachers --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/teachers">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Teachers</span></Link>
            </li>
            {/* <!-- Nav Item - Students --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/students">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Students</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id={"sidebarToggle"}></button>
            </div>

        </ul>
      //   <!-- End of Sidebar --> 
  )
}

export default SideBar;