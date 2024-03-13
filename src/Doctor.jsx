import React,{useState,useEffect} from "react";
import axios from "axios";  //this library is used to make HTTP requests like 'CRUD'

function Doctor(){
    const[doctors,setDoctors]=useState([]);
    
    //mount phase in functional components useEffect after 
    //component rendering the doctor details are rendered
    useEffect(()=>{
        //get action by axios
        const fetchDoctors=async ()=>{
            try{
                //here,we are bringing the doctors details like name,age,specialization,gender,salary...

                const response=await axios.get('https://backendhospital-ji3g.onrender.com/doctors');
                //initially in  the doctors there are no details...
                setDoctors(response.data);
                //the doctors details are bought in the UI (get or retrieved information)
            }
            catch(error){
                alert('error in fetching the doctors :', error)
            }
        }
        fetchDoctors();//calling the function

    },[]) //mount based on dependency


    return(
        <div>
            <center>
                <h2>Doctors</h2>
               { 
               //mapping the doctors details
               doctors.map((my)=>(
                    <div key={my.id}>
                    <p><strong>{my.name}</strong>
                    -{my.specialization}</p>
                    <p>Doctor Id: {my.id}</p>
                    </div>
                ))
               }
            </center>
        
        </div>
               
    )
}

export default Doctor;