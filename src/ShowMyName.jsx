import React, { useState } from "react";

const ShowMyName = () => {
    const [name, setName] = useState()
  const handlMin = () => {
    console.log("Min");
  };

  const handlThu = () => {
    console.log("Thu");
  };


  const handlKhant = () => {
    console.log("Min");
  };
  return (
    <div className=" p-10">
      {" "}
      <h1 className=" text-3xl font-bold">My Name is Show</h1>
      <button onClick={handlMin} className=" border px-4 py-2 bg-black text-white">Min</button>
      <button onClick={handlThu}   className=" border px-4 py-2 bg-black text-white">Thu</button>
      <button onClick={handlKhant}   className=" border px-4 py-2 bg-black text-white">Khant</button>
    </div>
  );
};

export default ShowMyName;
