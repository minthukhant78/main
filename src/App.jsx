import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  // return (
    // <div className="p-10">

    //   <h1 className=" text-9xl font-bold">{count}</h1>
    //   <button
    //     onClick={handleIncrement}
    //     className=" border px-4 py-2 bg-black text-white"
    //   >
    //     incrememt
    //   </button>

    //   <button
    //     onClick={handleDecrement}
    //     className=" border px-4 py-2 bg-black text-white"
    //   >
    //     Decrement
    //   </button>
    // </div>

    // New ui


 
    /* From Uiverse.io by Praashoo7 */
    
  // );
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <div className="bg-card p-8 rounded-lg shadow-md">
        <div className="text-4xl font-bold mb-4">{count}</div>
        <div className="flex justify-center gap-4">
          <button 
          className="w-6 h-5"
          onClick={handleDecrement}>
            -
            {/* <MinusIcon className="w-5 h-5" /> */}
          </button>
          <button onClick={handleIncrement}>
            +
            {/* <PlusIcon className="w-5 h-5" /> */}
          </button>
        </div>
      </div>
    </div>
  )
}


export default App;
