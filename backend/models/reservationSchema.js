import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "first name must contain at least 3 characters"],
    maxLength: [30, "first name cannot exceed 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "last name must contain at least 3 characters"],
    maxLength: [30, "last name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "provide a valid email"], // Corrected 'valid' to 'validate'
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "phone number must contain exactly 11 digits"], // Corrected message
    maxLength: [11, "phone number must contain exactly 11 digits"], // Corrected message
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);