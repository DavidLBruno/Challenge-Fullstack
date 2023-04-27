import express, { Response, Request } from "express";
import { userModel } from "../models/user";

const loginUser = async (req: Request, res: Response) => {
  try {
    const { type, document, password } = req.headers;
    const response = await userModel.find({ type, document, password });
    console.log({ response, type, document, password });
    return res.status(200).json({
      response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "Error to login User" });
  }
};

export { loginUser };
