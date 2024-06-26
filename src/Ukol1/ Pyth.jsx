import { useState, useEffect } from "react";

function Pyth() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [numberC, setNumberC] = useState(0);

  useEffect(() => {
    if (numberA !== 0 && numberB !== 0) {
      const cislo1 = Math.pow(numberA, 2);
      const cislo2 = Math.pow(numberB, 2);
      setNumberC(Math.sqrt(cislo1 + cislo2));
    }
  }, [numberA, numberB]);

  return (
    <div className="flex flex-col items-center justify-center mx-4 my-10 bg-gray-200 rounded-lg ">
      <h1 className="m-5 mt-5 font-semibold md:text-2xl lg:text-3xl">
        Počítání pytagorový věty (na půl)
      </h1>
      <div className="m-5 mt-5 font-bold md:text-2xl lg:text-3xl">
        {numberC}
        <sup>2</sup> = {numberA}
        <sup>2</sup> + {numberB}
        <sup>2</sup>
      </div>
      <div className="m-5 mt-5 font-bold md:text-2xl lg:text-3xl">
        c ={Math.sqrt(numberC)}
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="a" className="text-sm font-semibold text-gray-600">
          A ={" "}
        </label>
        <input
          className="p-2 m-2 border-black rounded-sm"
          type="number"
          value={numberA}
          onChange={(e) => setNumberA(parseFloat(e.target.value))}
          id="a"
        />
        <label htmlFor="b" className="text-sm font-semibold text-gray-600">
          B ={" "}
        </label>
        <input
          className="p-2 m-2 border-black rounded-sm"
          type="number"
          value={numberB}
          onChange={(e) => setNumberB(parseFloat(e.target.value))}
          id="b"
        />
      </div>
    </div>
  );
}

export default Pyth;
