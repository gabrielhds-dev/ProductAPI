
import prisma from "../database.js";

export async function productFindManyRepository(){
    return await prisma.products.findMany()
}

export async function productFindUniqueRepository(id){
    return await prisma.products.findUnique({
        where: {
            id: Number(id)
        }
    })
}

export async function productCreateRepository(data){
    return await prisma.products.create({
        data
    })
}

export async function productDeleteRepository(id){
    return await prisma.products.delete({
        where: {
            id: Number(id)
        }
    })
}

export async function productUpdateRepository(id , data){
    return await prisma.products.update({
        where: {
            id: Number(id)
        },

        data
    })
}