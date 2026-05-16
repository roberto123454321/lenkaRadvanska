import "./Contact.css";
import InstagramIcon from "../../public/instagram.svg";

export default function Contact() {
  return (
    <div id="contact" className="section-padding darker-background">
      <div className="contact">
        <a
          href="https://www.instagram.com/radvanlenka"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="instagram-icon"
          />
          <span>radvanlenka</span>
        </a>
      </div>
    </div>
  );
}
