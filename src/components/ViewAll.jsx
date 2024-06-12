import axios from 'axios'
import React, { useEffect, useState } from 'react'


    const ViewAll = () => {
        const [data,setdata] = useState([])
        const fetchdata=()=>{
            axios.get("http://localhost:8080/ViewAll").then(
                (response)=>{
                    setdata(response.data)
                    
                }
            ).catch().finally()
        }
    
    
           useEffect(()=>{fetchdata()},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">consumernumber</th>
                                    <th scope="col">name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">mobile</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.consumernumber}</th>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.mobile}</td>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll