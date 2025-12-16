'use client';

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted", { email, message });
    alert("Thank you for reaching out! We'll get back to you shortly.");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-neutral-950 py-12 pt-36 relative">
 
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Have a question about our music courses? Need help with enrollment? 
          Send us a message and our team will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-neutral-300"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-neutral-300"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-8 py-3 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}