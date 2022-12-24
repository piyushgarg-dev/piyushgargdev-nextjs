import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const submitHandler = () => {
    e.preventDefault();
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className="text-center">
        <p>
          <i className="ri-alarm-warning-line"> </i>I was feeling a bit lazy and
          I haven{"'"}t connected this form to my backend{" "}
          <i className="ri-alarm-warning-line"></i>
        </p>
      </div>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
