import bodyParser from "body-parser";
import express from "express";

const app = express();

const port = 5500;

app.use(express.json());

app.get(
  "/",
  async (req, res) => {
    return res.status(200).json("done");
  }
);

import studentRouter from './router/student.router.js'
app.use("/api/student",studentRouter)


app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
