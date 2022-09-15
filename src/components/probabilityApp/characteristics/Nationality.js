import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../../../styles/probabilityApp/Nationality.css";

function Nationality(props) {
  return (
    <div>
      <CardContent>
        <Typography sx={{ fontSize: 20, mb: 2 }} component="div">
          Nationality
        </Typography>
        {props.countries?.map((country, index) => (
          <CardContent key={index} sx={{ textAlign: "center" }}>
            <div className="country-flag">
              <Typography>{country.info.name.common}</Typography>
              <img
                className="nationality-img"
                src={country.info.flags.png}
                alt="flag"
              />
            </div>

            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                value={Math.round(country.probability * 100)}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {Math.round(country.probability * 100)}%
                </Typography>
              </Box>
            </Box>
          </CardContent>
        ))}
      </CardContent>
    </div>
  );
}

export default Nationality;
