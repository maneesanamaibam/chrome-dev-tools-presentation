import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-[90%] m-[auto]">
        <h3 className="text-[24px] font-bold mb-[20px] text-indigo-800 mt-5">
          Dev Tools Session
        </h3>
        <div className="flex  items-center mt-[50px]">
          <Link
            to="/detached-dom-example"
            className="bg-orange-400 p-2 rounded-md m-2"
          >
            Detached DOM Example
          </Link>
          <Link
            to="/i-have-a-bug-fix-me"
            className="bg-orange-400 p-2 rounded-md m-2"
          >
            Debugging - bug fixing
          </Link>
          {/* <Link
            to="/lazy-loading-example"
            className="bg-orange-400 p-2 rounded-md m-2"
          >
            Lazy Loading Example
          </Link> */}
          <Link
            to="/performance-profiling-having-issue"
            className="bg-orange-400 p-2 rounded-md m-2"
          >
            Runtime performance profiling (with Issues)
          </Link>
          <Link
            to="/performance-profiling-no-issue"
            className="bg-orange-400 p-2 rounded-md m-2"
          >
            Runtime performance profiling (without Issues)
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
