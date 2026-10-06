
import { productCreateController, productDeleteController, productFindManyController, 
    productFindUniqueController, 
    productUpdateController} from "../controllers/product.controller.js";
import { Router } from "express";

const router  = Router()

router.get("/" , productFindManyController)

router.get("/:id" , productFindUniqueController)

router.post("/" , productCreateController)

router.delete("/:id" , productDeleteController)

router.put("/:id" , productUpdateController)

export default router