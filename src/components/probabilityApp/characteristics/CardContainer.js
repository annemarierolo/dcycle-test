import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Gender from "./Gender";
import Age from "./Age";
import Nationality from "./Nationality";
import Typography from "@mui/material/Typography";
import "../../../styles/probabilityApp/CardContainer.css";



function CardContainer(props) {
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="card-container">
      <Card
        sx={{
          display: "inline-block",
          width: 400,
          height: 500
        }}

        className="card-info"
      >
        <img
          className="gender-img"
          src={
            props.gender.gender === "female"
              ? "/images/female.png"
              : "/images/male.png"
          }
          alt={props.gender.gender === "female" ? "Female image" : "Male image"}
        />

        <CardContent sx={{ textAlign: 'center'}}>
        <Typography variant="h4" sx={{ ml: 0 }} component="div">
              {Capitalize(props.name)}
            </Typography>
          <Gender
            gender={props.gender.gender}
            probability={props.gender.probability}
          />
          <Age age={props.age.age} />
        </CardContent>
      </Card>
      <Card
        sx={{
          display: "inline-block",
          width: 400,
          height: 500
        }}
        className="card-info"
      >
        <CardContent>
          <Nationality countries={props.nationality} />
        </CardContent>
      </Card>
    </div>
  );
}

export default CardContainer;
