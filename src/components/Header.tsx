import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <img
          src="/assets/standunited2.png"
          alt="Stan United Icon"
          width={"32px"}
          height={"32px"}
          style={{ borderRadius: 8, cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <Typography variant="h6" component="div" ml={2}>
          TFT - Stand United/Built Different comp generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
