import { Router } from "express";
import SuppliesController from "../controllers/supplies";

const suppliesRouter = Router()

suppliesRouter.get("/", SuppliesController.getAll)

suppliesRouter.get("/:id", SuppliesController.getById)

suppliesRouter.post("/", SuppliesController.create)

suppliesRouter.patch("/:id", SuppliesController.updateById)

suppliesRouter.delete("/:id", SuppliesController.deleteById)

export default suppliesRouter