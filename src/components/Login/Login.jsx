import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import { Button } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import '../Login/Login.css'


function Login() {
  let check = () =>{
    window.location.href="/Exchanges";
  }
  return (
    <div className='Login'>
    
      <form>
        <h1>Login</h1>
        <FormControl>
                    <TextField  id="standard-basic"  type="email" className="form-control Email" placeholder="Enter email..." label="Email address" variant="standard" /><br />
                    <FormHelperText id="emailerror"></FormHelperText>
                </FormControl><br/><br/>

                <FormControl className="form-group">
                    <TextField  id="standard-basic"  type="password" className="form-control Password" placeholder="Password..." label="Password" variant="standard" /><br />
                    <FormHelperText id="passerror"></FormHelperText>
                </FormControl><br/> <br/>


                <Button color="success" type="submit" className="btn btn-primary btn-block" variant="contained"><Link to="/Homepage">Login</Link></Button><br /><br />
                <p className="forgot-password text-right">
                </p>
      </form>
    </div>
  )
}

export default Login;
