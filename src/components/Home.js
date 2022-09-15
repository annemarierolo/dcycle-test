import React, {useState} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Form from "./probabilityApp/Form";
import "../styles/probabilityApp/Home.css";
import CovidHistorical from "./covid19App/CovidHistorical";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  const [open, setOpen] = useState("");

  const handleClose = () => {
    setOpen("");
  };

  return (
    <div>
      <div className="home-buttons">
        <Button
          sx={{fontSize: 20, width: 300, background: "linear-gradient(168deg, rgba(19,99,223,1) 0%, rgba(71,181,255,1) 50%, rgba(223,246,255,1) 100%)"}}
          variant="contained"
          size="large"
          onClick={() => setOpen("nombre")}
          className="home-button"
        >
          Probability App
        </Button>
        <Button
        sx={{fontSize: 20, width: 300, background: "linear-gradient(168deg, rgba(245,237,220,1) 0%, rgba(235,29,54,1) 100%);"}}
          variant="contained"
          size="large"
          className="home-button"
          onClick={() => setOpen("covid")}
        >
          COVID-19 App
        </Button>
      </div>
      <Dialog
        fullScreen
        open={open !== ""}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar
            sx={{
              backgroundColor: "#F4F4F4"
            }}
          >
            <IconButton
              edge="start"
              sx={{ color: "#474747"}}
              onClick={handleClose}
              aria-label="close"
              
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {open === "nombre" ? <Form /> : <CovidHistorical />}
      </Dialog>
    </div>
  );
}
