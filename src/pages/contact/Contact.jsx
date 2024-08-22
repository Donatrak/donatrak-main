import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-neutral-light py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center lg:text-left">
        <h2 className="text-4xl font-bold text-primary mb-6">Contact Us</h2>
        <p className="text-lg text-[#4B5563] mb-12">
          We would love to hear from you. Please reach out to us through any of
          the following means or by filling out the contact form.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-start">
        {/* Contact Information */}
        <div className="flex flex-col space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center text-black">
            <FaPhoneAlt className="text-primary text-xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-[#4B5563]">+233 243 999 631</p>
            </div>
          </div>
          <div className="flex items-center text-black">
            <FaEnvelope className="text-primary text-xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-[#4B5563]">contact@donatrak.com</p>
            </div>
          </div>
          <div className="flex items-center text-black">
            <FaMapMarkerAlt className="text-primary text-xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-[#4B5563]">
                123 Donation St, Giving City, Philanthropy
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-base font-medium text-black mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="border border-neutral-400 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-base font-medium text-black mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="border border-neutral-400 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-base font-medium text-black mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="border border-neutral-400 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-base font-medium text-black mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="6"
                className="border border-neutral-400 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
