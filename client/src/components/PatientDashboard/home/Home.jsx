import Sidebar from "../../PatientDashboard/sidebar/patientSidebar";
import Navbar from "../../PatientDashboard/navbar/Navbar";
import "./home.scss";
import Widget from "../../PatientDashboard/widget/Widget";
import Featured from "../../PatientDashboard/featured/Featured";
import Chart from "../../PatientDashboard/chart/Chart";
import Table from "../../PatientDashboard/table/Table";

const PatientDashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="(Regesterd patient)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Hospitals Near You</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
