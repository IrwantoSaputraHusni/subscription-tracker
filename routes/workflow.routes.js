import { Router } from "express";
import { sendReminders } from "../controllers/workflow.controller.js";

const workflowRouter = Router();

// Gunakan .post() karena Upstash Workflow menembak webhook menggunakan HTTP POST
workflowRouter.post('/', sendReminders);

export default workflowRouter;