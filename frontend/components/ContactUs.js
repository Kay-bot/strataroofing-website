import classnames from 'classnames';
import styles from './Main.module.scss';

const ContactUs = () => {
  return (
    <section id="contact" class="text-center py-3">
      <div className="bg-light">
        <h2 className="section-title">Contact Us</h2>
        <div class="bottom-line"></div>
        <p class="lead">Contact us for free quote</p>
        <form action="process.php" method="POST">
          <div class="text-fields">
            <input
              type="text"
              name="name"
              class="text-input name-input"
              placeholder="Name"
            />
            <input
              type="text"
              name="subject"
              class="text-input subject-input"
              placeholder="Subject"
            />
            <input
              type="email"
              name="email"
              class="text-input email-input"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              class="text-input phone-input"
              placeholder="Phone"
            />
            <textarea
              name="message"
              class="text-input message-input"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <button type="submit" class="btn-main">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
