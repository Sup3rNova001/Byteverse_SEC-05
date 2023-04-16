import  express  from "express";
const router = express.Router();

import{
    getRecProducts
} from "../controllers/recproductController.js"

router.route('/').get(getRecProducts).post()