import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import React from "react";

// Define icon components
const icons = {
  AcUnitIcon: AcUnitIcon,
  AccessibilityIcon: AccessibilityIcon,
  AdUnitsIcon: AdUnitsIcon,
  AddLocationIcon: AddLocationIcon,
};

// Dummy badges
const badges = [
  {
    icon: "AcUnitIcon",
    name: "hi",
    description: "This is an achievement",
  },
  {
    icon: "AccessibilityIcon",
    name: "adw",
    description: "This is an achievement",
  },
  {
    icon: "AdUnitsIcon",
    name: "wad",
    description: "This is an achievement",
  },
  {
    icon: "AddLocationIcon",
    name: "adwfafw",
    description: "This is an achievement",
  },
];

export default function Badges() {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 2 }}>
      <Grid item>
        <List sx={{ width: "25vw" }}>
          {badges.map((badge, index) => (
            <ListItem
              key={index}
              sx={{
                borderRadius: "5px",
                backgroundColor: "#FFD700",
                marginBottom: 2,
                padding: 2,
                border: "3px solid #008000",
              }}
            >
              <ListItemAvatar>
                <ListItemAvatar>
                  {React.createElement(icons[badge.icon as keyof typeof icons])}
                </ListItemAvatar>

                {/* Render icon dynamically */}
              </ListItemAvatar>
              <ListItemText
                primary={badge.name}
                secondary={badge.description}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "1.3rem",
                }}
                secondaryTypographyProps={{ color: "black" }}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
