import * as yup from "yup";

export const createNewContactSchema = yup.object({
  image: yup
    .mixed<FileList>()
    .required("Bạn cần chọn một ảnh."),
    // .test("fileType", "Chỉ chấp nhận các định dạng JPEG, PNG, WEBP.", (value) => {
    //   return (
    //     value &&
    //     value instanceof FileList &&
    //     ["image/jpeg", "image/png", "image/webp"].includes(value[0]?.type)
    //   );
    // }),
    // .test("fileSize", "Kích thước ảnh tối đa 2MB.", (value) => {
    //   return value && value[0]?.size <= 2 * 1024 * 1024;
    // }),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, "Invalid phone number")
    .required("Phone Number is required"),
  birth: yup.string().required("Date of Birth is required"),
  gender: yup.string().required("Gender is required"),
});

export const editContactSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Email không hợp lệ").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, "Số điện thoại không hợp lệ")
    .required("Phone Number is required"),
  birth: yup.string().required("Date of Birth is required"),
});
