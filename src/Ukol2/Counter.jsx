import { useEffect, useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-4 my-10 text-center bg-gray-200 rounded-lg ">
      <h1 className="col-span-3 m-5 mt-5 font-semibold md:text-2xl lg:text-3xl">
        Počítadlo v React.js pomocí Hooks
      </h1>
      <div className="col-span-3 m-5 mt-5 font-bold md:text-2xl lg:text-3xl">
        {count}
      </div>
      <button
        onClick={(e) => {
          setCounter(count + 1);
        }}
        className="p-4 m-4 font-semibold rounded-md bg-sky-300 text-sky-600"
      >
        +1
      </button>
      <button
        onClick={(e) => {
          setCounter(count - 1);
        }}
        className="p-4 m-4 font-semibold text-red-600 bg-red-300 rounded-sm "
      >
        -1
      </button>
      <button
        onClick={(e) => {
          setCounter(0);
        }}
        className="p-4 m-4 font-semibold text-green-600 bg-green-300 rounded-sm "
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
