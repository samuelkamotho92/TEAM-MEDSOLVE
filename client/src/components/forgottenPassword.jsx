import * as React from 'react';
import {useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Team Medsolve
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Newpassword() {
  const nav = useNavigate();
const [password,setpassword] = useState('');
const [passwordConfirm,setpasswordConfirm] = useState('');
const [token,setToken] = useState('');
useEffect(()=>{
const getToken = ()=>{
const tk = localStorage.getItem("Reset token");
setToken(tk);
}
getToken();
},[])
const handleSubmit = async(event) => {
    //get token from the email
event.preventDefault();
    setpassword('');
    setpasswordConfirm('');
 const url = `http://localhost:8080/medsolve/v1/patient/resetPassword/${token}`;
 console.log(url);
 const resp = await fetch(url,{
  method:'PATCH',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({password,passwordConfirm}),
  credentials:'include',
  withCredentials:true
 })
 const data = await resp.json();
console.log(data);
if(data.status === 'success'){
  alert(`${data.message}`);
  nav(`/${data.redirect}`)
}else{
  console.log(data.err);
}

  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="New password"
                name="password"
                type="password"
                value={password}
                autoComplete="password"
                autoFocus
                onChange={(e)=>{setpassword(e.target.value)}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="passwordConfirm"
                label="Password Confirmation"
                type="password"
                id="passwordConfirm"
                value={passwordConfirm}
                autoComplete="current-password"
                onChange={(e)=>{setpasswordConfirm(e.target.value)}}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Password
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/patientlogin" variant="body2">
                    Login Page
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/patientRegistration" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}