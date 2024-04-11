import { Box, Paper, Typography } from "@mui/material";

export function Introduction() {
  return (
    <Box width={{ md: "40vw", xs: "90vw" }} mr={4}>
      <Paper
        sx={{
          padding: "15px",
          bgcolor: "#2f2f2f",
          boxShadow: "7px 7px #121212",
          ml: 3,
        }}
      >
        <Typography color={"primary"} variant="body1" align="justify">
          Welcome. Here, you can generate team compositions with Stand United
          and Built Different strategies.
        </Typography>
        <Typography color={"primary"} variant="body1" align="justify" mt={2}>
          Remember that different compositions will be generated with each
          attempt. The generated composition is not necessarily the best
          possible as there are several other characteristics not considered in
          the calculation. The main thing here is the number of traits.
        </Typography>
      </Paper>
    </Box>
  );
}
