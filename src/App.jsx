import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="p-10">

      <h1 className=" text-9xl font-bold">{count}</h1>
      <button
        onClick={handleIncrement}
        className=" border px-4 py-2 bg-black text-white"
      >
        incrememt
      </button>

      <button
        onClick={handleDecrement}
        className=" border px-4 py-2 bg-black text-white"
      >
        Decrement
      </button>
    </div>
    /* From Uiverse.io by Praashoo7 */
    
  );
};

export default App;
