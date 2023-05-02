import express, { Response, Request } from "express";
import { userModel } from "../models/user";

const loginUser = async (req: Request, res: Response) => {
  try {
    const { type, document, password } = req.headers;
    const response = await userModel.find({ type, document, password });
    console.log({ type, document, password });
    if (response.length) {
      return res.status(200).json({
        response,
        logged: true,
      });
    } else {
      return res.status(400).json({
        mensaje: "Password or Document incorrect",
        logged: false,
      });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ mensaje: "Error to login User", logged: false });
  }
};

export { loginUser };
