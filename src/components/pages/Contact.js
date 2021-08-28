import React, { useState, useRef } from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Input from "../UI/Input";
import Button from "../UI/Button";

import emailJS from "emailjs-com";
import emailKey from "../../assets/emailkey/emailkey";

import classes from "./Contact.module.css";

const Contact = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const nameInput = useRef(),
    emailInput = useRef(),
    message = useRef();

  const contactFormSubmitHandler = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const nameValue = nameInput.current.value,
      emailValue = emailInput.current.value,
      messageText = message.current.value;

    if (nameValue === "" || emailValue === "" || messageText === "") {
      setError("All fields are required!");
      setButtonText("Send");
    } else {
      if (error) setError(null);
      const emailParams = {
        from_name: nameValue,
        from_email: emailValue,
        message: messageText,
      };

      emailJS
        .send(
          emailKey.serviceID,
          emailKey.templateID,
          emailParams,
          emailKey.userID
        )
        .then((response) => {
          e.target.reset();
          if (response.status === 200) {
            setSuccess(true);
          } else {
            setError("Sorry, something went wrong.");
          }
          setButtonText("Send");
        });
    }
  };
  return (
    <React.Fragment>
      <Hero title="Contact" subText="Do you have any questions?" />
      <Section>
        <div className="container-fluid">
          <div className={`row align-items-center ${classes.row}`}>
            <div className="col-md-5 text-center">
              <h2>Star Wars Bank <i className="fab fa-galactic-republic"></i></h2>
              <p>www.starwarsbank.com</p>
            </div>
            <div className="col-md-7">
              <form
                className={classes.form}
                onSubmit={contactFormSubmitHandler}
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <Input id="name" type="text" ref={nameInput} />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" ref={emailInput} />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="6"
                    className="form-control"
                    ref={message}
                  ></textarea>
                </div>
                <div className="text-center">
                  {error && <p className="text-danger">{error}</p>}
                  {success && (
                    <p className="text-success">
                      Message sent <i className="fas fa-check-double"></i>
                    </p>
                  )}
                </div>
                <div className="text-center">
                  <Button type="submit" className={`btn ${classes.btn_submit}`}>
                    {buttonText}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default Contact;
