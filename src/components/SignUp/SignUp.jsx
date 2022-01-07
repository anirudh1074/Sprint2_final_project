import { FormControl, FormHelperText, TextField } from '@material-ui/core'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'

function SignUp() {
    return (
        <div>
            <div className="container">
            <form  className='form'>
                <h2 className='h2'>Sign Up</h2>
                <FormControl>
                    <TextField  id="standard-basic" type="email" className="form-control Email" placeholder="Enter email..." label="Email address" variant="standard" /><br />
                    <FormHelperText id="emailerror"></FormHelperText>
                </FormControl><br/><br/>

                <FormControl className="form-group">
                    <TextField  id="standard-basic"  type="password" className="form-control Password" placeholder="Password..." label="Password" variant="standard" /><br />
                    <FormHelperText id="passerror"></FormHelperText>
                </FormControl><br/> <br/>

                <FormControl className="form-group">
                    <TextField  id="standard-basic"  type="text" className="form-control" placeholder="Confirm Password..." label="Confirm Password" variant="standard" /><br />
                    <FormHelperText id="cpasserror"></FormHelperText> 
                </FormControl><br /><br/>

                <Button color="success" type="submit" className="btn btn-primary btn-block" variant="contained"><Link to='/Login'>Sign Up</Link></Button><br /><br />
                <p className="forgot-password text-right">
                    Already registered? <Link className='link' to='/Login'>Signin</Link>
                </p>
            </form>
            </div>
        </div>
    )
}

export default SignUp
