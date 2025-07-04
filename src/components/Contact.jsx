
import axios from "axios";
import { useState } from "react";

const Contact = (props) => {
  const { isDark } = props;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendemail = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://portfolio-p3wg.onrender.com/send", { email, message })
      .then((res) => {
        alert("Message sent!");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        alert("Failed to send message.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className={`py-12 dark:bg-black dark:text-white ${isDark == "dark" ? " dark" : ""}`} id="contact">
      <h2 className="text-2xl font-bold text-center mb-6">Contact</h2>
      <form className="max-w-md mx-auto space-y-4" onSubmit={sendemail}>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded border-2 dark:border-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 rounded border-2 border-gray-400"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-lime-400 py-2 rounded hover:brightness-110 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
