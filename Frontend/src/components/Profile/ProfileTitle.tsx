import { Typography, Grid, Avatar, Button } from "@mui/material";

type titleProp = {
  username: string;
  isUpdatingAvatar: boolean;
  setIsUpdatingAvatar: (value: boolean) => void;
};

export default function ProfileTitle({
  username,
  isUpdatingAvatar,
  setIsUpdatingAvatar,
}: titleProp) {
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
        <Button onClick={() => setIsUpdatingAvatar(!isUpdatingAvatar)}>
          <Avatar alt="Remy Sharp" sx={{ width: 64, height: 64 }} />
        </Button>

        <Typography variant="h4" sx={{ fontWeight: 600, color: "black" }}>
          {username}
        </Typography>
      </Grid>
    </>
  );
}
