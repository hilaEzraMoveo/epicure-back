import { Router } from "express";
import * as chefController from "../../controllers/chef.controller";

const chefRouter = Router();

chefRouter.get("/", chefController.getAllChefs);
chefRouter.get("/:id", chefController.getChefById);
chefRouter.post("/", chefController.createChef);
chefRouter.put("/:id", chefController.updateChef);
chefRouter.delete("/:id", chefController.deleteChef);

export default chefRouter;
