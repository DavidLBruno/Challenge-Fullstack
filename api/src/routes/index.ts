import express, { Response, Request, response } from "express";
import { menuModel } from "../models/menu";
import { transactionModel } from "../models/transactions";

const getMenu = async (req: Request, res: Response) => {
  try {
    const response = await menuModel.find();
    return res.status(200).json({
      response,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: "no funciono",
    });
  }
};
const getCard = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      "Todo ok": "Ajam",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: "no funciono",
    });
  }
};
const getTransaction = async (req: Request, res: Response) => {
  try {
    const response = transactionModel.find();
    return res.status(200).json({
      response,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: "no funciono",
    });
  }
};
const getBalance = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      "Todo ok": "Ajam",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: "no funciono",
    });
  }
};

export { getMenu, getBalance, getCard, getTransaction };
