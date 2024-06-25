import { useState } from "react";
import { Link } from "react-router-dom";
declare global {
  interface Window {
    leakedObjects: HTMLDivElement[];
  }
}

export default function DetachedDom() {
  const [showText, setShowText] = useState<boolean | null>(null);
  let timeOutId: NodeJS.Timeout | null = null;
  const addNewItem = () => {
    timeOutId && clearTimeout(timeOutId);
    setShowText(false);
    if (!window.leakedObjects) {
      window.leakedObjects = [];
    }
    timeOutId = setTimeout(() => {
      for (let i = 0; i < 1024; i++) {
        window.leakedObjects.push(document.createElement("div"));
      }
      setShowText(true);
    }, 2000);
  };
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl text-teal-500 font-bold text-center mb-4">
        Detached DOM Example
      </h3>
      <div className="row">
        <Link to="/" className="bg-indigo-400 p-2 rounded-md">
          Go back
        </Link>
      </div>
      <br />
      <div className="row">
        <button
          type="button"
          className="bg-teal-400 p-2 rounded-md"
          onClick={addNewItem}
        >
          Create detached DOMs
        </button>
      </div>
      {showText === null && (
        <p className="p-3 text-xl italic text-emerald-800">
          No Detached DOMs created yet.
        </p>
      )}
      {!showText && showText !== null && (
        <p className="p-3 text-xl italic text-emerald-800">
          Creating detached DOMs...
        </p>
      )}
      {showText && (
        <p className="p-3 text-xl italic text-indigo-800">
          Detached DOMs are created. Please check Memory tab in devtools
        </p>
      )}
    </div>
  );
}
