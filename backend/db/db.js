const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://satya07thota:MJmaR2gI7DvgOm2d@cluster0.avmsmqf.mongodb.net/",  
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("Database connected successfully");
}).catch((err) => {
  console.error("Database connection error:", err);
});


// Owner Schema
const ownerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],
});

// Customer Schema
const customerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  carts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cart" }],
});

// Restaurant Schema
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "Owner", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
});

// Menu Schema
const menuSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  isVegetarian: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Order Schema
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["PENDING", "COMPLETED"], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create models
const Owner = mongoose.model("Owner", ownerSchema);
const Customer = mongoose.model("Customer", customerSchema);
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
const Menu = mongoose.model("Menu", menuSchema);
const Cart = mongoose.model("Cart", cartSchema);
const Order = mongoose.model("Order", orderSchema);
module.exports = {
  Owner,
  Customer,
  Restaurant,
  Menu,
  Cart,
  Order,
};
