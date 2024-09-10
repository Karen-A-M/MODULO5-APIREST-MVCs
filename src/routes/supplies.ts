import { Router } from "express"
import SuppliesController from "../controllers/supplies"
import checkToken from "../middlewares/check-token"

const suppliesRouter = Router()

suppliesRouter.get("/", SuppliesController.getAll)

suppliesRouter.get("/:id", checkToken, SuppliesController.getById)

suppliesRouter.post("/", checkToken, SuppliesController.create)

suppliesRouter.patch("/:id", checkToken, SuppliesController.updateById)

suppliesRouter.delete("/:id", checkToken, SuppliesController.deleteById)

export default suppliesRouter