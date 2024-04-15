import { Link } from "react-router-dom";

export default function DetachedDom() {
  const addNewItem = () => {
    if (!window.leakedObjects) {
      window.leakedObjects = [];
    }
    for (let i = 0; i < 1024; i++) {
      window.leakedObjects.push(document.createElement("div"));
    }
    console.log(
      "Detached DOMs are created. Please check Memory tab in devtools"
    );
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
    </div>
  );
}
