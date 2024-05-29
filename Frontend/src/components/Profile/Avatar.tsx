import { Typography, Grid, Divider, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "gray", // Element: color1, Property: color2
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Dummy skill set
const skills = [
  {
    name: "Element one",
  },
  {
    name: "Element two",
  },
  {
    name: "Element three",
  },
];

export default function Avatar() {
  return (
    <>
      <Typography variant="h5">Skills</Typography>
      <Divider
        variant="fullWidth"
        sx={{ borderBottomWidth: 2, marginRight: "1rem" }}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12.2 }}
        sx={{ paddingTop: 3 }}
      >
        {skills.map((skill, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>{skill.name}</Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
