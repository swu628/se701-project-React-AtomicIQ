import { Typography, Divider } from "@mui/material";

export default function Points() {
  return (
    <>
      <Typography variant="h4" sx={{ alignSelf: "center", marginTop: 2 }}>
        Points
      </Typography>
      <Divider
        sx={{ borderBottomWidth: 2, borderColor: "black", marginY: 1 }}
      />
      <Typography>Points: 2</Typography>
      <Typography>Points: 2</Typography>
    </>
  );
}
