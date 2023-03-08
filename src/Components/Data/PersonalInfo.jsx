
import React from "react"



const PersonalInfo=()=>{
  
    const goBack = () => {
        window.history.goBack();
      }


    return(
        <div className="container border border-dark " style={{width:"550px"}} >
        <form>
         <div className="row m-3">
            <div className="col-md-6">
  <label for="inputAddress" className="form-label">First name</label>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
    </div>
    <div className="col-md-6">
  <label for="inputAddress" className="form-label">Last name</label>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
    </div>
    <div className="row m-3">
    <div className="col-md-6">
  <label for="inputAddress" className="form-label">Email</label>
    <input type="text" className="form-control" placeholder="abc@xyz.com" aria-label="Email"/>
    </div>
    <div className="col-md-6">
  <label for="inputAddress" className="form-label">Mobile</label>
    <input type="text" className="form-control" placeholder="+91" aria-label="Mobile"/>
    </div>
    </div>
    <div className="row m-3">
    <div className="col-md-12">
  <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
 </div>
 </div>

 <div className="row m-3">
    <div className="col-md-6">
  <label for="inputAddress" className="form-label">City</label>
    <input type="text" className="form-control" placeholder="City" aria-label="City"/>
    </div>
    <div className="col-md-6">
  <label for="inputAddress" className="form-label">State</label>
    <input type="text" className="form-control" placeholder="State" aria-label="State"/>
    </div>
  </div>
  
  <div className="row m-3">
  <div className="col-md-6">
  <label for="inputAddress" className="form-label">PostalCode</label>
    <input type="text" className="form-control" placeholder="6533434" aria-label="PostalCode"/>
    </div>
    </div>

    <div className="row m-3">
    <div className="col-md-12">
  <label for="inputAddress" className="form-label">Objective</label>
    <input type="text" className="form-control" placeholder="Objective" aria-label="Objective"/>
    </div>
    </div>
<hr />
     
     
     
     
     <div className="row">    
    <button className="btn btn-light"onClick={goBack} >Back</button>
    <button className="btn btn-primary">Next</button>
    </div>
    
        </form>
        </div>
    )
}

export default PersonalInfo