import React from "react";
import Box from '@mui/material/Box';
interface FooterProps{
    name:string,
}

export default class Footer extends React.Component<FooterProps,{}>{
    render():React.ReactNode{
        return (
            <>
                <Box>
                    <p>This is for Footer.</p> 
                </Box>
            </>
        );
    }
}