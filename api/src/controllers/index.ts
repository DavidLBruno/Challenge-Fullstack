import express, { Router } from "express";
import { loginUser } from "../routes/user";
import { getBalance, getMenu, getTransaction, getCard } from "../routes";
const router = Router();

/* Login */
router.post("/login", loginUser);

/* Menu */
router.get("/menu", getMenu);

/* Balance */
router.get("/balance", getBalance);
router.get("/balance/:id", getBalance);

/* Cards */
router.get("/card", getCard);
router.get("/card/:id", getCard);

/* Transactions */
router.get("/transactions", getTransaction);
router.get("/transactions/:id", getTransaction);

export default router;
