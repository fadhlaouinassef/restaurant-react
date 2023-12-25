import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

import { RiEdit2Line } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';

const Listeplats = () => {
   const [menuList, setMenuList] = useState([]);

   const getMenu = () => {
      Axios.get("http://localhost:3001/read").then((response) => {
         console.log(response);
         setMenuList(response.data);
      });
   };

   useEffect(() => {
      getMenu();
   }, []);

   const DeleteMenu = (id) => {
      Axios.delete(`http://localhost:3001/delete/${id}`)
         .then(response => {
            console.log(response.data);
            window.location.reload();
         })
         .catch(error => {
            console.error(error.response.data);
         });
   };

   return (
      <div>
         <div className="p-4">
            <h2 className="text-3xl font-medium text-gray-900 uppercase mb-6">LISTE DES PLATS :</h2>
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
                                 Nom du Plat
                              </th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                 Prix
                              </th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                 Actions
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {menuList.map((menu, index) => (
                              <tr key={index} className="bg-gray-100 border-b">
                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {menu.nom_plat}
                                 </td>
                                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {menu.prix}
                                 </td>
                                 <td>
                                    <Link to={`/update/${menu.id}`}>
                                       <button className="shadow bg-green-600 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg"><RiEdit2Line /></button>
                                    </Link>
                                    <button
                                       onClick={() => DeleteMenu(menu.id)}
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

export default Listeplats;
