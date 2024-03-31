import { Router } from "express";
import * as dishController from "../../controllers/dish.controller";

const dishRouter = Router();

dishRouter.get("/", dishController.getAll);
dishRouter.get("/:id", dishController.getById);
dishRouter.post("/", dishController.create);
dishRouter.put("/:id", dishController.update);
dishRouter.delete("/:id", dishController.deleteDish);

export default dishRouter;
