import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";

// @desc    Fetch all products
// @route   GET /api/recproducts
// @access  Public

const getRecProducts = asyncHandler(async (req, res) => {
//   const pageSize = 10;
//   const page = Number(req.query.pageNumber) || 1;

//   const keyword = req.query.keyword
//     ? {
//         name: {
//           $regex: req.query.keyword,
//           $options: "i",
//         },
//       }
//     : {};

//   const count = await Product.countDocuments({ ...keyword });
//   const products = await Product.find({ ...keyword })
//     .limit(pageSize)
//     .skip(pageSize * (page - 1));

//   res.json({ products, page, pages: Math.ceil(count / pageSize) });
});