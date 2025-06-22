import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [3, "First name must contain at least 3 characters"],
    maxlength: [30, "First name cannot exceed 30 characters"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [3, "Last name must contain at least 3 characters"],
    maxlength: [30, "Last name cannot exceed 30 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Provide a valid email"],
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: function (v) {
        return /^\d{11}$/.test(v); // Exactly 11 digits
      },
      message: "Phone number must be exactly 11 digits",
    },
  },
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
