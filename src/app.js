
import bodyParser from "body-parser";
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({ path: "./.env" });


const app = express();

app.use(express.json());


const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

app.get(
  "/",
  async (req, res) => {
    return res.status(200).json("done");
  }
);

import studentRouter from './router/student.router.js'
app.use("/api/student",studentRouter)

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
