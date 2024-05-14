import React from "react";

export const Signup = () => {
  return (
    <div className="w-screen bg-C2 h-screen flex justify-center items-center">
      <div className=" bg-C3 w-[475px] h-[625px]  flex justify-center items-center">
        <div className="w-[475px] h-[625px] py-6 flex flex-col  items-center justify-between bg-C2 rounded-tl-full rounded-br-full ">
          <div className=" font-bold-sm font-font11 text-C1 text-5xl w-auto h-auto">
            Signup
          </div>
          <div className=" font-font11 text-xl font-semibold flex relative bottom-1 flex-col gap-y-3 justify-center w-auto h-auto">
            <label className="text-C1">Name</label>
            <input
             className="h-10 w-64 rounded-tl-xl rounded-br-xl"
             type="text"
             name="name"
           />
            <label className="text-C1">Email</label>
            <input
              className="h-10 w-64 rounded-tl-xl rounded-br-xl"
              type="text"
              name="email"
            />
            <label className="text-C1">Passwrod</label>
            <input
              className="h-10 w-64 rounded-tl-xl rounded-br-xl"
              type="text"
              name="password"
            />
          </div>
          <div className=" w-auto h-auto">
            <input
              className=" bg-C1 text-C3 w-60 h-10 rounded-bl-xl rounded-tr-xl text-center"
              value={"submit"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
