import React, { useState } from "react";
import ProbabilityService from "../../services/probabilities";
import CardContainer from "./characteristics/CardContainer";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Button from '@mui/material/Button';
import "../../styles/probabilityApp/Form.css";

function Form() {
  const [nationality, setNationality] = useState([]);
  const [gender, setGender] = useState({});
  const [age, setAge] = useState({});
  const [name, setName] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [exists, setExists] = useState(false);

  function handleName(event) {
    const actualName = event.target.value;
    setName(actualName);
  }

  async function handleSearch() {
    setIsSearch(true);
    await ProbabilityService.getNationalize(name).then((nationality) =>
      setNationality(nationality)
    );
    await ProbabilityService.getGenderize(name).then((gender) => setGender(gender));
    await ProbabilityService.getAgify(name).then((age) => setAge(age));
    setExists(true);
  }

  function handleReset(){
    setIsSearch(false);
    setExists(false);
    setName("")
  }

  

  return (
    <div>
    <div>
      {!isSearch ? (<Paper
        component="form"
        sx={{
          display: "flex",
          width: 400,
          marginTop: 5,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Ingrese su nombre"
          inputProps={{ "aria-label": "Ingrese su nombre" }}
          onChange={handleName}
          value={name}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      ) :
      exists && <div className="search-button"><Button variant="text" onClick={handleReset}>Search Again</Button></div>
      }
      </div>
      <div>
        {isSearch && !exists && <div className="loading"><CircularProgress color="inherit" /></div>}
        {exists && (
          <section className="card-section">
            <CardContainer
              name={name}
              age={age}
              gender={gender}
              nationality={nationality}
            />
          </section>
        )}
      </div>
    </div>
  );
}

export default Form;
