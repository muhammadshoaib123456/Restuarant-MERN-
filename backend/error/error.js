

class ErrorHandler extends Error{  // error keyword we use here is alreay in javascript language so we can use it
    constructor(message, statusCode){

        super(message);  // in error super class we have message bydefault so we can use default keyword in which we pass messagse
   
   this.statusCode = statusCode;    // and statuscode is not bydefault so we need to use it likt this keyword
   
    }
} 


// we craeted error handler function so how we use this function so we can use that function through middleware


export const errorMiddleware = (err, req,res, next)=>{


    err.message = err.message || "internal server error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
};


export default ErrorHandler;