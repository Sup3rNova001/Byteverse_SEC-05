import {
  REC_PRODUCT_LIST_REQUEST,
  REC_PRODUCT_LIST_SUCCESS,
  REC_PRODUCT_LIST_FAIL,
} from "../constants/recproductConstants";

export const recproductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case REC_PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case REC_PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };
    case REC_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
