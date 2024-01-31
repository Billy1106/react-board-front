// In src/posts/PostCard.tsx
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  CardActions,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DateRangeIcon from '@mui/icons-material/DateRange';
import type { Task } from ".";

function TaskCard({ task }: { task: Task }) {
  const progress = calculateProgress(new Date(task.deadline), task.severity);
  const backgroundColor = interpolateColor(
    [255, 255, 255],
    [235, 245, 251],
    progress
  );

  return (
    <Box sx={{ marginBottom: 2, display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 340, boxShadow: 0, borderRadius: 2 }}>
        <CardContent style={{ paddingBottom: "0px" }}>
          <Box sx={{ gap: "10px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
              <Chip label={task.tag} size="small" />
              <IconButton size="small">
                <MoreHorizIcon />
              </IconButton>
            </Box>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              m={1}
              sx={{ color: "#3a3a3a", marginLeft: "0px" }}
            >
              {task.title}
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ color: "#4a4a4a" }}>
            {task.description}
          </Typography>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "left",
              paddingLeft: "0px",
            }}
          >
            <IconButton size="small">
              <AccountCircleIcon />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                color: "#4a4a4a",
                justifyContent: "center",
                marginLeft: "0px",
              }}
            >
              {task.assignee}
            </Typography>
            <IconButton size="small">
              <DateRangeIcon />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                color: "#4a4a4a",
                justifyContent: "center",
                marginLeft: "0px",
              }}
            >
              {dateFormatter(task.deadline)}
            </Typography>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

function dateFormatter(date: string): string {
  const d = new Date(date);
  const today = new Date();
  if (d.toDateString() === today.toDateString()) {
    return "Today " + d.toLocaleTimeString().slice(0, 5);
  }
  return d.toDateString();
}

function interpolateColor(
  startColor: [number, number, number],
  endColor: [number, number, number],
  progress: number
): string {
  progress = Math.max(0, Math.min(1, progress));
  const r = Math.round(
    startColor[0] + (endColor[0] - startColor[0]) * progress
  );
  const g = Math.round(
    startColor[1] + (endColor[1] - startColor[1]) * progress
  );
  const b = Math.round(
    startColor[2] + (endColor[2] - startColor[2]) * progress
  );
  return `rgb(${r}, ${g}, ${b})`;
}

function calculateProgress(deadline: Date, severity: number): number {
  const now = new Date();
  const timeDiff = deadline.getTime() - now.getTime();
  const normalizedSeverity = severity / 10;
  const adjustedTimeDiff = timeDiff / normalizedSeverity;
  let progress = 1 - adjustedTimeDiff / (24 * 60 * 60 * 1000);
  progress = Math.max(0, Math.min(1, progress));
  return progress;
}

export default TaskCard;
