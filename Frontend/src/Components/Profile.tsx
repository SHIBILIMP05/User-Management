import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toast } from "sonner";
import { updateDetails } from "../APIs/userApi";
import { userDetails } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.User);

  type initialData = {
    id: string;
    name: string;
    email: string;
    phone: string;
    image: string | File;
    location: string;
  };

  const initialState: initialData = {
    id: user.id || "",
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    image: user.image || "",
    location: user.location || "",
  };
  const [userData, setUserData] = useState(initialState);
  const [edit, setEdit] = useState(false);

  const emailPattern: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

  const phonePattern = /^[0-9]{10}$/;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (userData.name.length < 4) {
      return toast.error("Name should be at least 4 characters!");
    } else if (userData.name.startsWith(" ")) {
      return toast.error("Name can't start with space!");
    } else if (!userData.phone || !phonePattern.test(userData.phone)) {
      return toast.error("Please enter a valid mobile number!");
    } else if (
      userData.email.startsWith(" ") ||
      !userData.email ||
      !emailPattern.test(userData.email)
    ) {
      return toast.error("Please enter a valid email!");
    } else if (!location) {
      return toast.error("Please provide your location!");
    }

    const status = await updateDetails(userData);

    if (status) {
      dispatch(
        userDetails({
          name: status.updatedUser.name,
          phone: status.updatedUser.phone,
          email: status.updatedUser.email,
          location: status.updatedUser.location,
          id: status.updatedUser.id,
          image: status.updatedUser.image,
        })
      );
    }
    navigate('/')
    console.log("status ::::==>", status);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event===>", e);

    const file = e.target.files?.[0];
    console.log("image file====>:", file);

    if (file) {
      setUserData({ ...userData, image: file });
    }
  };

  return (
    <div className="h-screen  bg-gray-200 pt-12">
      <div className="max-w-sm mx-auto bg-white/35  rounded-lg overflow-hidden shadow-lg">
        <div className="relative border-b px-4 pb-6">
          <svg
            onClick={() => navigate("/")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="relative top-4 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <div className="text-center my-4">
            <div className="relative w-32 h-32 mx-auto">
              <img
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
                src={
                  userData.image
                    ? `/uploads/${userData.image}`
                    : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"
                }
                alt="Profile"
              />
             {edit&& <input
                onChange={(e) => handleChange(e)}
                id="profile"
                type="file"
                name="image"
                className="hidden absolute inset-0 w-full h-full opacity-0 "
                accept="image/*"
              />}
              {edit&& <label
                htmlFor="profile"
                className="cursor-pointer absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="text-white/70 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </label>}
            </div>
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 mb-1">
                {userData.name}
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
                {userData.location}
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
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    defaultValue={userData.name}
                    type="text"
                    className="bg-gray-200 w-48 h-7 rounded-sm pl-2 text-sm"
                  />
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {userData.name}
                  </dd>
                )}
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone Number
                </dt>
                {edit ? (
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                    defaultValue={userData.phone}
                    type="text"
                    className="bg-gray-200 w-48 h-7 rounded-sm pl-2 text-sm"
                  />
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {userData.phone}
                  </dd>
                )}
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                {edit ? (
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    defaultValue={userData.email}
                    type="email"
                    className="bg-gray-200 w-48 h-7 rounded-sm pl-2 text-sm"
                  />
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {userData.email}
                  </dd>
                )}
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                {edit ? (
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, location: e.target.value })
                    }
                    defaultValue={userData.location}
                    type="text"
                    className="bg-gray-200 w-48 h-7 rounded-sm pl-2 text-sm"
                  />
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {userData.location}
                  </dd>
                )}
              </div>
            </dl>
            {edit && (
              <div className="flex gap-2 px-2 mb-2">
                <button
                  onClick={handleSubmit}
                  className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2"
                >
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
