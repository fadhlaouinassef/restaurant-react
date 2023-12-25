import React, { useState } from "react";
import Axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";

const Create = () => {
  const [nom_plat, setNomPlat] = useState("");
  const [prix, setPrix] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const AjouterPlat = () => {
    console.log(nom_plat);
    Axios.post('http://localhost:3001/create', {
      nom_plat: nom_plat,
      prix: prix,
      photo: photo
    }).then(() => {
      console.log("succès");
      navigate("/Admin");
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h3 className="p-8 text-2xl font-medium text-gray-900 uppercase mb-6">
              Formulaire d'ajout de Plats :
            </h3>
            <form className="px-8 w-full max-w-lg">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Nom du Plat
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="nom_plat"
                  type="text"
                  placeholder="Nom du Plat ici"
                  onChange={(event) => {
                    setNomPlat(event.target.value);
                  }}
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Prix
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="prix"
                  type="number"
                  placeholder="Prix ici"
                  onChange={(event) => {
                    setPrix(event.target.value);
                  }}
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Photo
                </label>
                <label htmlFor="photo">Sélectionnez la photo :</label>
                <select
                  name="photo"
                  id="photo"
                  onChange={(event) => {
                    setPhoto(event.target.value);
                  }}
                >
                  <option value="">-- Choisissez une option --</option>
                  <option value="fajitas">fajitas</option>
                  <option value="burritos">burritos</option>
                  <option value="quesadillas">quesadillas</option>
                  <option value="tacos">tacos</option>
                  <option value="nachos">nachos</option>
                  <option value="Autre">-- Autre --</option>
                </select>
              </div>
              <div className="md:w-1/3">
                <button
                  onClick={AjouterPlat}
                  className="shadow bg-cyan-600 hover:bg-cyan-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded-lg"
                  type="button"
                >
                  Ajouter Plat
                </button>
                
              </div>
              <div className="col-span-full md:w-1/3">
                <button className="shadow bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-2 rounded-lg w-full">
                  <Link to="/AdminDashboard">Retour</Link>
                </button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
