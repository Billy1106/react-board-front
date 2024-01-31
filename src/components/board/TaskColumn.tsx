import TaskCard from "./TaskCard";
import { Task } from ".";
import { Box, Typography } from "@mui/material";

function TaskColumn({ tasks, title }: { tasks: Task[]; title: string }) {
  return (
    <div className="task-column">
      <Typography fontFamily="Inter" fontWeight="600" fontSize="20px" marginTop="30px" marginBottom="30px">
        {title}
      </Typography>
      <Box  sx={{ }}>
        {tasks.map((task: Task) => (
          <TaskCard task={task} />
        ))}
      </Box >
    </div>
  );
}
export default TaskColumn;
