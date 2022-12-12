import React from "react";
import {Box} from "@mui/material";
import { Breadcrumbs, Link } from '@mui/material';
const Breadcrumb = (props) => {

  return (
    <Box m={2}>
        <Breadcrumbs>

        {
          props.crumbs.map((el) => (
            <Link underline="hover" href={el.label}>{el.label}</Link>
            ))
          }
        </Breadcrumbs>
    </Box>
  
  )
}

export default Breadcrumb;