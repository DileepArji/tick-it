import express  from "express";
const app=express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";//it helps to exchange data between 5000 and 3000
app.use(cors({ origin: 'https://tick-it-movies.onrender.com' }));
dotenv.config();

//middlewares
app.use(express.json());//it tells that we communicate the data through json format 
app.use("/user",userRouter);//this route ("/user") will be followed by userRouter as the home
app.use("/admin",adminRouter);//this route ("/admin") will be followed by adminRouter as the home
app.use("/movie",movieRouter);
app.use("/booking",bookingsRouter);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://tick-it-movies.onrender.com');
    // You can set other CORS headers as needed, such as methods and headers.
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.1cvsh6l.mongodb.net/?retryWrites=true&w=majority`).
then(()=>app.listen(5000,()=>{
    console.log("app.Js listening to the port 5000");
})).
catch((err)=>console.log(err));
app.use("/",(req,res,next)=>{
    res.send("<h1>hello!!!!!</h1>")
});



// mongodb+srv://admin:<password>@cluster0.1cvsh6l.mongodb.net/?retryWrites=true&w=majority