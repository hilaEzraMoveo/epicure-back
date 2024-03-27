import { Router } from "express";
import * as restaurantController from "../../controllers/restaurant.controller";

const restaurantRouter = Router();

restaurantRouter.get("/", restaurantController.getAllRestaurants);
restaurantRouter.get("/:id", restaurantController.getRestaurantById);
restaurantRouter.post("/", restaurantController.createRestaurant);
restaurantRouter.put("/:id", restaurantController.updateRestaurant);
restaurantRouter.delete("/:id", restaurantController.deleteRestaurant);

export default restaurantRouter;
