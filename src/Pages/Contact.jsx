import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaXTwitter } from "react-icons/fa6"; // ✅ Import WhatsApp & X icons

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("subject", formData.subject);
      formDataObj.append("message", formData.message);
      formDataObj.append("access_key", "fbb63ae0-0d4c-4e2d-92a5-4282967f0268");
      formDataObj.append("redirect", "https://web3forms.com/success");

      const object = Object.fromEntries(formDataObj);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully!." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: `Failed to send: ${result.message || "Unknown error"}` });
      }
    } catch (err) {
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Desktop / Tablet */}
      <section className="hidden md:flex relative w-full min-h-screen bg-gradient-to-br from-[#012d36] via-[#02343f] to-[#034652] text-[#F0EDCC] overflow-hidden flex">
        {/* Sidebar (desktop) */}
        <aside className="flex flex-col w-1/4 border-r border-[#F0EDCC]/20 px-4 py-6">
          <h2 className="text-xl font-bold mb-6">Table of Content</h2>
          <nav className="flex flex-col gap-3">
            <a href="/about" className="hover:text-[#F0EDCC] transition">About</a>
            <a href="/poems" className="hover:text-[#F0EDCC] transition">Poems</a>
            <a href="/contact" className="hover:text-[#F0EDCC] transition">Contact</a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 px-6 py-10 md:py-20 flex justify-center items-center">
          <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-[#F0EDCC]/20 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Me</h2>
            <p className="text-[#e5e3c2] mb-8 text-center">
              You can reach out for collaborations, feedback , suggestion ,request or just to say wave your hands at me.
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 rounded-xl bg-white/20 border border-[#F0EDCC]/30 focus:outline-none focus:ring-2 focus:ring-[#F0EDCC] text-[#F0EDCC] placeholder-[#F0EDCC]/70 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 rounded-xl bg-white/20 border border-[#F0EDCC]/30 focus:outline-none focus:ring-2 focus:ring-[#F0EDCC] text-[#F0EDCC] placeholder-[#F0EDCC]/70 transition"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="p-3 rounded-xl bg-white/20 border border-[#F0EDCC]/30 focus:outline-none focus:ring-2 focus:ring-[#F0EDCC] text-[#F0EDCC] placeholder-[#F0EDCC]/70 transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="p-3 rounded-xl bg-white/20 border border-[#F0EDCC]/30 focus:outline-none focus:ring-2 focus:ring-[#F0EDCC] text-[#F0EDCC] placeholder-[#F0EDCC]/70 transition resize-none"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 px-6 py-3 bg-[#F0EDCC] text-[#02343f] font-semibold rounded-xl shadow-md hover:scale-105 transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p className={`text-sm mt-2 ${status.type === "error" ? "text-red-400" : "text-green-400"}`}>
                  {status.message}
                </p>
              )}
            </form>

            {/* ✅ Social Icons */}
            <div className="mt-10 text-center">
              <p className="mb-3 text-[#e5e3c2] text-sm">
                OR TRY THIS:
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://wa.me/qr/7A4U35SCTPLLK1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0EDCC] hover:text-green-400 transition"
                >
                  <FaWhatsapp size={28} />
                </a>
                <a
                  href="https://x.com/ReaperX771?t=PyL58tgxiy0Vi535zZF4NQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0EDCC] hover:text-blue-400 transition"
                >
                  <FaXTwitter size={28} />
                </a>
                 <a
                  href="mailto:control0177@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0EDCC] hover:text-red-400 transition"
                >
                  <FaEnvelope size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile / Small */}
      <section className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#012d36] via-[#02343f] to-[#034652] text-[#F0EDCC] py-27 overflow-x-hidden overflow-y-auto">
        <div className="relative z-10 w-full px-6 flex justify-center mt-37 items-center">
          <div className="w-full bg-white/10 backdrop-blur-md border border-[#F0EDCC]/20 rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
            <p className="text-base text-[#e5e3c2] mb-6 text-center">
              You can reach out for collaborations, feedback , suggestion ,request or just to say wave your hands at me.
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 rounded-xl bg-white/20 border border-[#F0EDCC]/30 focus:outline-none focus:ring-2 focus:ring-[#F0EDCC] text-[#F0EDCC] placeholder-[#F0EDCC]/70 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 rounded-xl bg-white/20 border border-[#F0EDCC]/30 focus:outline-none focus:ring-2 focus:ring-[#F0EDCC] text-[#F0EDCC] placeholder-[#F0EDCC]/70 transition"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="p-3 rounded-xl bg-white/20 border border-[#F0EDCC]/30 focus:outline-none focus:ring-2 focus:ring-[#F0EDCC] text-[#F0EDCC] placeholder-[#F0EDCC]/70 transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="p-3 rounded-xl bg-white/20 border border-[#F0EDCC]/30 focus:outline-none focus:ring-2 focus:ring-[#F0EDCC] text-[#F0EDCC] placeholder-[#F0EDCC]/70 transition resize-none"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 px-6 py-3 bg-[#F0EDCC] text-[#02343f] font-semibold rounded-xl shadow-md hover:scale-105 transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p className={`text-sm mt-2 ${status.type === "error" ? "text-red-400" : "text-green-400"}`}>
                  {status.message}
                </p>
              )}
            </form>

            {/* ✅ Social Icons */}
            <div className="mt-8 text-center">
              <p className="mb-3 text-[#e5e3c2] text-sm">
                OR TRY THIS:
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://wa.me/qr/7A4U35SCTPLLK1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0EDCC] hover:text-green-400 transition"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://x.com/ReaperX771?t=PyL58tgxiy0Vi535zZF4NQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0EDCC] hover:text-blue-400 transition"
                >
                  <FaXTwitter size={24} />
                </a>
                 <a
                  href="mailto:control0177@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0EDCC] hover:text-red-400 transition"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;