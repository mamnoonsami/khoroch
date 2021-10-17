import React from "react";
import {TextField} from "@mui/material"
import {Link} from 'react-router-dom'

export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <TextField size="small" id="outlined-basic" label="Username" variant="outlined" InputLabelProps={{style: {fontSize: 13}}} required/>
                        </div>
                        
                        <div className="form-group">
                            <TextField size="small" type="password" id="outlined-basic" label="Password" variant="outlined" InputLabelProps={{style: {fontSize: 13}}}required/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Login</button>
                </div>

                <div className="toReg">
                    <p>Do not have an account? 
                        <Link to="/register">
                            <a> Create an account</a>
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}