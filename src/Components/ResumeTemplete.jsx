const ResumeTemplete=()=>{
return(
<div className="container">
    <div className="container">
        <div className="text-start">
            <h3>Templates</h3>
            <h6>Select a template to get started</h6>
           </div>
           </div>

<div className="row">
<div className="col-md-3  ">
                    <div className="card text-center" style={{width:"18rem",height: "523px"}}>
                       {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                         <div className="card-body tile tile:hover" style={{paddingTop:'250px'}}>
                           <a href="Template1" className="btn btn-primary" >Use Templets</a>
                        </div>
                    </div>
          </div>

          <div className="col-md-3  ">
                    <div className="card" style={{width:"18rem",height: "523px"}}>
                       {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                         <div className="card-body tile tile:hover" style={{paddingTop:'250px'}}>
                           <a href="Template2" className="btn btn-primary">Use Templets</a>
                        </div>
                    </div>
          </div>

          <div className="col-md-3  ">
                    <div className="card" style={{width:"18rem",height: "523px"}}>
                       {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                         <div className="card-body tile tile:hover " style={{paddingTop:'250px'}}>
                           <a href="Template3" className="btn btn-primary">Use Templets</a>
                        </div>
                    </div>
          </div>

          <div className="col-md-3  ">
                    <div className="card" style={{width:"18rem",height: "523px"}}>
                       {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                         <div className="card-body tile tile:hover" style={{paddingTop:'250px'}}>
                           <a href="Template4" className="btn btn-primary">Use Templets</a>
                        </div>
                    </div>
          </div>
</div>
</div>
)
}
export default ResumeTemplete