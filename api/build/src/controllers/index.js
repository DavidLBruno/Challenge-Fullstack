"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../routes/user");
const routes_1 = require("../routes");
const router = (0, express_1.Router)();
/* Login */
router.post("/login", user_1.loginUser);
/* Menu */
router.get("/menu", routes_1.getMenu);
/* Balance */
router.get("/balance", routes_1.getBalance);
router.get("/balance/:id", routes_1.getBalance);
/* Cards */
router.get("/card", routes_1.getCard);
router.get("/card/:id", routes_1.getCard);
/* Transactions */
router.get("/transactions", routes_1.getTransaction);
router.get("/transactions/:id", routes_1.getTransaction);
exports.default = router;
