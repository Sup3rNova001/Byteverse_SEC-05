import axios from "axios";
import {
  REC_PRODUCT_LIST_REQUEST,
  REC_PRODUCT_LIST_SUCCESS,
  REC_PRODUCT_LIST_FAIL,
} from "../constants/recproductConstants";

export const listRecProducts =
  (userInfo) =>
  async (dispatch) => {
    try {
      dispatch({ type: REC_PRODUCT_LIST_REQUEST });
        
      const { data } = await axios.get(
        `/api/recproduct?userInfo=${userInfo.json()}`
      );

      dispatch({
        type: REC_PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REC_PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
