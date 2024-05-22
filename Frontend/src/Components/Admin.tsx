import React, { useEffect, useState } from "react";
import { deleteData, getingUserData } from "../APIs/adminApi";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  interface Data {
    name: string;
    email: string;
    _id: string;
    phone: string;
    image: string;
    location: string;
  }
  const data = {
    name: "",
    email: "",
    _id: "",
    phone: "",
    image: "",
    location: "",
  };

  const [userData, setUserData] = useState<Data[]>([data]);

  useEffect(() => {
    getingUserData().then((res) => {
      setUserData(res.userData);
    });
  }, [userData]);

  const handleLogOut = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/adminLogin");
  };

  const handleDelete = (id:string) => {
    
    deleteData(id).then((res)=>{
      console.log("adilccccc==>:",res.data);
      
      setUserData(res.data)
    })
  };

  return (
    <div className=" bg-slate-200 w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-[80%] h-[80%] bg-white rounded-xl shadow-md">
        <div className="relative w-full h-16 bg-green-950 rounded-t-xl flex items-center px-20">
          <div>
            <img src="" alt="" />
            <label className=" font-semibold text-white font-font11 text-xl">
              Admin side
            </label>
          </div>
          <div className="absolute right-7" onClick={handleLogOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
          </div>
        </div>

        <div className="px-4 py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">Users</h2>
            <div className="text-end">
              <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Filter'
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-slate-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="name"
                  />
                </div>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Filter
                </button>
              </form>
            </div>
          </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg ">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white/50 border-b border-gray-200"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white/50 border-b border-gray-200"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white/50 border-b border-gray-200"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white/50 border-b border-gray-200"
                    >
                      Location
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white/50 border-b border-gray-200"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((data) => {
                    return (
                      <tr key={data._id}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <img
                                className="mx-auto object-cover rounded-full h-12 w-12"
                                src={
                                  data.image
                                    ? `/uploads/${data.image}`
                                    : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"
                                }
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.phone}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.location}
                          </p>
                        </td>

                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-violet-300 rounded-full opacity-50"
                            ></span>
                            <span className="relative text-blue-500">Edit</span>
                          </span>
                        </td>

                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-orange-300 rounded-full opacity-50"
                            ></span>
                            <span
                              onClick={() => handleDelete(data._id)}
                              className="relative"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 26"
                                stroke-width="1.7"
                                stroke="currentColor"
                                className="w-6 h-6 text-red-700"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
        <div className="flex items-center">
          <button
            type="button"
            className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
          >
            <svg
              width="9"
              fill="currentColor"
              height="8"
              className=""
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
          >
            1
          </button>
          <button
            type="button"
            className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
          >
            2
          </button>
          <button
            type="button"
            className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
          >
            3
          </button>
          <button
            type="button"
            className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
          >
            4
          </button>
          <button
            type="button"
            className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
          >
            <svg
              width="9"
              fill="currentColor"
              height="8"
              className=""
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
