import * as yup from "yup";

export const createMailSchema =(t : (key: string) => string) => yup.object().shape({
  to: yup.string()
  .required(t("to-required"))
  .email(t("mail-format")),
  subject: yup.string().required(t("subject-required")),
  content: yup.string().required(t("content-required")),
});