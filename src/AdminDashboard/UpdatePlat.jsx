import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";

import Sidebar from "./SideBar";

const UpdatePlat = () => {
    const { id } = useParams();

    const [nomPlat, setNomPlat] = useState('');
    const [prix, setPrix] = useState('');
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost:3001/update/${id}`)
            .then(res => {
                const data = res.data[0];
                setNomPlat(data.nom_plat);
                setPrix(data.prix);
                setPhoto(data.photo);
            })
            .catch(err => console.log(err));
    }, [id]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:3001/edit/${id}`, {
            nom_plat: nomPlat,
            prix: prix,
            photo: photo
        })
            .then(res => {
                if (res.data.updated) {
                    navigate('/Admin');
                } else {
                    alert('Erreur dans l"opération de mise à jour');
                }
            })
            .catch(err => {
                console.error(err);
                alert('Erreur dans l"opération de mise à jour');
            });
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-8">
                <div className="flex items-center justify-center">
                    <div className="text-center">
                        <h3 className="px-8 text-2xl font-medium text-gray-900 uppercase mb-6">Formulaire de Modification de Plats :</h3>
                        <form onSubmit={handleSubmit} className="px-8 w-full max-w-lg">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nomPlat">
                                    Nom du Plat
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nomPlat" type="text"
                                    placeholder="Nom du Plat ici" value={nomPlat} onChange={e => setNomPlat(e.target.value)}
                                />
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="prix">
                                    Prix
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="prix" type="number"
                                    placeholder="Prix ici" value={prix} onChange={e => setPrix(e.target.value)}
                                />
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="photo">
                                    Photo
                                </label>
                                <label htmlFor="photo">Sélectionnez la photo :</label>
                                <select
                                    name="photo"
                                    id="photo"
                                    value={photo}
                                    onChange={e => setPhoto(e.target.value)}
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
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3">
                                    <button className="shadow bg-cyan-600 hover:bg-cyan-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg" type="submit">
                                        Modifier Plat
                                    </button>
                                </div>
                                <div className="md:w-2/3"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdatePlat;
