import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    }
    console.log(data)
    try {
      const response = await axios.post("/api/contact", data);
      if (response.status === 200) {
        setSubmitted(true)
        console.log("Form submitted")
      } else {
        console.log("Failed")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" className={`${classes.contact} flex m-5`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Planet Earth 🌍</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>piyushgarg.dev@gmail.com</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link
                aria-label="Youtube Channel"
                href="https://youtube.com/@piyushgargdev"
              >
                <i className="ri-youtube-line"></i>
              </Link>
              <Link
                aria-label="Github Profile"
                href="https://github.com/piyushgarg-dev"
              >
                <i className="ri-github-line"></i>
              </Link>
              <Link
                aria-label="Twitter Account"
                href="https://twitter.com/piyushgarg_dev"
              >
                <i className="ri-twitter-line"></i>
              </Link>
              <Link
                aria-label="LinedIn Account"
                href="https://www.linkedin.com/in/piyushgarg195/"
              >
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
      <Container>
        {submitted ? (
          <div className="flex justify-center items-center text-xl font-bold h-[30vh]">
            <p>Message Sent!</p>
          </div>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              className="border border-gray-300 bg-transparent px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:rgba(77, 181, 255, 0.4) text-white"
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              autoComplete="off"
            />
            <input
              className="border border-gray-300 bg-transparent px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:[rgba(77, 181, 255, 0.4)] text-white"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="off"
            />
            <textarea
              className="border border-gray-300 bg-transparent px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:rgba(77, 181, 255, 0.4) text-white"
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              autoComplete="off"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>

        )}

      </Container>
    </section>
  );
};

export default Contact;
