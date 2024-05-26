import { Typography, Grid, Divider, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SkillsAndPoints() {
  return (
    <>
      <Grid
        item
        sx={{ display: "flex", flexDirection: "column", marginTop: 3 }}
      >
        {/* Skills section */}
        <Typography variant="h4" sx={{ alignSelf: "center" }}>
          Skills
        </Typography>
        <Divider
          sx={{ borderBottomWidth: 2, borderColor: "black", marginY: 1 }}
        />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
        {/* Points section */}
        <Typography variant="h4" sx={{ alignSelf: "center", marginTop: 2 }}>
          Points
        </Typography>
        <Divider
          sx={{ borderBottomWidth: 2, borderColor: "black", marginY: 1 }}
        />
        <Typography>Points: 2</Typography>
        <Typography>Points: 2</Typography>
      </Grid>
    </>
  );
}
