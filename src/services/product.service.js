
import { productCreateRepository, productDeleteRepository, productFindManyRepository, 
    productFindUniqueRepository, productUpdateRepository } from "../repositories/product.repository.js";

export async function productFindManyService(){
    return await productFindManyRepository()
}

export async function productFindUniqueService(id){
    return await productFindUniqueRepository(id)
}

export async function productCreateService(data){
    return await productCreateRepository(data)
}

export async function productDeleteService(id){
    return await productDeleteRepository(id)
}

export async function productUpdateService(id , data){
    return await productUpdateRepository(id , data)
}