import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "../data/personal";
import { socials } from "../data/socials";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill all fields.";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      return "Please enter a valid email.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    // trigger email
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailto = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    // reset
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-28 max-w-6xl mx-auto min-h-[100vh]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-orange-400 mb-3 text-center"
      >
        Contact
        <p className="text-gray-300 text-lg mb-14">
          Feel free to reach out if you’d like to collaborate, discuss ideas, or just say hi!
        </p>
      </motion.h2>

      {/* --- Grid Layout --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.05 },
          },
        }}
        className="grid md:grid-cols-2 gap-10"
      >
        {/* --- Left: Contact Cards --- */}
        <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-6">
          {socials.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="bg-[#0D1117]/70 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:border-orange-400 block text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-200">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* --- Right: Contact Form --- */}
        <motion.form
          onSubmit={handleSubmit}
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="bg-[#0D1117]/70 backdrop-blur-md border border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:border-orange-400 flex flex-col gap-5"
        >
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your Name"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-orange-400 transition-all"
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Your Email"
            type="email"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-orange-400 transition-all"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Your Message"
            rows="4"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-orange-400 transition-all resize-none"
          />
          {error && <p className="text-sm text-gray-300">{error}</p>}
          <button
            type="submit"
            className="bg-orange-500 py-3 rounded-md font-semibold text-black text-lg font-semibold bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_20px_rgba(255,140,0,0.25)] hover:shadow-[0_0_30px_rgba(255,140,0,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact