import React from "react";
import {Box} from "@mui/material";


const Message = (props) => {
    console.log(props);
    return (
        <Box m={2}>
            <h2>{props.message}</h2>
        </Box>
    )
}

export default Message;