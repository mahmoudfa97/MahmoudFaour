import React, { useRef } from "react";
import { Icon } from "@iconify-icon/react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSent, setIsSent] = React.useState(false);

  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm("service_gcz5vep", "template_do67s4i", form.current, "hGHbjG1l0H_tG7hwh").then(
      (result) => {
        console.log(result.text);
        setIsSent(true);
      },
      (error) => {
        console.log(error.text);
        setIsSent(false);
      }
    );
  };
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt">
                  {" "}
                  <Icon icon="bi-geo-alt" />
                </i>

                <h4>Location:</h4>
                <p>Haifa, Israel</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope">
                  {" "}
                  <Icon icon="bi-envelope" />
                </i>
                <h4>Email:</h4>
                <p>leedor97@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone">
                  {" "}
                  <Icon icon="bi-phone" />
                </i>
                <h4>Call:</h4>
                <p>(+972) - 052-24984-02</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" placeholder="Message" required></textarea>
              </div>
              {isSent ? (
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
              ) : (
                ""
              )}
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
