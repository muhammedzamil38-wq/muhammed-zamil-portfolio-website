import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion as Motion } from "motion/react";
import Button from "../component/Button";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "muhammedzamil38@gmail.com",
    href: "mailto:muhammedzamil38@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 503475979",
    href: "tel:+971503475979",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abudhabi, United Arab Emirates",
    href: "https://maps.app.goo.gl/pxsiLnQ1jJDfKMYT6",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. please check your environment variables",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        { name: formData.name, email: formData.email, message: formData.message },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setSubmitStatus({
        type: "error",
        message: error.text || "Failed to send message. Please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message and let's
            discuss how we can work together.
          </p>
        </div>

        <Motion.div className="grid lg:grid-cols-2 max-w-5xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="glass p-8 rounded-3xl border border-primary/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6" action="">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  required
                  placeholder="Your Name......"
                  className="w-full transition-all outline-none focus:ring-1 focus:ring-primary px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  id="name"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                  className="w-full transition-all outline-none focus:ring-1 focus:ring-primary px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary"
                  id="email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Your Message......"
                  className="w-full resize-none transition-all outline-none focus:ring-1 focus:ring-primary  px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary"
                  id="message"
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>Sending....</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/50 border border-green-500/20 text-green-500/50" : "bg-red-500/10 border border-red-500/20 text-red-500/50"}`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </Motion.div>
          <div className="flex flex-col lg:mx-5 sm:mt-10 lg:mt-0 gap-5">
            <div className="glass p-8 rounded-3xl border border-primary/30">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              {contactInfo.map((info, index) => {
                return (
                  <div className="flex gap-5 " key={index}>
                    <div className="w-10 hover:text-primary hover:border hover:border-primary/30 transition-all duration-500 h-10 glass-strong m-2 p-2 rounded-xl ">
                      <a href={info.href}>
                        <info.icon />
                      </a>
                    </div>
                    <div className=" mt-2">
                      <span className="text-xs text-muted-foreground">{info.label}</span>
                      <p className="text-sm">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 glass p-8 rounded-3xl border border-primary/30">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <h3 className="text-lg">Currently Available</h3>
              </div>
              <p className="text-muted-foreground ">
                I'm currently open to new opportunities and exciting projects. Whether you
                need a full-time engineer or a freelance consultant, let's talk!
              </p>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
