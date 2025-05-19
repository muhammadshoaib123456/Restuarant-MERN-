import express from "express";
import cors from 'cors'
import dotenv from "dotenv"
import dbconnection from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import router from './routes/reservationRouter.js';

const app = express();
dotenv.config({path: './config/congig.env'})



app.use(cors({
    origin:[process.env.FRONTEND_URL], // basically in origin we pass our frontend url which is we write in our env file we can write multiple frontend url if we wants to connect our backend from multiplr frontend 
    methods:["POST"],   // in methods we have four methods 1.. get   2.. post  3.. delete  4.. put   so we use post method in this process because we just send data to our backend
    credentials: true
}));


app.options("*", cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.use(express.json());
//express.json() → for APIs sending JSON data
//👉 This lets your app understand JSON data sent in requests.
//📦 Example: If someone sends { "name": "John" } in the body, your app can read it as req.body.name.




app.use(express.urlencoded({extended:true}));
// This lets your app read data from HTML forms (like login or signup forms).
//📝 Example: If a form sends username=John, your app can read it as req.body.username.
//express.urlencoded() → for HTML forms


app.use('/api/reservation', router)




dbconnection();


app.use(errorMiddleware);
export default app