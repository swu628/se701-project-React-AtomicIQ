import { Box, LinearProgress, Stack, Typography } from "@mui/material";

interface LevelsProps {
  level: number;
  progress: number;
}

export default function Levels({ level, progress }: LevelsProps) {
  return (
    <Stack direction="column">
      <Typography variant="h5" sx={{ marginLeft: "1rem" }}>
        Level {level}
      </Typography>
      <Box m="0.5rem 0 0.5rem 0" sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: "0.5rem", borderRadius: 1 }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2">{`${Math.round(progress)}%`}</Typography>
        </Box>
      </Box>
    </Stack>
  );
}
