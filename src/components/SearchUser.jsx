import axios from 'axios'
import React, { useState } from 'react'

const SearchUser = () => {
    const [data, setdata] = useState(
        {
            "consumernumber": ""

        }

    )

const DeleteCourse = (id)=>{
    let input = { "_id": id }
    axios.post("http://localhost:8080/Deleteuser",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status == "deleted") {
                alert ("success fully delted")
                
            } else {
                alert("error")
                
            }
        }
    ).catch()

}

    const [result, setresult] = useState([])
        
    
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/Searchuser",data).then(
            (response)=>{
                setresult(response.data)
            
            }
        ).catch()
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form label">Search</label>
                                <input type="text" className="form-control" name='consumernumber' value={data.consumernumber} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readvalue}>Search</button>
                            </div>
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
                                                result.map(
                                                    (value, index) => {
                                                        return <tr>
                                                            <th scope="row">{value.consumernumber}</th>
                                                            <td>{value.name}</td>
                                                            <td>{value.email}</td>
                                                            <td>{value.mobile}</td>
                                                           
                                                            <td><button className="btn btn-danger" onClick={() => { DeleteCourse(value._id) }}>delete</button></td>
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
                </div>
            </div>
        </div>
    )
}

export default SearchUser