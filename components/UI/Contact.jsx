import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import axios from "axios";
import {
  RiYoutubeFill, RiGithubFill, RiLinkedinFill,
  RiMailLine, RiMapPinLine, RiSendPlaneFill,
  RiCustomerService2Fill
} from "react-icons/ri";
import { motion } from "framer-motion";
import NewTwitterLogo from "./NewTwitterlogo";

// Animation Presets
const fadeIn = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};
const buttonAnim = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { name, email, message } = e.target;
      await axios.post("/api/contact", {
        name: name.value,
        email: email.value,
        message: message.value,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Social Links
  const socials = [
    { href: "https://youtube.com/@piyushgargdev", icon: <RiYoutubeFill size={16} />, color: "hover:text-[#FF0000]" },
    { href: "https://github.com/piyushgarg-dev", icon: <RiGithubFill size={16} />, color: "hover:text-white" },
    { href: "https://twitter.com/piyushgarg_dev", icon: <NewTwitterLogo size={16} />, color: "hover:text-[#1DA1F2]" },
    { href: "https://www.linkedin.com/in/piyushgarg195/", icon: <RiLinkedinFill size={16} />, color: "hover:text-[#0A66C2]" },
  ];

  return (
    <section id="contact" className={`${classes.contact} py-12`}>
      <Container>
        <Row className="flex flex-col md:flex-row justify-between items-center">

          {/* --- Contact Info --- */}
          <Col lg="5" md="6" className="mb-6 md:mb-0">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <h3 className="flex items-center text-2xl font-bold text-white mb-4">
                <RiCustomerService2Fill className="mr-2 text-[#01d293]" /> Connect with me
              </h3>

              <ul className="space-y-3 mb-5">
                <motion.li variants={fadeIn} className="flex items-center p-3 rounded-lg bg-[#1e293b]/50 backdrop-blur-sm border-l-4 border-[#01d293]">
                  <RiMapPinLine className="mr-3 text-[#01d293]" size={18} />
                  <p className="text-gray-300 text-sm">Planet Earth 🌍</p>
                </motion.li>
                <motion.li variants={fadeIn} className="flex items-center p-3 rounded-lg bg-[#1e293b]/50 backdrop-blur-sm border-l-4 border-[#01d293]">
                  <a href="mailto:piyushgarg.dev@gmail.com" className="flex items-center text-gray-300 hover:text-[#01d293] text-sm">
                    <RiMailLine className="mr-3 text-[#01d293]" size={18} />
                    piyushgarg.dev@gmail.com
                  </a>
                </motion.li>
              </ul>

              <p className="text-gray-400 text-sm mb-2">Follow me on:</p>
              <div className="flex space-x-3">
                {socials.map(({ href, icon, color }, i) => (
                  <motion.div key={i} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={href}
                      target="_blank"
                      className={`flex items-center justify-center w-9 h-9 rounded-full bg-[#1e293b]/50 backdrop-blur-sm text-gray-400 transition-colors ${color}`}
                    >
                      {icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* --- Contact Form / Success --- */}
          <Col lg="6" md="6">
            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-[#171f38] to-[#1e293b] border border-[#2d3748] shadow-lg">
                <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5 }}
                  className="mb-3 text-4xl text-[#01d293]">✓</motion.div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="mt-2 text-gray-400 text-sm">I'll get back to you soon.</p>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 mt-4 text-sm text-white rounded-lg bg-[#01d293] hover:bg-[#02b580]">
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form onSubmit={handleSubmit}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                className="p-5 space-y-4 rounded-xl bg-gradient-to-br from-[#171f38] to-[#1e293b] border border-[#2d3748] shadow-lg">
                <SectionSubtitle subtitle="Get in touch" />
                <p className="text-gray-400 text-sm">Have a project in mind? Let's make it happen.</p>

                {["name", "email", "message"].map((field, i) =>
                  field === "message" ? (
                    <motion.textarea key={i} name={field} rows="3" required
                      placeholder="Your Message"
                      className="w-full px-4 py-2.5 text-sm text-white rounded-lg bg-[#171f38] border border-transparent focus:bg-[#1a223c] focus:border-[#01d293] focus:ring-2 focus:ring-[#01d293]/30"
                    />
                  ) : (
                    <motion.input key={i} type={field === "email" ? "email" : "text"} name={field} required
                      placeholder={`Your ${field === "name" ? "Full Name" : "Email"}`}
                      className="w-full px-4 py-2.5 text-sm text-white rounded-lg bg-[#171f38] border border-transparent focus:bg-[#1a223c] focus:border-[#01d293] focus:ring-2 focus:ring-[#01d293]/30"
                    />
                  )
                )}

                <motion.button type="submit" disabled={loading}
                  variants={buttonAnim} initial="initial" whileHover="hover" whileTap="tap"
                  className="flex items-center justify-center w-full px-5 py-2.5 text-sm text-white rounded-lg bg-gradient-to-r from-[#01d293] to-[#02b580] hover:from-[#02b580] hover:to-[#01d293] disabled:opacity-70">
                  {loading ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                  ) : <RiSendPlaneFill className="mr-2" size={14} />}
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
