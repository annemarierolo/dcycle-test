import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

function Gender(props) {
    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
  return (
    <CardContent>
      <Typography sx={{ mt: 2 }} color="text.secondary">
        {Capitalize(props.gender)}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{  width: '50%', mt:0, mb:0, mr: 1, ml: 10}}>
        <LinearProgress variant="determinate" sx={{color:"#8DD5F2"}} value={props.probability * 100} />
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">{props.probability * 100}%</Typography>
      </Box>
    </Box>
    </CardContent>
  );
}

export default Gender;
