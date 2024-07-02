import React, { useState } from "react";
import "../styles/home.css";
import emailjs from "@emailjs/browser";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const handleSendEmail = (e) => {
    e.preventDefault();
    setAlert({
      show: true,
      type: "dark",
      message: "Message sent successfully!",
    });

    emailjs
      .send(
        "service_5jni33d",
        "template_dy8rw19",
        {
          from_name: name,
          from_email: email,
          to_name: "Faisal",
          phone_number: phoneNumber,
          message,
        },
        "s_s3Ri-GsCXMi8W4Q"
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
          showAlert("dark", "Message sent successfully!");
        },
        (error) => {
          showAlert(
            "danger",
            "Failed to send message. Please try again later."
          );
          console.log("FAILED...", error.text);
        }
      );
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: "", message: "" });
    }, 3000);
  };

  return (
    <div className="container contact-form-container">
      <h2>Contact Us</h2>
      {alert.show && (
        <div className={`alert alert-${alert.type} fade show`} role="alert">
          {alert.message}
        </div>
      )}
      <form onSubmit={handleSendEmail}>
        <div className="row">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              name="from_name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-2">
            <input
              type="email"
              name="from_email"
              className="form-control"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <input
            type="tel"
            name="phoneNumber"
            className="form-control"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="message"
            placeholder="Comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-light mt-4"
          disabled={
            name === "" || email === "" || phoneNumber === "" || message === ""
          }
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Footer;
