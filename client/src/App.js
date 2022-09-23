import logo from './logo.svg';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Registrationpage from './components/Registration';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Resetpass from './components/Resetpassword';

function App() {
  return (
    <div className="App">
      {
    <Routes>
<Route path='/registration' 
element={<Registrationpage />}>
  Registration</Route>
<Route path='/patientDashboard' 
element={<Dashboard />}>
Patient Dashbord
</Route>
<Route path='/login' 
element={<Login />}>
</Route>
<Route path='/resetpassword' element={<Resetpass />}>
Resetpassword
</Route>
      </Routes>  
      }
      App page is working fine
    </div>
  );
}

export default App;
