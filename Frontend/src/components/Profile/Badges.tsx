import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Divider,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AppsIcon from "@mui/icons-material/Apps";
import QuizIcon from "@mui/icons-material/Quiz";
import SchoolIcon from "@mui/icons-material/School";
import TodayIcon from "@mui/icons-material/Today";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import AddLinkIcon from "@mui/icons-material/AddLink";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import React from "react";
import { Badge } from "~/types/entities";

// Define icon components
const icons = {
  AccountBoxIcon: AccountBoxIcon,
  AccessTimeIcon: AccessTimeIcon,
  AppsIcon: AppsIcon,
  QuizIcon: QuizIcon,
  SchoolIcon: SchoolIcon,
  TodayIcon: TodayIcon,
  ThumbUpAltIcon: ThumbUpAltIcon,
  AddLinkIcon: AddLinkIcon,
  EmojiEventsIcon: EmojiEventsIcon,
};

interface BadgesProps {
  badgeData: Badge[];
  existingBadges: number[];
}

export default function Badges({ badgeData, existingBadges }: BadgesProps) {
  return (
    <>
      <Typography variant="h5" sx={{ marginLeft: "1rem" }}>
        Badges
      </Typography>
      <Divider sx={{ borderBottomWidth: 2, borderColor: "black" }} />
      <Grid container justifyContent="center" sx={{ marginTop: "2rem" }}>
        <Grid item p="0 !important" sx={{ overflowY: "auto" }}>
          <List
            sx={{
              maxWidth: "40vw",
              height: "80vh",
              padding: 0,
              marginRight: "0.5rem",
            }}
          >
            {badgeData.map((badge, index) => (
              <ListItem
                key={index}
                sx={{
                  borderRadius: "5px",
                  backgroundColor: existingBadges.includes(index)
                    ? "#FFD700"
                    : "#b0b0b0",
                  opacity: existingBadges.includes(index) ? 1 : 0.4,
                  marginBottom: "1rem",
                  padding: "0.5rem",
                  border: "3px solid #008000",
                }}
              >
                <ListItemAvatar sx={{ textAlign: "center" }}>
                  {React.createElement(icons[badge.icon as keyof typeof icons])}
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
    </>
  );
}
