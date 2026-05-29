"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Required fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone validation
    if (formData.phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedData(formData);

        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <main className="bg-[#f7f5ee] min-h-screen">
      {/* HERO */}
      <section className="bg-green-950 text-white px-6 md:px-20 py-24 text-center">
        <p className="text-yellow-500 font-bold tracking-[4px] uppercase">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6">Let’s Connect</h1>

        <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto leading-9">
          Have questions about our products, dealership, or wholesale orders?
          Our team is ready to help you.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-green-900 mb-10">
              Get In Touch
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-yellow-700 font-bold uppercase tracking-[3px]">
                  Phone
                </p>

                <p className="text-2xl text-gray-800 mt-2">+91 8349004074</p>
              </div>

              <div>
                <p className="text-yellow-700 font-bold uppercase tracking-[3px]">
                  Email
                </p>

                <p className="text-2xl text-gray-800 mt-2">info@didymous.org</p>
              </div>

              <div>
                <p className="text-yellow-700 font-bold uppercase tracking-[3px]">
                  Address
                </p>

                <p className="text-xl text-gray-800 mt-2 leading-8">
                  Plot No. 176,177,188,189, New Industrial Area-II,
                  <br />
                  Mandideep-462046 Raisen, Madhya Pradesh
                  <br />
                  India
                </p>
              </div>
            </div>

            {/* WHATSAPP BUTTON */}
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-[30px] shadow-xl p-6 md:p-8 max-w-xl mx-auto h-fit w-full">
            <h2 className="text-3xl font-bold text-green-900 mb-10">
              Send Inquiry
            </h2>
            {!submitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:border-green-700 placeholder:text-gray-500 text-black"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:border-green-700 placeholder:text-gray-500 text-black"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:border-green-700 placeholder:text-gray-500 text-black"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:border-green-700 placeholder:text-gray-500 text-black"
                />

                <button
                  type="submit"
                  className="w-full bg-green-900 hover:bg-green-800 transition text-white py-3 rounded-2xl text-lg font-bold"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="bg-green-100 text-green-900 px-6 py-4 rounded-2xl font-semibold">
                  ✅ Inquiry submitted successfully
                </div>

                <p className="mt-4 text-gray-700">
                  Thank you for contacting us.
                  <br />
                  Our team will get back to you shortly.
                </p>

                <a
                  href={`https://wa.me/918349004074?text=${encodeURIComponent(
                    `Hello, I submitted an inquiry through the Didymous website.

Name: ${submittedData.name}
Email: ${submittedData.email}
Phone: ${submittedData.phone}

Message:
${submittedData.message}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-green-600 hover:bg-green-700 transition text-white px-8 py-4 rounded-2xl font-bold"
                >
                  Continue on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
