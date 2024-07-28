"use client";

import React from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { messageSchema, MessageSchemaType } from "@/validatons/messageSchema";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

// const schema = yup.object({
//   firstName: yup.string().required(),
//   lastName: yup.string(),
//   email: yup.string().required(),
//   message: yup.string().required(),
// });

const ContactForm: FC = () => {
  // const { register, handleSubmit } = useForm<FormData>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageSchemaType>({
    resolver: yupResolver(messageSchema),
  });

  const onSubmit = (data: MessageSchemaType) => {
    console.log(data);
    sendEmail(data);
    // toast("Submission successful! ⚡️", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
  };

  // function onSubmit(data: FormData) {
  //   sendEmail(data);
  //   console.log(data);
  // }

  return (
    <div className="flex flex-col smphone:w-5/6 tablet:w-3/5 desktop:w-1/2 mx-auto">
      {/* <ToastContainer
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
        transition={Bounce}
      /> */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4">
        <div className="flex flex-row smphone:flex-col laptop:flex-row">
          <div className="flex flex-col p-4 w-1/2 smphone:w-full smphone:p-2 laptop:p-4">
            <label className="text-xl">First Name</label>
            <input
              className="rounded required border border-slate-300 text-lg text-slate-600 focus:border-[#7AF98A] focus:border-2 focus:ring-[#7AF98A] invalid:border-2 invalid:border-[#de45e9] invalid:ring-[#de45e9]"
              type="text"
              {...register("firstName", { required: true })}
            />
            <span className="text-[#de45e9] mt-1">
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
            {...register("email", { required: true })}
          />
          <span className="text-[#de45e9] mt-1">{errors.email?.message}</span>
        </div>
        <div className="flex flex-col p-4 smphone:p-2 laptop:p-4">
          <label className="text-lg">What can I help you with?</label>
          <textarea
            className="w-full h-36 rounded required border border-slate-300 text-lg text-slate-600 focus:border-[#7AF98A] focus:border-2 focus:ring-[#7AF98A] invalid:border-2 invalid:border-[#de45e9] invalid:ring-[#de45e9] align-top"
            {...register("formMessage", { required: true })}
          />
          <span className="text-[#de45e9] mt-1">
            {errors.formMessage?.message}
          </span>
        </div>
        <div className="flex flex-row">
          <button
            type="submit"
            className="border border-[#00FFF5] rounded p-2 w-1/5 mx-auto text-2xl text-[#00FFF5] font-semibold shadow-bluebtn hover:scale-105 hover:border-[#7AF98A] hover:text-[#7AF98A] hover:shadow-greenbtn transition duration-150 ease-in-out"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
