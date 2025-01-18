import mongoose, { Schema, model } from "mongoose";

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 1,
  },
  phone: String,
  address: String,
  postalCode: Number,
  date: Date,
  products: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

//gpt suggestion(Worked on my machine):
const Customer = mongoose.models.Customer || model("Customer", customerSchema);

export default Customer;

//Milad suggestion(Didn't work on my machine):
// const Customer = models.customer || model("Customer", customerSchema);
