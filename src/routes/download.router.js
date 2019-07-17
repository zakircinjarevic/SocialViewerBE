import express from "express";
import ctrl from "../controllers/download.controller";

const router = express.Router();

router.route("/api/download").post(ctrl.download);

export default router;
