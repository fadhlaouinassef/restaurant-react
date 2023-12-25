import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { RiDeleteBinLine } from 'react-icons/ri';


const ListeMessage = () => {
   const [messages, setMessages] = useState([]);

   const getMessages = () => {
      Axios.get("http://localhost:3001/readContact").then((response) => {
         console.log(response);
         setMessages(response.data);
      });
   };

   useEffect(() => {
      getMessages();
   }, []);

   const deleteMessage = (id) => {
      // Assurez-vous que l'ID est défini
      if (id !== undefined) {
         Axios.delete(`http://localhost:3001/deleteMessage/${id}`)
            .then(response => {
               console.log(response.data);
               window.location.reload();
            })
            .catch(error => {
               console.error(error.response.data);
            });
      } else {
         console.error("ID is undefined");
      }
   };

   return (
      <div>
         <div className="p-4">
            <h2 className="text-3xl font-medium text-gray-900 uppercase mb-6">LISTE DES MESSAGES :</h2>
            <div>
               <div>
                  <div>
                     <table className="border-separate border-spacing-1 border border-slate-500">
                        <thead>
                           <tr>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                 #ID
                              </th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                 Nom et Prénom
                              </th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                 Email
                              </th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                 Message
                              </th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                 Actions
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {messages.map((message, index) => (
                              <tr key={index} className="bg-gray-100 border-b">
                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {message.nom}
                                 </td>
                                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {message.email}
                                 </td>
                                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {message.message}
                                 </td>
                                 <td>
                                    <button
                                       onClick={() => deleteMessage(message.id)}
                                       className="shadow bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg">
                                       <RiDeleteBinLine />
                                    </button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ListeMessage;
