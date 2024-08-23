import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/testimonial.module.css";

const TestimonialItem = ({ feedBack }) => (
  <div className={`${classes.testimonial__item} transform transition duration-300 ease-in-out hover:shadow-xl hover:scale-105`}>
    <div className={`${classes.testimonial__client}`}>
      <Image
        alt={feedBack.name}
        src={
          feedBack.userImage ??
          "https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Fimages%2Favatar.png&w=80&fit=cover&h=80&q=70&output=webp"
        }
        width="50"
        height="50"
        className={`${classes.testimonial__client_Avatar} rounded-full`}
      />

      <div>
        <h6 className="font-semibold text-lg">{feedBack.name}</h6>

        <h6>
          <Link
            aria-label={feedBack.course.title}
            target="_blank"
            href={feedBack.course.liveUrl}
            className="text-blue-500 hover:underline"
          >
            {feedBack.course.title}
          </Link>
        </h6>
      </div>
    </div>
    <div className="flex mt-2 space-x-1">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <i key={index} style={{ color: "#FFD700" }} className="ri-star-fill" />
        ))}
    </div>
    <p className="mt-2 text-gray-700 text-base">{feedBack.content}</p>
  </div>
);

export default TestimonialItem;
