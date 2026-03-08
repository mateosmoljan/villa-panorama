"use client";
import React, { FormEvent, useRef, useState } from "react";
import HolidayHome from "./Inputs/HolidayHome";
import Adults from "./Inputs/Adults";
import Children from "./Inputs/Children";
import { IoIosSend } from "react-icons/io";
import DataRangeComponent from "./Inputs/DateRangeComponent";
import emailjs from "@emailjs/browser";
import "./style.css";

function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    if (formData.get("invalidRange") === "true") {
      alert("Selected dates include unavailable dates. Please choose different dates.");
      return;
    }

    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 10000);

    emailjs
      .sendForm("service_m5qzdsw", "template_zep0zp8", form.current, {
        publicKey: "BdpxxwkLBQvz91RXx",
      })
      .then(() => {
        form.current?.reset();
      })
      .catch(() => undefined);
  };

  return (
    <div className="rounded-md px-6 py-8 custom_border shadow-md bg-gray-100">
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <label className="mb-1 block text-sm font-Bold">Name</label>
            <input required name="from_name" className="w-full bg-white rounded-md border border-gray-300 h-10 px-3" />
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <label className="mb-1 block text-sm font-Bold">Email</label>
            <input required name="user_email" type="email" className="w-full bg-white rounded-md border border-gray-300 h-10 px-3" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <label className="mb-1 block text-sm font-Bold">Phone</label>
            <input required name="phone" type="tel" className="w-full bg-white rounded-md border border-gray-300 h-10 px-3" />
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <HolidayHome />
          </div>
        </div>

        <div className="flex items-end mb-4">
          <div className="w-1/2 px-2">
            <Adults />
          </div>
          <div className="w-1/2 px-2">
            <Children />
          </div>
        </div>

        <DataRangeComponent />

        <div className="flex w-full mb-4 px-2">
          <div className="w-full">
            <label className="mb-1 block text-sm font-Bold">Inquiry</label>
            <textarea required rows={5} name="message" className="bg-white w-full rounded-md border border-gray-300 p-3" />
          </div>
        </div>

        <p className="text-xs mb-4 text-grey3">
          The content of this form will be sent directly to the e-mail address of the owner of accommodation and is used exclusively for sending inquiries about booking of listed property.
        </p>

        <div className="px-4">
          <button
            type="submit"
            className={`${messageSent ? "bg-[#EDF7ED]" : "!bg-yellow hover:bg-yellow"} w-full tracking-widest text-base font-Bold py-3 rounded-md flex items-center justify-center gap-2`}
          >
            {messageSent ? "Successfully sent" : <><span>Send Inquiry</span><IoIosSend className="text-2xl" /></>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
