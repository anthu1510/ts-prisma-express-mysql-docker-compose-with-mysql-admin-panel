import { Router } from "express";
import userController from "../controllers/user.controller";
import { validateRequest } from 'zod-express-middleware';
import { userCreateInputSchema } from "../validations/user.validation";

const router = Router();

router.get("/", userController.getAll);
router.post("/", validateRequest({body: userCreateInputSchema}), userController.create);

export default router;