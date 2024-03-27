import { Router } from "express";
import chefsApiRoutes from "./chef.routes";
import dishesApiRoutes from "./dish.routes";
import restaurantsApiRoutes from "./restaurant.routes";

const v1Router = Router();

v1Router.use("/chefs", chefsApiRoutes);
v1Router.use("/dishes", dishesApiRoutes);
v1Router.use("/restaurants", restaurantsApiRoutes);

export default v1Router;
