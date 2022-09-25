import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        TEAM MEDSOLVE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignIn = ()=>{
  const nav = useNavigate();
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
const [password,setpassword] = useState('');
const [passwordConfirm,setpasswordConfirm] = useState('');
  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log(name,email,password,passwordConfirm);
//     event.preventDefault();
    setname('');
    setemail('');
    setpassword('');
    setpasswordConfirm('');
  // const data = new FormData(event.currentTarget);
 const url = `http://localhost:8080/medsolve/v1/patient/signup`;
 const resp = await fetch(url,{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({name,email,password,passwordConfirm}),
  credentials:'include',
  withCredentials:true
 })
 const data = await resp.json();
console.log(data);
if(data.status === "success"){
  alert(`${data.message}`);
  nav(`/${data.redirect}`)
}else{
  console.log(data.err);
}

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="username"
              name="name"
              value={name}
              autoComplete="name"
              autoFocus
              onChange={(e)=>{setname(e.target.value)}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
               onChange={(e)=>{setemail(e.target.value)}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{setpassword(e.target.value)}}
            />
              <TextField
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              value={passwordConfirm}
              label="PasswordConfirm"
              type="password"
              id="passwordConfirm"
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/patientPassreset" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/patientLogin" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn 