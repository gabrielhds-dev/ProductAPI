
import { productCreateService, productFindManyService, productFindUniqueService, 
    productDeleteService, productUpdateService } from "../services/product.service.js";

export async function productFindManyController(req , res){

    const products_ = await productFindManyService()

    res.status(200).json(products_)
}

export async function productFindUniqueController(req , res){

    const products_ = await productFindUniqueService(req.params.id)

    res.status(200).json(products_)
    
}

export async function productCreateController(req , res){


    const products_ = await productCreateService(req.body)
    
    res.status(201).json(products_)
}

export async function productDeleteController(req , res){

    const products_ = await productDeleteService(req.params.id)

    res.status(204).json(products_)
}


export async function productUpdateController(req , res){

    const products_ = await productUpdateService(req.params.id , req.body)

    res.status(200).json(products_)
}