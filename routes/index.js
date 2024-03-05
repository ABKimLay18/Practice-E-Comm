import { Router } from "express";
import authRoute from "./authRoute.js";
const router = Router();


router.use("/api", authRoute)

export default router;