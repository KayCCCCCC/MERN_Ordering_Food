import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected Db Success");
})

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    return res.json("Hello")
})

app.listen(8000, () => {
    console.log("server started on http://localhost:8000")
})
