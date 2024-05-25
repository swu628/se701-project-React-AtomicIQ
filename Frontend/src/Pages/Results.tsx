import { Box, Paper, Typography } from "@mui/material";

export default function Results() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      mt="7.5vh"
      sx={{ verticalAlign: "middle" }}
    >
      <Paper elevation={3} sx={{ width: "80vw", minHeight: "75vh", p: "2rem" }}>
        <Typography>Results</Typography>
      </Paper>
    </Box>
  );
}
