import { type NextFunction, type Request, type Response } from "express";

export const validateCreateProfile = (req: Request, _res: Response, next: NextFunction) => {
  if (!req.body || req.body.name === undefined) {
   return _res.status(400).json({
    status: "error",
    message: "'name' is required in request body"
   });
  }

  if (req.body.name === "") {
   return _res.status(400).json({
    status: "error",
    message: "'name' cannot be empty"
   });
  }

  if (isNaN(Number(req.body.name)) === false) {
   return _res.status(422).json({
    status: "error",
    message: "'name' must not be a number"
   });
  }
  next()
 },