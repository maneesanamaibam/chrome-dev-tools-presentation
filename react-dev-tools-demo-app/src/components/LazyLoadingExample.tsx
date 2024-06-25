import { Link } from "react-router-dom";
import { Card } from "./Card";
import { useState } from "react";
// import DetachedDom from "./DetachedDomExample";
// import {
//   Route,
//   Router,
//   Routes,
//   Switch,
//   useLocation,
//   useParams,
// } from "react-router-dom";

export default function LazyLoadingExample() {
  const [randomNumber, setRandomNumber] = useState(43);
  const isRandomNumberEven = isEven(randomNumber);
  function isEven(n: number) {
    return n % 2 === 0;
  }

  function generateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 100));
  }
  return (
    <>
      <div className=" container mx-auto p-4 ">
        <h2 className="m-3 text-2xl font-bold text-center text-teal-600">
          Lazy Loading Example
        </h2>
        <Link to="/" className="bg-indigo-400 p-2 rounded-md">
          Go back
        </Link>
        <button
          className="bg-indigo-400 p-2 rounded-md m-3"
          onClick={generateRandomNumber}
        >
          Generate Random Number
        </button>

        <p className="text-2xl  text-center text-grey-300 m-3">
          Random Number: {randomNumber}
        </p>
        {isRandomNumberEven ? (
          <Card
            title="Lazy Loading Card"
            details="This is a lazy loading card."
          ></Card>
        ) : (
          <p className="text-2xl font-bold text-center text-red-600">
            No Lazy Card is required
          </p>
        )}
      </div>
    </>
  );
}
