import TaskCard from "./TaskCard";
import { Task } from ".";
import { Box, Typography } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function TaskColumn({ tasks, title }: { tasks: Task[]; title: string }) {
  const { setNodeRef } = useDroppable({ id: title });
  const taskIds = tasks.map((task) => task.id);

  return (
    <Box>
      <Typography
        fontFamily="Inter"
        fontWeight="600"
        fontSize="20px"
        marginTop="30px"
        marginBottom="30px"
      >
        {title}
      </Typography>
      <Box>
        <SortableContext
          id={title}
          items={taskIds}
          strategy={verticalListSortingStrategy}
        >
          <div
            ref={setNodeRef}
            style={{ minHeight: "600px", minWidth: "340px" }}
          >
            {tasks.length > 0 ? (
              tasks.map((task: Task) => <TaskCard key={task.id} task={task} />)
            ) : (
              <div
                style={{ padding: "10px", textAlign: "center", color: "grey" }}
              >
                Drop items here
              </div>
            )}
          </div>
        </SortableContext>
      </Box>
    </Box>
  );
}
export default TaskColumn;
