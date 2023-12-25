import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div >
      <aside className="w-72 bg-gray-900 min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7">

      <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
          
          <Link to='/'>
          <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-slate-200 transition-all duration-300"></div>
              </div>
              <div className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm" >
                  <span className="font-extrabold">Chelli's TN</span>
                  <span className="font-QuicksandMedium">AdminDashboard</span>
              </div>
          </div>
          </Link>     
          
      </div>

      <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
          
          <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase">Admin</div>

        <Link to='/Create'>
        <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-blue-400 transition-all duration-300"></div>
              </div>
              <div className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm" href="#">
                  <svg className="h-5 w-5 group-hover:fill-blue-400 dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path>
                      <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path>
                  </svg>
                  <span className="font-QuicksandMedium">Ajouter Plat</span>
              </div>
          </div>
        </Link>
      </div>
  </aside>
</div>
  );
};

export default Sidebar;
