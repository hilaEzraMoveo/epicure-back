import { Router } from "express";
import * as chefController from "../../controllers/chef.controller";

const chefRouter = Router();

chefRouter.get("/", chefController.getAll);
chefRouter.get("/chefOfTheWeek", chefController.getChefOfTheWeek);
chefRouter.get("/:id", chefController.getById);
chefRouter.post("/", chefController.create);
chefRouter.put("/:id", chefController.update);
chefRouter.delete("/:id", chefController.deleteChef);

export default chefRouter;
