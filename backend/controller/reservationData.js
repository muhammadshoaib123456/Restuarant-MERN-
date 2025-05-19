import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async(req, res, next)=>{

  const {firstName, lastName, email,phone, time, date} = req.body || {}; 

  if(!firstName || !lastName || !email || !phone || !time || !date){

    return next(new ErrorHandler("please fill full reservation form", 400))

  }
  try {

    await Reservation.create({firstName, lastName, email,phone, time, date});
    res.status(200).
    json({
        success:true,
        message:"reservation sent successfully"
    })
  } catch (error) {

     if(error.name=== "ValidationError"){
        const ValidationError = Object.values(error.errors).map(
            (err)=>err.message
        );
        return next(new ErrorHandler(ValidationError.join(", "), 400))  // ✅ correct
      }

    
  }
 
}


// explaination about try and cath code
 //              |
 //              |
 
// ✅ try Block — What’s happening?
// Line:
// js
// Copy code
// await Reservation.create(firstName, lastName, email, phone, time, date);
// 👉 This tries to create a reservation using the data provided.

// If the data is correct → reservation is saved in DB.

// If data is wrong (like email is missing) → it throws a ValidationError.

// Line:
// js
// Copy code
// res.status(200).json({
//   success: true,
//   message: "reservation sent successfully"
// });
// 👉 If reservation creation succeeds, you send a success response to the client.

// ❌ catch Block — What happens if there’s an error?
// Now let’s explain this step by step.

// Line:
// js
// Copy code
// if (error.name === "ValidationError") {
// 👉 You're checking:

// Did the error come from wrong or missing input?

// Mongoose throws ValidationError if the data doesn’t follow the schema.

// Line:
// js
// Copy code
// const ValidationError = Object.values(error.errors).map(
//   (err) => err.message
// );
// 👉 This line collects all individual error messages and puts them into an array.

// Example:
// If two fields are missing, this becomes:

// js
// Copy code
// ["Email is required", "Phone number is invalid"]
// Line:
// js
// Copy code
// return next(ErrorHandler(ValidationError.join(", "), 400));
// 👉 This does 3 things:

// ValidationError.join(", ") makes one string like:

// arduino
// Copy code
// "Email is required, Phone number is invalid"
// ErrorHandler(...) creates a custom error with that message and status code 400 (Bad Request).

// next(...) sends the error to your errorMiddleware to handle and send the response.

// ✅ Final Output to User (from middleware):
// The client gets a response like:

// json
// Copy code
// {
//   "success": false,
//   "message": "Email is required, Phone number is invalid"
// }
// 🔁 Summary of Flow:
// Try to create a reservation.

// If there's a validation error, catch it.

// Collect error messages.

// Send them using ErrorHandler to your errorMiddleware.

// Your global middleware sends a clean error response.