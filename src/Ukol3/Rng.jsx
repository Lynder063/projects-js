import { useState } from "react";

function Rng() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(Math.random(1));
  }

  return (
    <div className="flex flex-col items-center justify-center mx-4 my-10 bg-gray-200 rounded-lg ">
      <h1 className="m-5 mt-5 font-semibold md:text-2xl lg:text-3xl">
        Random Number Generator
      </h1>
      <span className="col-span-3 m-5 mt-5 font-bold md:text-2xl lg:text-3xl">
        {number}
      </span>
      <button
        onClick={handleClick}
        className="col-span-3 p-4 m-5 mt-5 font-semibold text-yellow-700 bg-yellow-400 rounded-lg"
      >
        Generuj
      </button>
    </div>
  );
}

export default Rng;
