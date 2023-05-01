import React from 'react';
import { Avatar, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Login=()=>{
    const paperStyle={padding:20, height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#30c8bb'}
    const btnStyle={margin:'8px 0'}
    return(
        <Grid>
        <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        <h2>Sign in</h2>
        </Grid>
        <TextField label='userName' variant="standard" placeholder='Enter user name' fullWidth required/>
        <TextField label='password' variant="standard" placeholder='Enter password ' type='password' fullWidth required/>

        <FormControlLabel
  
  control={
    <Checkbox
    name="checked"
    color="primary"
      
    />
  }
  label="Remember me"
/>
<Button type='submit' color='primary' varient="contained" style={btnStyle} fullWidth>sign in</Button> 
  <Typography>
  <Link href='#'>
  forgot password ?
  
  </Link>
  </Typography>
 
  <Typography>
  do you have an account ?
  <Link href='#'>
  Sing up
  
  </Link>
  </Typography>
        </Paper>
        </Grid>
    );
    
}


export default Login;
