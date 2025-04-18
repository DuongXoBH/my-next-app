import * as yup from "yup";
export const settingsSchema = yup.object().shape({
  image: yup.mixed<FileList>().required("Bạn cần chọn một ảnh."),
  name: yup.string().required("Name is required"),
  copyRight: yup.string().required("Copy Right is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  keywords: yup.string().required("Keywords is required"),
});
