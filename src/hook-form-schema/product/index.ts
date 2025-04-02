import * as yup from "yup";
export const updateProductsSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup.number().required("Price is required"),
});