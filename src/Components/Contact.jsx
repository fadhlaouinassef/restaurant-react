import React, { useState } from "react";
import Axios from 'axios';
import Chelli from '../img/chelli.png';
import background from '../img/background.jpg';

const Contact = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Envoi des données au backend
    Axios.post("http://localhost:3001/createMessage", {
      nom: nom,
      email: email,
      message: message
    })
    .then(response => {
      console.log(response.data);
      // Réinitialiser les champs après l'envoi réussi
      setNom("");
      setEmail("");
      setMessage("");
    })
    .catch(error => {
      console.error(error.response.data);
    });
  };

  return (
    <div>
      <section className="text-white body-font relative">
        <div className="container px-10 py-24 mx-auto flex justify-center items-center">
          <div className="lg:flex w-full">
            <div className="lg:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h2 className="text-white text-3xl mb-4 font-bold title-font text-center">
                Prendre Contact
              </h2>
              <div className="relative mb-4">
                <input
                  type="name"
                  id="nom"
                  name="nom"
                  placeholder="Nom et Prénom"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Adresse Email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message ..."
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Envoyer
              </button>
            </div>

            <div className="lg:w-1/2 lg:h-auto lg:ml-6">
              <img
                className="w-full h-full object-cover object-center rounded-md"
                src={Chelli}
                alt="Chelli"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
