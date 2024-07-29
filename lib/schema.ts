import { z } from "zod";

export const FormDataSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: "First name is required.",
  }),
  lastName: z.string().trim(),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  formMessage: z.string().trim().min(1, { message: "Message is required." }),
});
