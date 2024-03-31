import { Router } from "express";
import * as restaurantController from "../../controllers/restaurant.controller";

const restaurantRouter = Router();

restaurantRouter.get("/", restaurantController.getAll);
restaurantRouter.get("/:id", restaurantController.getById);
restaurantRouter.post("/", restaurantController.create);
restaurantRouter.put("/:id", restaurantController.update);
restaurantRouter.delete("/:id", restaurantController.deleteRestaurant);

export default restaurantRouter;
