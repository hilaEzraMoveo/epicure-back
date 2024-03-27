import { Router } from "express";
import * as dishController from "../../controllers/dish.controller";

const dishRouter = Router();

dishRouter.get("/", dishController.getAllDishes);
dishRouter.get("/:id", dishController.getDishById);
dishRouter.post("/", dishController.createDish);
dishRouter.put("/:id", dishController.updateDish);
dishRouter.delete("/:id", dishController.deleteDish);

export default dishRouter;
