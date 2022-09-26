//patient dashboard
import "./list.scss"
import Sidebar from "../../components/PatientDashboard/sidebar/patientSidebar"
import Navbar from "../../components/PatientDashboard/navbar/Navbar"
import Datatable
 from "../../components/PatientDashboard/datatable/hospitaltable"
import {useState,useEffect} from 'react'
import React from 'react';
const List = () => {
  const [hospital,setHospital] = useState();

  useEffect(()=>{
    const getData = async()=>{
 const url =
  `http://localhost:8080/medsolve/v1/hospital/getAllhospital`;
 const resp = await fetch(url);
 const  data = resp.json();
 setHospital(data);
 console.log(data);
     }
     getData();
   },[props.id])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable hospital={hospital}/>
      </div>
    </div>
  )
}

export default List