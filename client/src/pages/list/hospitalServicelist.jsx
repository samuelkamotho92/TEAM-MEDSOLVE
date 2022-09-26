import React from 'react';
import {useState,useEffect} from 'react';
import "./list.scss";
import Sidebar from "../../components/PatientDashboard/sidebar/Sidebar"
import Navbar from "../../components/PatientDashboard/navbar/Navbar"
import Datatable
 from "../../components/PatientDashboard/datatable/HealthServices"

const List = () => {
  const [services,setServices] = useState();
  useEffect(()=>{
    const getData = async()=>{
 const url = 
 `http://localhost:8080/medsolve/v1/services/getServices`;
 const resp = await fetch(url);
 const  data = resp.json();
 setServices(data);
 console.log(data);
     }
     getData();
   },[props.id])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable services={services}/>
      </div>
    </div>
  )
}

export default List