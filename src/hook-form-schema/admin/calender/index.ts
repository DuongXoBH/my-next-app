import * as yup from "yup";

export const createNewEventSchema = yup.object({
  image: yup
    .mixed<FileList>()
    .required("Bạn cần chọn một ảnh."),
  eventName: yup.string().required("Event Name is required"),
  time: yup.string().required("Time is required"),
  date: yup.string().required("Date is required"),
  contactNumber: yup
    .string()
    .matches(/^[0-9]{10,15}$/, "Invalid phone number")
    .required("Phone Number is required"),
  address: yup.string().required("Address is required"),
});