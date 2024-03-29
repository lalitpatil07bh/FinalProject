import { useEffect ,useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AdminViewPatientsComp(){

    const[patients,setPatients]=useState([]);

    useEffect(()=>{

        fetch("http://localhost:8080/getAllPatients")
        .then(resp=>resp.json())                                //resp.json - this will return an object from json response
        .then((obj)=>{

            setPatients(obj);

        })       
    },[])

    const navigate=useNavigate();
    const setStorage=(e)=>{

        localStorage.setItem("viewId",e);
        
    }

    const deletePatient=(e)=>{
      
        fetch("http://localhost:8080/deleteByUId?user_id="+e)
        .then(resp=>resp.json())
        .then(obj=>  {    if(obj===true)
                        {
                            alert("Patient removed...");
                        }
                    
        })
    }


    return(
        <div>
            <h3 className="fon">Patients Information</h3>
            <br/>
            <form>
                <table className="table table-striped">
                    <thead>
                        <th>Patient ID</th>
                        <th>Name</th>
                        <th>BirthDate </th>
                        <th></th>
                    </thead>
                    <tbody>
                    {   
                        patients.map((patient)=>{
                            return <tr>
                                        <td>
                                            <p>{patient.patient_id}</p>
                                        </td>
                                        <td>
                                            <p> {patient.user_id.fname} {patient.user_id.lname}</p>
                                        </td>
                                        <td>
                                            <p>{patient.birthdate}</p>
                                        </td>
                                        <td>
                                            <button type="submit" className="btn btn-primary btn-lg ms-2" onMouseDown={()=>{setStorage(patient.patient_id)}}
                                                                                      onMouseUp={()=>{navigate("/adminhome/viewPatient")}}>View details</button>
                                            <button type="submit" className="btn btn-primary btn-lg ms-2" onClick={()=>{deletePatient(patient.user_id)}}>Remove</button>
                                        </td>
                                </tr>
                        })  
                    }
                    </tbody>
                </table>
             </form>
        </div>
    )
}