import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/testimonial.module.css";

const TestimonialItem = ({ feedBack }) => (
  <div className={`${classes.testimonial__item}`}>
    <div className={`${classes.testimonial__client}`}>
      <Image
        alt={feedBack.name}
        src={
          feedBack.userImage ??
          "https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Favatar.png&w=80&fit=cover&h=80&q=70&output=webp"
        }
        width="50"
        height="50"
        className={`${classes.testimonial__client_Avatar} rounded-2`}
      />

      <div>
        <h6>{feedBack.name}</h6>

        <h6>
          <Link
            aria-label={feedBack.course.title}
            target="_blank"
            href={feedBack.course.liveUrl}
          >
            {feedBack.course.title}
          </Link>
        </h6>
      </div>
    </div>
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <i key={index} style={{ color: "#FFD700" }} className="ri-star-fill" />
      ))}
    <p style={{ fontSize: "20px" }}>{feedBack.content}</p>
  </div>
);

export default TestimonialItem;
