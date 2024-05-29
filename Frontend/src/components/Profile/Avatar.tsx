import {
  Typography,
  Grid,
  Divider,
  Paper,
  ThemeProvider,
  Stack,
} from "@mui/material";
import {
  experimentalStyled as styled,
  createTheme,
} from "@mui/material/styles";

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

const theme = createTheme({
  palette: {
    primary: {
      main: "#008000",
    },
  },
});

export default function Avatar() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column">
        <Typography variant="h5" sx={{ marginLeft: "1rem" }}>
          Points
        </Typography>
        <Divider sx={{ borderBottomWidth: 2, borderColor: "black" }} />
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
      </Stack>
    </ThemeProvider>
  );
}
