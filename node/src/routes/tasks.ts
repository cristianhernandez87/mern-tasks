import express from "express";
import { 
    getTasks, 
    createTask, 
    updateTask, 
    deleteTask 
} from "../controllers/tasks";
import { RequestHandler } from "express";

const router = express.Router();

// Explicitly define the type of controllers
router.get("/tasks", getTasks as RequestHandler);
router.post("/tasks", createTask as RequestHandler);
router.put("/tasks/:id", updateTask as RequestHandler);
router.delete("/tasks/:id", deleteTask as RequestHandler);

export default router;
