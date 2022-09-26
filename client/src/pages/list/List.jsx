import React from 'react';
import {useEffect,useState} from 'react';
import "./list.scss";
import Sidebar from "../../components/PatientDashboard/sidebar/Sidebar"
import Navbar from "../../components/PatientDashboard/navbar/Navbar"
import Datatable
 from "../../components/PatientDashboard/datatable/Datatable"
 //do a simple fect from the database to get the patient details

const List = (props) => {
  const [patientValue,setpatientValue] = useState();
  useEffect(()=>{
   const getData = async()=>{
      const url = 
      `http://localhost:8080/medsolve/v1/patient/getAllpatient`;
      const resp = await fetch(url);
const  data = resp.json();
setpatientValue(data);
console.log(data);
    }
    getData();
  },[props.id])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable patientValue={patientValue}/>
      </div>
    </div>
  )
}

export default List