import { Router } from "express";

// controllers
import * as CtrlAuth from "./auth.controller";


const router = Router();
router.post("/", CtrlAuth.authActiveDirectory);
router.get("/", CtrlAuth.getUsers);
// router.delete("/:id", CtrlRegistro.deleteRegistro);

export default router;
