// import mongoose
import mongoose from "mongoose";
// Buat Schema
const Customer = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    man: {
      type: String,
      required: false,
    },
    women: {
      type: String,
      required: false,
    },
  },
  is_married: {
    type: Boolean,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Customers", Customer);
