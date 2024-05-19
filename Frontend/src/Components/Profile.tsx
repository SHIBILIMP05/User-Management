import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const user = useSelector((state: RootState) => state.User);

  useEffect(() => {
    setName(user.name);
    setPhone(user.phone);
    setEmail(user.email);
  }, []);

  return (
    <div className="h-screen  bg-gray-200 pt-12">
      <div className="max-w-sm mx-auto bg-white  rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center my-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white  mx-auto my-4"
              src="../src/assets/office-woman-planning-route-for-travel.png"
              alt=""
            />
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 mb-1">
                Cait Genevieve
              </h3>
              <div className="inline-flex text-gray-700  items-center">
                <svg
                  className="h-5 w-5 text-gray-400  mr-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className=""
                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
                New York, NY
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about user.
            </p>
          </div>
          <div className="relative border-t border-gray-200">
            {edit ? (
              <span
                onClick={() => setEdit(false)}
                className="relative top-2 left-[90%] "
              >
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            ) : (
              <span
                onClick={() => setEdit(true)}
                className="relative top-2 left-[90%] "
              >
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </span>
            )}
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                {edit ? (
                  <input
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={name}
                    type="text"
                    className="bg-gray-200 w-48 h-7 rounded-sm pl-2 text-sm"
                  />
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Mickael Poulaz
                  </dd>
                )}
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone Number
                </dt>
                {edit ? (
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    defaultValue={phone}
                    type="number"
                    className="bg-gray-200 w-48 h-7 rounded-sm pl-2 text-sm"
                  />
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    React JS
                  </dd>
                )}
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                {edit ? (
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={email}
                    type="email"
                    className="bg-gray-200 w-48 h-7 rounded-sm pl-2 text-sm"
                  />
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    m.poul@example.com
                  </dd>
                )}
              </div>
            </dl>
            {edit && (
              <div className="flex gap-2 px-2 mb-2">
                <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                  submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
