import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/testimonial.module.css";

const capitalise = (text) => {
  // Use a regular expression to split the text into sentences
  const sentences = text.split(/(?<=[.!?])\s+/);

  // Capitalize the first letter of each sentence
  const capitalizedSentences = sentences.map(sentence => {
    if (sentence.length > 0) {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    return sentence;
  });

  // Join the sentences back together into a single string
  const capitalizedText = capitalizedSentences.join(' ');

  return capitalizedText;
}


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
    <p style={{ fontSize: "20px" }}>{capitalise(feedBack.content)}</p>
  </div>
);

export default TestimonialItem;
