import { GitHub, X } from "@mui/icons-material";
import { AppBar, Box, Link, Stack, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Box display={"flex"}>
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
          </Box>
          <Stack spacing={1} direction={"row"}>
            <Link
              sx={{ color: "black" }}
              href="https://github.com/AlyssonT"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHub />
            </Link>
            <Link
              sx={{ color: "black" }}
              href="https://twitter.com/AlyssonT5"
              rel="noopener noreferrer"
              target="_blank"
            >
              <X />
            </Link>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
