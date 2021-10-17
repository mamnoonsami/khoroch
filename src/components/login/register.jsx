import React from "react";
import {TextField} from "@mui/material"
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

export class Register extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="base-container">
                <div className="header">Register</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <TextField size="small" id="outlined-basic" label="First Name" variant="outlined" InputLabelProps={{style: {fontSize: 13}}}/>
                        </div>
                        <div className="form-group">
                            <TextField size="small" id="outlined-basic" label="Last Name" variant="outlined" InputLabelProps={{style: {fontSize: 13}}} />
                        </div>
                        <div className="form-group">
                            <TextField size="small" id="outlined-basic" label="Username" variant="outlined" InputLabelProps={{style: {fontSize: 13}}} required/>
                        </div>
                        <div className="form-group">
                            <TextField type="email" size="small" id="outlined-basic" label="Email" variant="outlined" InputLabelProps={{style: {fontSize: 13}}} required/>
                        </div>
                        <div className="form-group">
                            <TextField type="password" size="small" id="outlined-basic" label="Password" variant="outlined" InputLabelProps={{style: {fontSize: 13}}} required/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Register</button>
                </div>
                <div className="toReg">
                <p>Already have an account? 
                    <Link to="/">
                        <a> Login</a>
                    </Link>
                </p>
                </div>
            </div>
        )
    }
}