import "./list.scss"
import Sidebar from "../../components/PatientDashboard/sidebar/patientSidebar"
import Navbar from "../../components/PatientDashboard/navbar/Navbar"
import Datatable
 from "../../components/PatientDashboard/datatable/HealthReport";
import {useState,useEffect} from 'react';
const List = () => {
  const [reports,setreports] = useState();
useEffect(()=>{
    const getData = async()=>{
 const url = ``;
 const resp = await fetch(url);
 const  data = resp.json();
 setreports(data);
 console.log(data);
     }
     getData();
   },[props.id])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable reports={reports}/>
      </div>
    </div>
  )
}

export default List