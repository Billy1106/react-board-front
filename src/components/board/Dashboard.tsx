import Container from "@mui/material/Container";
import TaskColumn from "./TaskColumn";
import Box from "@mui/material/Box";
import { Task, STATE } from ".";
import Typography from "@mui/material/Typography";

function Dashboard() {
  const inProgressTasks: Task[] = [
    {
      id: "task1",
      title: "Fix login issue",
      severity: 2,
      assignee: "John Doe",
      storyPoint: 5,
      description:
        "Users are unable to log in using their credentials. Needs urgent attention.",
      status: STATE.INPROGRESS,
      deadline: "2024-02-31:20:20:00",
      tag: "Login",
    },
    {
      id: "task2",
      title: "Update landing page",
      severity: 4,
      assignee: "Jane Smith",
      storyPoint: 3,
      description:
        "The landing page needs to be updated with the new product information.",
      status: STATE.INPROGRESS,
      deadline: "2024-10-31:20:20:00",
      tag: "Landing Page"
    },
  ];
  const completedTasks: Task[] = [ {
    id: "task3",
    title: "Database optimization",
    severity: 8,
    assignee: "Alice Johnson",
    storyPoint: 8,
    description:
      "Optimize database queries to improve application performance.",
    status: STATE.DONE,
    deadline: "2024-01-30:20:20:00",
    tag: "Database",
  }]
  const stayTasks: Task[] = [ {
    id: "task4",
    title: "Implement new feature",
    severity: 2,
    assignee: "Bob Brown",
    storyPoint: 13,
    description:
      "Implement the new communication feature as per the specifications.",
    status: STATE.STAY,
    deadline: "2024-12-31:20:20:00",
    tag: "Feature",
  }]

  return (
    <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: "10px" }}>
        <TaskColumn tasks={stayTasks} title={STATE.STAY} />
        <TaskColumn tasks={inProgressTasks} title={STATE.INPROGRESS} />
        <TaskColumn tasks={completedTasks} title={STATE.DONE} />
      </Box>
    </Container>
  );
}

export default Dashboard;
