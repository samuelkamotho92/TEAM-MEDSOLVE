import "./list.scss"
import Sidebar from "../../components/PatientDashboard/sidebar/Sidebar"
import Navbar from "../../components/PatientDashboard/navbar/Navbar"
import Datatable
 from "../../components/PatientDashboard/datatable/DoctorsdataTable"
import {useState,useEffect} from 'react';
const List = () => {
  const [doctors,setdoctors] = useState();
  useEffect(()=>{
      const getData = async()=>{
   const url = `http://localhost:8080/medsolve/v1/hospital/`;
   const resp = await fetch(url);
   const  data = resp.json();
   setdoctors(data);
   console.log(data);
       }
       getData();
     },[props.id])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable doctors={doctors}>
      </div>
    </div>
  )
}

export default List