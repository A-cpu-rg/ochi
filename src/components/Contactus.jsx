import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contactus() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    goal: "",
    date: "",
    budget: "",
    email: "",
    privacyPolicy: false,
  });
  const lineRefTop = useRef(null);
  const lineRefBottom = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-lineGrow");
          } else {
            entry.target.classList.remove("animate-lineGrow");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (lineRefTop.current) {
      observer.observe(lineRefTop.current);
    }
    if (lineRefBottom.current) {
      observer.observe(lineRefBottom.current);
    }

    return () => {
      if (lineRefTop.current) {
        observer.unobserve(lineRefTop.current);
      }
      if (lineRefBottom.current) {
        observer.unobserve(lineRefBottom.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, company, goal, date, budget, email, privacyPolicy } =
      formData;

    if (
      !name ||
      !company ||
      !goal ||
      !date ||
      !budget ||
      !email ||
      !privacyPolicy
    ) {
      toast.error("Please complete the form!");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#18181B] p-4 text-white">
        <div className="animate-blast text-4xl md:text-5xl lg:text-6xl font-bold">
          Thank you for your inquiry!
        </div>
      </div>
    );
  }

  return (
    <div id="contactUs">
      <ToastContainer />
      <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#28313b] via-[#485461] to-[#0b8793] p-6 text-white">
        <div
          className="w-full border-dotted border-b-2 border-white animate-lineGrow"
          ref={lineRefTop}
        ></div>
        <div className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-8 font-['Test_Founders_Grotesk_X-Condensed']">
          LET'S START A PROJECT TOGETHER
        </div>

        <form
          className="w-full max-w-2xl bg-white text-black p-8 rounded-lg shadow-xl space-y-6"
          onSubmit={handleSubmit}
        >
          <p className="text-lg font-medium text-gray-700 mb-4">
            Please fill out the form below to get started:
          </p>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                Hi! My name is
              </label>
              <input
                className="bg-gray-50 border-2 border-gray-200 text-black placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition-all duration-300 w-full"
                placeholder="Enter your name*"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                and I work with
              </label>
              <input
                className="bg-gray-50 border-2 border-gray-200 text-black placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition-all duration-300 w-full"
                placeholder="Company name type here*"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                I'm looking for a partner to help me with
              </label>
              <input
                className="bg-gray-50 border-2 border-gray-200 text-black placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition-all duration-300 w-full"
                placeholder="Your goal type here*"
                type="text"
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                With an idea of having that completed by
              </label>
              <input
                className="bg-gray-50 border-2 border-gray-200 text-black placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition-all duration-300 w-full"
                placeholder="Date*"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                I am hoping to stay around a budget range of
              </label>
              <select
                className="bg-gray-50 border-2 border-gray-200 text-black rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition-all duration-300 w-full"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
              >
                <option value="">Select*</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                You can reach me at
              </label>
              <input
                className="bg-gray-50 border-2 border-gray-200 text-black placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition-all duration-300 w-full"
                placeholder="name@example.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600">
                Optionally, I'm sharing more:
              </label>
              <textarea
                className="bg-gray-50 border-2 border-gray-200 text-black placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition-all duration-300 w-full"
                placeholder="Product details type here..."
                name="details"
                value={formData.details}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleInputChange}
                className="accent-blue-500"
              />
              <span className="ml-2 text-sm font-semibold text-gray-600">
                I agree with the Privacy Policy
              </span>
            </div>

            <button
              type="submit"
              className="mt-6 py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto"
            >
              SEND INQUIRY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
