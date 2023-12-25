import React from 'react';

import Sidebar from '../AdminDashboard/SideBar';
import Listeplats from '../AdminDashboard/ListePlats';
import ListeMessage from '../AdminDashboard/ListeMessage';

const Admin = () => {
  return (
    <div className="flex f-screen">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center my-6">
        <div className="text-center">
          <h2 className="px-8 text-4xl font-medium text-slate-800 uppercase mb-6">Bienvenue cher Admin</h2>
          <div className="flex flex-col items-center space-y-8">
            <Listeplats />
            <ListeMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
