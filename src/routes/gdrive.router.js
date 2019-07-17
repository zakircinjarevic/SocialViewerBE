import express from "express";
import ctrl from "../controllers/gdrive.controller";

const router = express.Router();

router.route("/api/gdrive").get(ctrl.getFiles);

export default router;
