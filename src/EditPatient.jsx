import React,{useState,useEffect} from "react";
import axios from "axios";//for https request
const EditPatient=({patientId,onClose,onUpdate})=>{
    const[patientData,setPatientData]=useState({});
    useEffect(()=>{
        //get to bring the patient details
        const fetchPatientData=async()=>{
            try{
                //based on the patient id,fetching the details from API where you have created in the patient.js component
                const response =await axios.get(`https://backendhospital-ji3g.onrender.com/patients${patientId}`);
            }
            catch(error){
                console.log('error in fetching data',error);
            }
        }
        fetchPatientData();
    },[patientId]);

    const handleUpdate=async()=>{
    try{
        //for updating the patient info axios.put
        await axios.put(`https://backendhospital-ji3g.onrender.com/patients${patientId}`,patientData);
        //props
        onClose();
        onUpdate();
    }
    catch(error){
        console.error('error updating patient info',error);
    }
    }
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setPatientData({...patientData,[name]:value});

    }
    return(
        <div>
           <h2>Edit Patient</h2> 
           <label>Name : </label>
           <input type='text' name='name' value={patientData.name || ''} onChange={handleChange}/>
           <button onClick={handleUpdate}></button>
            <button onClick={onClose}></button>
            
            <label>Weight : </label>
           <input type='text' name='name' value={patientData.weight || ''} onChange={handleChange}/>
           <button onClick={handleUpdate}></button>
            <button onClick={onClose}></button>

            <label>Gender : </label>
           <input type='text' name='name' value={patientData.gender || ''} onChange={handleChange}/>
           <button onClick={handleUpdate}></button>
            <button onClick={onClose}></button>

            <label>Age : </label>
           <input type='text' name='name' value={patientData.age || ''} onChange={handleChange}/>
           <button onClick={handleUpdate}></button>
            <button onClick={onClose}></button>

            <label>Disease : </label>
           <input type='text' name='name' value={patientData.disease || ''} onChange={handleChange}/>
           <button onClick={handleUpdate}></button>
            <button onClick={onClose}></button>


        </div>
    )
}
export default EditPatient;