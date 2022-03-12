import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Box,TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "@fontsource/roboto/";

interface LoginProps{
    name?:string,
};

interface LoginState{
    user:{
        email:string,
        password:string
    },
    submitted:boolean,
};

export default class AdminApp extends React.Component<LoginProps,LoginState>{

    render():React.ReactNode{
        return(
            <div>
                <Box>
                    <h1>Login:</h1>
                    <TextField id="email-textfield" label="Email" variant='standard' required />
                    <TextField id="password-textfield" label="Password" variant="standard" type="password" required />
                    <Button onClick={()=>{
                        console.log('Login Button Clicked');
                        }}>
                            LOGIN
                    </Button>
                </Box>
            </div>
        );
    };
}
