import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";

// @desc    Fetch all products
// @route   GET /api/recproducts
// @access  Public

export const getRecProducts = asyncHandler(async (req, res) => {
  const { email, password } = req.query.userInfo || {
    email: "amandalal56386@gmail.com",
    password: "aman123",
  };
  const user = await User.findOne({ email });
  // console.log(user);
  if (user) {
    const orders = await Order.find({ user });
    // console.log(orders);

    orders
      ? orders.forEach(async (order) => {
          let orderitems = order.orderItems;
          // console.log(orderitems);
          orderitems
            ? orderitems.forEach(async (orderitem) => {
                let pro = await Product.find({ name: orderitem.name });
                res.json(pro);
              })
            : console.log("No products");
        })
      : console.log("No products bought");

    // console.log("products------", products);
  }
  
});
