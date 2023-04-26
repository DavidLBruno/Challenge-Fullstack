import express, { Router } from "express";
const router = Router();
import { loginUser } from "../routes/user";

router.post("/login", loginUser);

export default router;
