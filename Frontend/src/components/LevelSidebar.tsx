import { Drawer, LinearProgress, Typography } from "@mui/material";

interface LevelSidebarProps {
  level: number;
  progress: number;
}

export default function LevelSidebar({ level, progress }: LevelSidebarProps) {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        elevation: 3,
        square: false,
        sx: {
          width: "15vw",
          height: "7rem",
          top: "30vh",
          padding: "1rem",
          boxSizing: "border-box",
        },
      }}
      sx={{
        flexShrink: 0,
      }}
    >
      <Typography variant="h6" mb="0.5rem">
        Level {level}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: "0.5rem", borderRadius: 1 }}
      />
      <Typography variant="body2" mt="5px">{`${Math.round(
        progress
      )}%`}</Typography>
    </Drawer>
  );
}
