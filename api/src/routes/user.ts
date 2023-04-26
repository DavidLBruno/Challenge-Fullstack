import express, { Response, Request } from "express";

const loginUser = async (req: Request, res: Response) => {
  console.log("POR ACA ESTA PASANDO");
  try {
    return res.status(200).json({
      "Todo ok": "Ajam",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "Error to login User" });
  }
};

export { loginUser };
