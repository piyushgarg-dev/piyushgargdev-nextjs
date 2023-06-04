import React, { useState } from "react";
import { useSession } from "next-auth/react";
import classes from "../../styles/form.module.css";
import { MagnifyingGlass } from "react-loader-spinner";

const Form = () => {
  const { data, status } = useSession();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          isAuthenticated: status === "authenticated" ? "Yes" : "No",
          authenticatedUserName: data?.user?.name,
          authenticatedUserEmail: data?.user?.email,
          authenticatedUserImageUrl: data?.user?.image,
        }),
      });
      setIsSubmitted(true);
    },
    [data, email, message, name, status]
  );

  React.useEffect(() => {
    if (data && data.user) {
      setName(data.user.name);
      setEmail(data.user.email);
    }
  }, [data]);

  if (status === "loading") return <MagnifyingGlass />;

  if (isSubmitted) {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Thanks for submission!</h3>
      </div>
    );
  }

  return <></>;

  return (
    <form className={`${classes.form}`} onSubmit={handleFormSubmit}>
      <div className={`${classes.form__group}`}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          type="email"
          placeholder="Email Address"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          type="text"
          rows={5}
          placeholder="Message"
          required
        />
      </div>

      <button disabled className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
