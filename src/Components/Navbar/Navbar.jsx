
import React from "react"



const Navbar=()=>{
 
return(
<nav
  className="navbar navbar-expand-lg bg-body-tertiary bg-light shadow-sm p-3 mb-5 bg-body-tertiary rounded rounded-bottom">
  <div className="container-fluid  ">
    <a className="navbar-brand " href="Resume">Resume builder</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item ">
          <a className="nav-link active fw-bold"  aria-current="page" href="Resume">Resume Templets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bold d-flex"    href="MyDocument">My Documents</a>
        </li>
        <li className="nav-item">

          <a className="nav-link active fw-bold " href="AboutUs">About Us</a>

        </li>
      </ul>
    </div>
  </div>
</nav>
)

}

export default Navbar