import WhiteBtn from "@/components/ui/WhiteBtn";
import React, { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import useInput from "@/components/hooks/use-input";
import Image from "next/image";

const ContactForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredText,
    isValid: enteredTextIsValid,
    hasError: textHasError,
    textChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
    reset: resetText,
  } = useInput((value) => value.trim() !== "");

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid &&
      enteredTextIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    enteredNameIsValid,
    enteredEmailIsValid,
    enteredPhoneIsValid,
    enteredTextIsValid,
  ]);

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (nameHasError && phoneHasError && emailHasError && textHasError) {
      return;
    }

    resetName();
    resetPhone();
    resetEmail();
    resetText();
  };

  const nameClassHandler = nameHasError
    ? classes.formControl && classes.invalid
    : classes.formControl;
  const emailClassHandler = emailHasError
    ? classes.formControl && classes.invalidEmail
    : classes.formControl;
  const phoneClassHandler = phoneHasError
    ? classes.formControl && classes.invalid
    : classes.formControl;
  const textClassHandler = textHasError
    ? classes.formControl && classes.invalid
    : classes.formControl;

  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.container}>
            <div className={classes.content}>
              <h1>Contact us</h1>
              <p>
                {" "}
                Ready to take it to the next level? Let's talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that's
                relatable to your users, drop us a line.
              </p>
            </div>
            <div className={classes.form}>
              <form onSubmit={formSubmitHandler}>
                <div className={nameClassHandler}>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                  />{" "}
                  {nameHasError && (
                    <span className={classes.errorText}>
                      <p> Can't be empty</p>
                      <Image
                        width={20}
                        height={20}
                        alt={"error"}
                        src={"/images/icon-error.svg"}
                      />
                    </span>
                  )}
                </div>
                <div className={emailClassHandler}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                  />
                  {emailHasError && (
                    <span className={classes.errorText}>
                      <p>Please enter valid email</p>
                      <Image
                        width={20}
                        height={20}
                        alt={"error"}
                        src={"/images/icon-error.svg"}
                      />
                    </span>
                  )}
                </div>
                <div className={phoneClassHandler}>
                  <input
                    type="text"
                    placeholder="Phone"
                    required
                    value={enteredPhone}
                    onChange={phoneChangeHandler}
                    onBlur={phoneBlurHandler}
                  />
                  {phoneHasError && (
                    <span className={classes.errorText}>
                      <p> Can't be empty</p>
                      <Image
                        width={20}
                        height={20}
                        alt={"error"}
                        src={"/images/icon-error.svg"}
                      />
                    </span>
                  )}
                </div>
                <div className={textClassHandler}>
                  <textarea
                    placeholder="Your Message"
                    required
                    value={enteredText}
                    onChange={textChangeHandler}
                    onBlur={textBlurHandler}
                  />
                  {textHasError && (
                    <span className={classes.errorText}>
                      <p> Can't be empty</p>
                      <Image
                        width={20}
                        height={20}
                        alt={"error"}
                        src={"/images/icon-error.svg"}
                      />
                    </span>
                  )}
                </div>
                <div className={classes.action}>
                  <WhiteBtn
                    disabled={!formIsValid}
                    name="Submit"
                    action={() => {}}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
