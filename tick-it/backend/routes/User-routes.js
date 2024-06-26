import express from "express";
import { getAllUsers, signUp,updateUser,delelteUser,login, getBookingsOfUser ,getUserById } from "../controllers/User-controller.js";
const userRouter= express.Router();
userRouter.get("/",getAllUsers);
userRouter.get("/bookings/:id",getBookingsOfUser);
userRouter.post("/signup",signUp);
userRouter.get("/:id",getUserById);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",delelteUser);
userRouter.post("/login",login);
export default userRouter;




















