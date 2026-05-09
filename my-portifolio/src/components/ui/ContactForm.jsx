import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-main text-font mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-borders text-font font-main focus:outline-none focus:border-font"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-main text-font mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-borders text-font font-main focus:outline-none focus:border-font"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block font-main text-font mb-2">
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-borders text-font font-main focus:outline-none focus:border-font"
            placeholder="Assunto da mensagem"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-main text-font mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-borders text-font font-main focus:outline-none focus:border-font resize-none"
            placeholder="Sua mensagem..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 text-font font-main rounded-xl hover:opacity-90 transition-opacity"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
