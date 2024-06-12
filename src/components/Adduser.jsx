import axios from 'axios'
import React, { useState } from 'react'

const Adduser = () => {
    const [data,setdata] = useState(
        [
        
            {
                "consumernumber":"",
                "name":"",
                "email":"",
                "mobile":""
        
        
        
        
            }
        ]
        
    )
    const inputhandler=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
        const readvalue=()=>{
            axios.post("http://localhost:8080/Adduser",data) .then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("successful")
                    } else {
                        alert("error")
                        
                    }
                    
                }

            ).catch()
            
            
        }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">consumernumber</label>
                            <input type="text" className="form-control" name='consumernumber' value={data.consumernumber} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">email</label>
                             <input type="email" name="email" id="" className="form-control" value={data.email}  onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">mobile</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Adduser