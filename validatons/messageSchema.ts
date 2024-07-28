import * as yup from "yup";

export const messageSchema = yup.object({
  firstName: yup.string().required("First Name is required").min(1).max(50),
  lastName: yup.string().min(1).max(50),
  email: yup.string().required("Email is required").email(),
  formMessage: yup.string().required("Message is required").min(3).max(350),
});

export type MessageSchemaType = yup.InferType<typeof messageSchema>;
