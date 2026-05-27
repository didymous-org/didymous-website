"use client";

import { useState } from "react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState("");

  const jobs = [
    {
      title: "Sales Executive",
      location: "Tamil Nadu",
      experience: "Fresher / Experienced",
    },
    {
      title: "Factory Helper",
      location: "Local Area",
      experience: "Any",
    },
    {
      title: "Marketing Executive",
      location: "Remote / Office",
      experience: "1+ Years",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null as File | null,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const submitData = new FormData();

      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("position", selectedJob);
      submitData.append("message", formData.message);

      // Resume File
      if (formData.resume) {
        submitData.append("resume", formData.resume);
      }

      const response = await fetch("/api/send-application", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Application submitted successfully 😄");

        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          message: "",
          resume: null,
        });

        setSelectedJob("");
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
      {/* HERO SECTION */}
      <section className="bg-green-950 text-white px-6 md:px-20 py-24">
        <p className="text-yellow-500 font-bold tracking-[4px] uppercase">
          Careers at Tirumala
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
          Build Your Career <br /> With Us.
        </h1>

        <p className="text-lg text-gray-300 mt-8 max-w-3xl leading-9">
          Join our growing team and become part of a trusted wheat flour
          manufacturing company focused on quality, innovation, and growth.
        </p>
      </section>

      {/* JOB OPENINGS */}
      <section className="px-6 md:px-20 py-20">
        <div className="text-center mb-16">
          <p className="text-yellow-700 font-bold tracking-[4px] uppercase">
            Open Positions
          </p>

          <h2 className="text-5xl font-bold text-green-900 mt-4">
            We’re Hiring
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-4xl font-bold text-green-900">{job.title}</h3>

              <p className="mt-6 text-gray-700 text-lg">
                Location: {job.location}
              </p>

              <p className="mt-3 text-gray-700 text-lg">
                Experience: {job.experience}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedJob(job.title);

                  setTimeout(() => {
                    document
                      .getElementById("application-form")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 100);
                }}
                className="mt-8 bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      {selectedJob && (
        <section id="application-form" className="px-6 md:px-20 pb-24">
          <div className="max-w-3xl mx-auto bg-white rounded-[30px] shadow-xl p-8 md:p-10">
            <div className="text-center mb-14">
              <p className="text-yellow-700 font-bold tracking-[4px] uppercase">
                Apply Now
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mt-4">
                Submit Your Application
              </h2>

              <p className="mt-6 text-gray-600 text-lg">Applying for:</p>

              <div className="inline-block mt-4 bg-green-100 text-green-900 px-6 py-3 rounded-2xl font-bold text-xl">
                {selectedJob}
              </div>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
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
                  className="border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:border-green-700 placeholder:text-gray-500 text-black"
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
                  className="border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:border-green-700 placeholder:text-gray-500 text-black"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                  className="border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:border-green-700 placeholder:text-gray-500 text-black"
                />

                <input
                  type="text"
                  value={selectedJob}
                  readOnly
                  className="border border-gray-300 bg-gray-100 rounded-2xl px-6 py-3 outline-none text-black"
                />
              </div>

              <textarea
                placeholder="Tell us about yourself..."
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-2xl px-6 py-3 outline-none focus:border-green-700 placeholder:text-gray-500 text-black"
              />

              <div>
                <label className="block text-lg font-semibold text-green-900 mb-4">
                  Upload Resume
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e: any) =>
                    setFormData({
                      ...formData,
                      resume: e.target.files[0],
                    })
                  }
                  className="w-full border border-gray-300 rounded-2xl px-6 py-3"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-900 hover:bg-green-800 text-white py-3 rounded-2xl text-lg font-bold transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}
