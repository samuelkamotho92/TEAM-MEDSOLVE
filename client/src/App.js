import HospitalDashboard from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import DoctorsList from './pages/list/doctorList';
import HospitalList from './pages/list/hospitalReg';
import HospitalServicesList from './pages/list/hospitalServicelist';
import HealthReports from './pages/list/healthReports';
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import patientlogin from './components/Login';
import SignIn from "./components/Registration";
import ResetInSide from "./components/Resetpassword";
import SignInSide from "./components/Login";
import Newpassword from "./components/forgottenPassword";
import PatientDashboard from "./components/PatientDashboard/home/Home";
function App() {
  const { darkMode } = useContext(DarkModeContext);
return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={<Home />} /> */}
            <Route path="patientLogin" element={<SignInSide />}/>
            <Route path="patientRegistration" element={<SignIn/>}></Route>
            <Route path="patientPassreset" element={<ResetInSide />}></Route>
            <Route path="Newpassword" element={<Newpassword />}/>
            <Route path="login" element={<Login />} />
            <Route path="patientDashboard" element={<PatientDashboard />}/>
            <Route path="hospitalDashboard" element={<HospitalDashboard />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path='patientDetails' element={<List />}>
</Route>
<Route path='hospitalDetails' element={<HospitalList  />}>
</Route>
<Route path="healthReports" element={<HealthReports />}></Route>
<Route path="doctors" element={<DoctorsList />}></Route>
<Route path="hospitalServices" element={<HospitalServicesList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
