import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice"
import customerReducer from '../features/customers/customerSlice';
import productReducer from '../features/product/productSlice'

import pCategoryReducer from "../features/pcategory/pcategorySlice"
import blogReducer from "../features/blog/blogSlice"
import bCategoryReducer from "../features/bcategory/bcategorySlice"

import enquiryReducer from "../features/enquiry/enquirySlice"
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupon/couponSlice";
export const store = configureStore({
  reducer: {
auth :authReducer , customer: customerReducer , product: productReducer,
 pCategory : pCategoryReducer, blogs: blogReducer, bCategory :bCategoryReducer,
 enquiry :enquiryReducer,    upload: uploadReducer,  coupon: couponReducer,
  },
});
