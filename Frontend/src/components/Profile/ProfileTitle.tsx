import { Typography, Grid, Avatar } from "@mui/material";

type usernameProp = { username: string };

export default function ProfileTitle({ username }: usernameProp) {
  return (
    <>
      {/* Profile title section */}
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={3}
      >
        <Avatar alt="Remy Sharp" sx={{ width: 64, height: 64 }} />
        <Typography variant="h4" sx={{ fontWeight: 600, color: "black" }}>
          {username}
        </Typography>
      </Grid>
    </>
  );
}
