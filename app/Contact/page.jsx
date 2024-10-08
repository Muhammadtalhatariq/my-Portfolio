"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const page = () => {
  const form = useRef();

  const notify = () => toast.success('Submmited Successful', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",

  });


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8bctyks",
        "template_4mo5bkh",
        form.current,
        "Dq1TUMR0L7xyOgEjE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-10 " id="Contact">
      <div className="flex flex-wrap ">
        <div className="sm:w-[55%] p-4 m-auto">
          <p data-aos="fade-down" className="font-bold text-3xl sm:text-4xl p-2 text-center sm:text-start ">
            Contacts Me
          </p>
          <p data-aos="fade-up" className="text-center sm:text-start text-xl sm:text2xl leading-10 tracking-tight">
            Currently, I am looking for new opportunities to apply my skills and
            experience in different domains. My inbox is always open for any
            inquiries, feedback, or collaboration requests. You can reach me at
            my email address or follow me on my social media accounts. I would
            love to hear from you and explore new possibilities together.
          </p>
          <div className="flex justify-center sm:justify-start">
            <a data-aos="fade-up"
            data-aos-delay='200'
              href="https://www.linkedin.com/in/muhammad-talha-708166284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-125"
            >
              <FaLinkedin size={30} />
            </a>

            <a data-aos="fade-up"
              data-aos-delay='400'
              href="https://github.com/Muhammadtalhatariq/"
              target="_blank"
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-125"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div className="sm:w-[45%] w-full  px-4 sm:pt-32 pb-10">
          <form
            className="flex flex-col gap-4 p-4 "
            ref={form}
            onSubmit={sendEmail}
          >
            <label data-aos="fade-down" >Name</label>
            <input
              data-aos="fade-up"
              className="p-2 border-gray-300 border-dotted border-4"
              type="text"
              name="user_name"
            />
            <label data-aos="fade-down">Email</label>
            <input
              data-aos="fade-up"
              className="p-2 border-gray-300 border-dotted border-4"
              type="email"
              name="user_email"
            />
            <label data-aos="fade-down">Message</label>
            <textarea
              data-aos="fade-up"
              className="p-2 border-gray-300 border-dotted border-4"
              name="message"
            />
            <input
              onClick={notify}
              className=" bg-gray-200 items-center w-24 hover:bg-slate-400 hover:scale-110 rounded-lg p-2"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default page;
