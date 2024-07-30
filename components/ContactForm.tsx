"use client";

import React, { useState } from "react";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  formMessage: string;
};

const ContactForm: FC = () => {
  const [hideForm, setHideForm] = useState(false);

  const FormDataSchema: ZodType = z.object({
    firstName: z.string().trim().min(1, {
      message: "First name is required.",
    }),
    lastName: z.string().trim().optional(),
    email: z.string().trim().email({
      message: "Invalid email address.",
    }),
    formMessage: z.string().trim().min(1, { message: "Message is required." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormDataSchema),
  });

  const submitData: SubmitHandler<FormData> = (data) => {
    console.log("it worked!", data);
    sendEmail(data);

    if (data) {
      toast("⚡️ Submission successful!");
      setHideForm(true);
    }
  };

  return (
    <div className="flex flex-col smphone:w-5/6 tablet:w-3/5 desktop:w-1/2 mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        // className="flex flex-col w-5/6 h-64 mx-auto justify-center justify-items-center rounded bg-sky-950/75"
        className={`${
          hideForm !== true
            ? `invisible h-0`
            : `visible flex flex-col mt-4 w-5/6 h-64 mx-auto justify-center justify-items-center rounded bg-sky-950/75`
        }`}
      >
        <p className="text-5xl font-bold text-center">THANK YOU!</p>
        <p className="text-xl text-center mt-6">
          I will get back to you within the next 2-3 busines days.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(submitData)}
        className={`${
          hideForm === true ? `invisible` : `visible flex flex-col mt-0`
        }`}
      >
        <div className="flex flex-row smphone:flex-col laptop:flex-row">
          <div className="flex flex-col p-4 w-1/2 smphone:w-full smphone:p-2 laptop:p-4">
            <label className="text-xl">First Name</label>
            <input
              className="rounded required border border-slate-300 text-lg text-slate-600 focus:border-[#7AF98A] focus:border-2 focus:ring-[#7AF98A] invalid:border-2 invalid:border-[#de45e9] invalid:ring-[#de45e9]"
              type="text"
              {...register("firstName")}
            />
            <span className="text-red-500 mt-1">
              {errors.firstName?.message}
            </span>

            {/* {errors.firstName && (
              <span className="mt-2 text-[#de45e9]">REQUIRED</span>
            )} */}
          </div>
          <div className="flex flex-col p-4 w-1/2 smphone:w-full smphone:p-2 laptop:p-4">
            <label className="text-lg">Last Name</label>
            <input
              type="text"
              className="rounded required border border-slate-300 text-lg text-slate-600 focus:border-[#7AF98A] focus:border-2 focus:ring-[#7AF98A] invalid:border-2 invalid:border-[#de45e9] invalid:ring-[#de45e9]"
              {...register("lastName")}
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-4 mx-auto smphone:p-2 laptop:p-4">
          <label className="text-lg">Email</label>
          <input
            type="email"
            className="rounded required border border-slate-300 text-lg text-slate-600 focus:border-[#7AF98A] focus:border-2 focus:ring-[#7AF98A] invalid:border-2 invalid:border-[#de45e9] invalid:ring-[#de45e9]"
            {...register("email")}
          />
          <span className="text-red-500 mt-1">{errors.email?.message}</span>
        </div>
        <div className="flex flex-col p-4 smphone:p-2 laptop:p-4">
          <label className="text-lg">What can I help you with?</label>
          <textarea
            className="w-full h-36 rounded required border border-slate-300 text-lg text-slate-600 focus:border-[#7AF98A] focus:border-2 focus:ring-[#7AF98A] invalid:border-2 invalid:border-[#de45e9] invalid:ring-[#de45e9] align-top"
            {...register("formMessage")}
          />
          <span className="text-red-500 mt-1">
            {errors.formMessage?.message}
          </span>
        </div>
        <div className="flex flex-row">
          <button
            type="submit"
            className="border border-[#00FFF5] rounded p-2 w-1/5 smphone:w-3/4 tablet:w-1/3 mx-auto text-2xl text-[#00FFF5] font-semibold shadow-bluebtn hover:scale-105 hover:border-[#7AF98A] hover:text-[#7AF98A] hover:shadow-greenbtn transition duration-150 ease-in-out"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
