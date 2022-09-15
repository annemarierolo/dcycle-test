import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function Age(props) {
  return (
    <CardContent>
      <Typography variant="body2" sx={{fontSize: 18}}>
        {props.age} years
      </Typography>
    </CardContent>
  );
}

export default Age;
