
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DarkModeContex} from '../../context/darkModeContext'
// const logoutPatient = async()=>{
//   const nav = useNavigate
// console.log('patient logged out');
// const url = `http://localhost:8080/medsolve/v1/patient/patientLogout`;
// const resp = await fetch(url)
//  const data = await resp.json();
// console.log(data);
// if(data.status === "success"){
//   alert(`${data.message}`);
//   nav(`/${data.redirect}`)
// }else{
//   console.log(data.err);
// }

// }
export const mainListItems = (
    const { dispatch } = useContext(DarkModeContext);
  <>
  <Link to="/patientDashbaord" style={{ textDecoration: "none" }}>
  <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  </Link>
  <Link to='/profile' style={{ textDecoration: "none" }}>
  <ListItemButton>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
  </Link>
<Link to='/reports' style={{ textDecoration: "none" }}>
<ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
</Link>
    <ListItemButton> 
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout"  />
    </ListItemButton>
    <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
  </>
);

export const secondaryListItems = (
  <React.Fragment>
</React.Fragment>
);x