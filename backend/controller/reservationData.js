import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body || {};

  // ✅ Basic input validation
  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandler("Please fill the full reservation form", 400));
  }

  try {
    // ✅ Try to create the reservation
    await Reservation.create({ firstName, lastName, email, phone, time, date });

    // ✅ Success response
    return res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });

  } catch (error) {
    // ❌ Validation error (from Mongoose)
    if (error.name === "ValidationError") {
      const validationMessages = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationMessages.join(", "), 400));
    }

    // ❌ Any other error (e.g. DB down)
    return next(new ErrorHandler("Something went wrong while saving reservation", 500));
  }
};
