import { Router } from "express";
import {logger} from "../middlewares";

const router = Router();

router.use(logger);

router.get("/", logger, logger, (req, res) => {
    res.send("OK").status(200);
})

export default router;