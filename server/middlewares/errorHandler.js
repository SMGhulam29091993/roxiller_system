const errorHandlerMiddleware = (err, req,res,next)=>{
    let message = err.message || "Internal Server Error";
    let statusCode = err.statusCode || 500;

    return res.status(statusCode).send({message : process.env.NODE_ENV==="DEVELOPMENT"?err:message, success : false, statusCode});
}

module.exports = errorHandlerMiddleware;