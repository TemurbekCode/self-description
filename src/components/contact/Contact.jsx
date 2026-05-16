import "./Contact.css";
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            form.current,
            "YOUR_PUBLIC_KEY"
        )
            .then(() => {
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong!");
            });

        e.target.reset();
    };

    return (
        <div className="contact">

            {/* LEFT */}
            <div className="contact-left">

                <h1 className="contact-title">Get In Touch</h1>

                <p className="contact-text">
                    Send me your details and I will respond as soon as possible.
                </p>

                <div className="socials">

                    <a href="https://instagram.com/jamsedovic" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>

                    <a href="https://t.me/rzz_12l" target="_blank" rel="noreferrer">
                        <FaTelegramPlane />
                    </a>

                    <a href="https://tiktok.com/rzzz3353" target="_blank" rel="noreferrer">
                        <FaTiktok />
                    </a>

                </div>

            </div>

            {/* FORM */}
            <div className="contact-right">

                <form ref={form} onSubmit={sendEmail} className="contact-form">

                    {/* FULL NAME */}
                    <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        required
                    />

                    {/* EMAIL */}
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email Address"
                        required
                    />

                    {/* INSTAGRAM */}
                    <input
                        type="text"
                        name="instagram"
                        placeholder="Instagram Username (@username)"
                        required
                    />

                    {/* MESSAGE */}
                    <textarea
                        name="message"
                        placeholder="Write your message..."
                        required
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Contact;