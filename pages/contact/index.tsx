import React, { useState } from "react";
import { BsArrowRight, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="h-full mb-24 md:mb-0 lg:mb-0 xl:mb-0 min-h-[100vh] bg-primary/30 flex flex-col lg:items-center xl:items-center overflow-y-scroll lg:overflow-hidden md:overflow-hidden xl:overflow-hidden">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center xl:gap-x-40 bg-slate-500/20 mt-36 xl:px-20 py-4 mx-10 text-center"
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="p-4"
        >
          <AiFillHome className="mx-auto mb-4" size={40} />
          <p>ul. Tymiankowa 1/47</p>
          <p>62-800 Kalisz</p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="p-4"
        >
          <BsFillTelephoneFill className="mx-auto mb-4" size={40} />
          <a href="tel:+4879078993">+48 790 782 993</a>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="p-4"
        >
          <AiOutlineMail className="mx-auto mb-4" size={40} />
          <a href="mailto:jakub.baran2@gmail.com">jakub.baran2@gmail.com</a>
        </motion.div>
      </motion.div>
      <div className="container mt-12 mb-14 mx-auto">
        <div className="flex flex-col mx-auto w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {t("contact.titleFirst")}{" "}
            <span className="text-accent">{t("contact.titleSecond")}</span>
          </motion.h2>
          <div>
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  className="input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  className="input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                placeholder={t("contact.subject")}
                className="input"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                placeholder={t("contact.message")}
                className="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {t("contact.button")}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "en";

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
};
