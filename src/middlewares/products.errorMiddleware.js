
function errorMiddleWares(err , req , res , next){
    console.error(err)

    return res.status(500).json({
    error: "erro interno no servidor"
    })
}



export default errorMiddleWares