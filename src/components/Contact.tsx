import { useState } from "react";
import {
  Instagram,
  Linkedin,
  Figma,
  Mail,
  MapPin,
  Clock,
  Send,
  Phone,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const onSubmit = async () => {
    setIsSubmitting(true);

    // Create FormData object manually
    const submitData = {
      access_key: "d85e573c-d069-4bfd-a117-7a664f53cf86",
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submitData),
      }).then((res) => res.json());

      if (res.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    onSubmit();
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      subtitle: "hello@sparshyadav.com",
      description: "Drop me a line anytime",
      color: "from-blue-500 to-cyan-500",
      delay: "0ms",
    },
    {
      icon: Phone,
      title: "Call Me",
      subtitle: "+91 8299037536",
      description: "Let's talk directly",
      color: "from-green-500 to-emerald-500",
      delay: "100ms",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      color: "hover:bg-blue-600",
      bg: "bg-blue-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/trendy_artsbysparsh/",
      color: "hover:bg-pink-600",
      bg: "bg-pink-500",
    },
    {
      icon: Figma,
      href: "https://www.figma.com/design/1vWuwGXwjK4XNWDCdeGEdn/Portfolio?node-id=0-1&p=f&t=yT2p7ry5ihW2kTZW-0",
      color: "hover:bg-red-600",
      bg: "bg-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-purple-500/5 to-transparent rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-300 mb-6 border border-white/10">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            Let's Connect
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Start a Conversation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can create
            something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Methods - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10"
                style={{ animationDelay: method.delay }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {method.title}
                    </h4>
                    <p className="text-purple-200 font-medium mb-1">
                      {method.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>
              </div>
            ))}

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-white mb-6">
                Follow My Journey
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-14 h-14 ${social.bg} ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24hr</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">
                Send Me a Message
              </h3>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 transition-all duration-300 outline-none"
                    />
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 -z-10 ${
                        focusedField === "name" ? "opacity-100" : ""
                      }`}
                    ></div>
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 transition-all duration-300 outline-none"
                    />
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 -z-10 ${
                        focusedField === "email" ? "opacity-100" : ""
                      }`}
                    ></div>
                  </div>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Project Subject"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 transition-all duration-300 outline-none"
                  />
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 -z-10 ${
                      focusedField === "subject" ? "opacity-100" : ""
                    }`}
                  ></div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project, goals, and timeline..."
                    rows={6}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 transition-all duration-300 outline-none resize-none"
                  ></textarea>
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 -z-10 ${
                      focusedField === "message" ? "opacity-100" : ""
                    }`}
                  ></div>
                </div>

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className={`group relative w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25"
                  } text-white`}
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Quick Response Guaranteed
                    </h4>
                    <p className="text-gray-300 text-sm">
                      I typically respond within 2-4 hours during business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
