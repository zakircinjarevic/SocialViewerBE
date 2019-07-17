import express from "express";
import bodyParser from "body-parser";
import gdriveRouter from "./routes/gdrive.router";
import downloadRouter from "./routes/download.router";
import cors from "cors";
import helmet from "helmet";
const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", gdriveRouter);
app.use("/", downloadRouter);
export default app;
