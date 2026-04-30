import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "../data/personal";
import { socials } from "../data/socials";
import { cardVariants, staggerContainer } from "../animations/variants";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Button from "./ui/Button";

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

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailto = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact">
      <SectionHeader
        title="Contact"
        subtitle="Feel free to reach out if you’d like to collaborate, discuss ideas, or just say hi!"
        className="text-center mb-12"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.2, 0.05)}
        className="grid md:grid-cols-2 gap-10"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-6">
          {socials.map((item) => (
            <Card
              as="a"
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 block text-center"
              variants={cardVariants}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-200">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

        <Card
          as="form"
          onSubmit={handleSubmit}
          className="p-8 flex flex-col gap-5"
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
        >
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your Name"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-accent transition-all"
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Your Email"
            type="email"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-accent transition-all"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Your Message"
            rows="4"
            className="bg-transparent border border-gray-700 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:border-accent transition-all resize-none"
          />
          {error && <p className="text-sm text-gray-300">{error}</p>}
          <Button
            as="button"
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Send Message
          </Button>
        </Card>
      </motion.div>
    </Section>
  );
};

export default Contact;
