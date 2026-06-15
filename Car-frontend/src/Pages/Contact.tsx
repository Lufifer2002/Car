import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#020202] min-h-screen text-white p-4 md:p-6">
      <div className="relative overflow-hidden rounded-[30px] bg-black shadow-[0_0_80px_rgba(255,255,255,0.03)]">
        {/* Hero Banner */}
        <div className="relative py-20 px-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
          <h1 className="relative text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="relative text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions or need assistance? We're here to help. Reach out to
            our team today.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#111] border border-white/10 p-4 rounded-xl">
                    <FaPhone className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#111] border border-white/10 p-4 rounded-xl">
                    <FaEnvelope className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@luxauto.com</p>
                    <p className="text-gray-400">sales@luxauto.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#111] border border-white/10 p-4 rounded-xl">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">
                      123 Luxury Avenue, Suite 100
                    </p>
                    <p className="text-gray-400">Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#111] border border-white/10 p-4 rounded-xl">
                    <FaClock className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-400">
                      Mon - Fri: 9:00 AM - 7:00 PM
                    </p>
                    <p className="text-gray-400">Sat: 10:00 AM - 5:00 PM</p>
                    <p className="text-gray-400">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                    placeholder="Your Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-xl bg-[#111] border border-white/10 text-white focus:outline-none focus:border-white/30"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Vehicle Sales Inquiry</option>
                    <option value="service">Service Appointment</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
