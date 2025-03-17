import { Request, Response } from "express";
import Task from "../models/Task";

// Get all tasks
export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving tasks" });
    }
};

// Create a new task
export const createTask = async (req: Request, res: Response): Promise<void> => {
    const { title, description } = req.body;

    if (!title?.trim()) {
        res.status(400).json({ error: "Title is required" });
        return;
    }

    try {
        const newTask = new Task({ title, description });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Error creating task" });
    }
};

// Update an existing task
export const updateTask = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, completed },
            { new: true }
        );

        if (!updatedTask) {
            res.status(404).json({ error: "Task not found" });
            return;
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Error updating task" });
    }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            res.status(404).json({ error: "Task not found" });
            return;
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Error deleting task" });
    }
};
