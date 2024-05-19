import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const [state, setState] = useState(false);

  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.User);

  return (
    <header className="backdrop-opacity-10 backdrop-invert bg-gray-600/15 z-40 relative top-3 mx-3 items-center  h-16  shadow-lg rounded-2xl">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
            <div className="relative flex items-center w-full h-full lg:w-64 group">
              <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-white uppercase cursor-pointer sm:hidden">
                <svg
                  fill="none"
                  className="relative w-5 h-5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <svg
                className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-700 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
              <input
                type="text"
                className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 text-white aa-input"
                placeholder="Search"
              />
              <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-400 rounded-2xl md:block">
                +
              </div>
            </div>
          </div>
          <div className="relative flex items-center gap-x-4 justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <h1 className="text-white font-bold leading-tight">{user.name}</h1>
            <a onClick={() => setState(!state)} className="relative block">
              <img
                alt="profil"
                src="../src/assets/office-woman-planning-route-for-travel.png"
                className="mx-auto object-cover rounded-full h-12 w-12 "
              />
            </a>
            {state && (
              <div className="absolute top-14 right-0 w-36 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    onClick={()=>navigate('/profile')}
                    className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900   "
                    role="menuitem"
                  >
                    <span className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>

                      <span>Profile</span>
                    </span>
                  </a>
                  <a
                    href="#"
                    className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <span className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                        />
                      </svg>

                      <span>Log out</span>
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
