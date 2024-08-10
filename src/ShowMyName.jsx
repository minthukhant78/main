import React, { useState } from "react";

const ShowMyName = () => {
  const [name, setName] = useState(" ");
  const handlMin = () => {
    setName();
    setName(name + "Min");
  };

  const handlThu = () => {
    setName(name + "Thu");
  };

  const handlKhant = () => {
    setName(name + "Khant");
  };

  const handlClear = () => {
    setName("");
  };
  return (
    <div className=" p-10">
      {" "}
      <h1 className=" text-4xl font-bold mb-4">My Name is "{name}"</h1>
      <button
        onClick={handlMin}
        className=" border px-4 py-2 bg-black text-white"
      >
        Min
      </button>
      <button
        onClick={handlThu}
        className=" border px-4 py-2 bg-black text-white"
      >
        Thu
      </button>
      <button
        onClick={handlKhant}
        className=" border px-4 py-2 bg-black text-white"
      >
        Khant
      </button>
      <button
        onClick={handlClear}
        className=" border px-4 py-2 border-black "
      >
        Clear Name
      </button>
    </div>
  );
};

export default ShowMyName;
