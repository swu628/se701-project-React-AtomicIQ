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
          marginTop: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 100, height: 100, marginRight: 5 }}
        />
        <Typography sx={{ fontWeight: 600, fontSize: "2rem", color: "black" }}>
          {username}
        </Typography>
      </Grid>
    </>
  );
}
