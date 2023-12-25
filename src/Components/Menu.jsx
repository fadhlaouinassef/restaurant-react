import React, { useState, useEffect } from "react";
import Axios from "axios";

const Menu = () => {
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

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="container py-16 items-center">
        <h2 className="text-3xl font-medium text-gray-900 uppercase mb-6 text-center">Notre Menu</h2>
        <div className="grid grid-cols-3 gap-5 mx-auto">
          {menuList.map((menu) => (
            <div key={menu.id} className='w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
              <div className='max-w-md mx-auto'>
                <div
                  className='h-48 bg-cover bg-center'
                  style={{
                    backgroundImage: `url(${menu.photo}.jpg)`,
                  }}
                ></div>
                <div className='p-4 sm:p-6'>
                  <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{menu.nom_plat}</p>
                  <div className='flex flex-row'>
                    <p className='text-[#3C3C4399] text-[17px] mr-2'>Prix :</p>
                    <p className='text-[17px] font-bold text-[#0FB478]'>{menu.prix} DT</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
