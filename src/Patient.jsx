import React, { useState } from "react";
import axios from "axios";
function Patient(){
//wrapping all the details in the usestate or else you can use const[name,setname]=useState('')....for all items.
    const[patientData,setPatientsData]=useState(
        {name:'',weight:'',gender:'',age:'',disease:'',doctorId:null}
        )
        //to change the patientsdata value
        //e is a random argument
    const handleChange=(e)=>{
        //name,age,gender..... value-current value what you have entered in the input field by user
        //e.target-current value
        const{name,value}=e.target;
        //so updated value through e.target is updated and added by the spreadoperator (...)patientData
        setPatientsData({...patientData,[name]:value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();//submission behaviour is handled
        try{
            //POST ACTION
            const response=await axios.post('https://backendhospital-ji3g.onrender.com/patients');
            console.log('PATIENT DATA IS CReated :',response.data)

        }
        catch(error){
            console.log('error in creating patient details',error)
        }
    }
    return(
    <div>
    <h2>Register the Patient Details</h2>   
    <form onSubmit={handleSubmit}> 
        <label>Name :</label>
        <input type='text' name='name' value={patientData.name} onChange={handleChange}/>
        <label>Weight :</label>
        <input type='text' name='weight' value={patientData.weight} onChange={handleChange}/>
        <label>Gender :</label>
        <input type='text' name='gender' value={patientData.gender} onChange={handleChange}/>
        <label>Age :</label>
        <input type='text' name='age' value={patientData.age} onChange={handleChange}/>
        <label>Disease :</label>
        <input type='text' name='disease' value={patientData.disease} onChange={handleChange}/>
        <label>DoctorId:</label>
        <input type='text' name='doctorId' value={patientData.doctorId} onChange={handleChange}/>
        <button type='submit'>Submit Patient Info</button>
    </form>     



    
    </div>)
}
export default Patient;