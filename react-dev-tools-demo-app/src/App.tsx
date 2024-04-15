import { Link } from "react-router-dom";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <div className="w-[90%] m-[auto]">
        <div className="flex flex-col justify-center items-center mt-[50px]">
          <h3 className="text-[24px] font-bold mb-[20px] text-indigo-800">
            Dev Tools Session
          </h3>
          <Link
            to="/detached-dom-example"
            className="bg-orange-400 p-2 rounded-md m-2"
          >
            Detached DOM Example
          </Link>
          <Link
            to="/lazy-loading-example"
            className="bg-orange-400 p-2 rounded-md m-2"
          >
            Lazy Loading Example
          </Link>
          <Card
            details="This is a card. It has a title and some details. You can click on it to learn more.      
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio maxime vero harum facilis tempore aliquid adipisci ullam nesciunt natus. Qui blanditiis velit perferendis rem. Sapiente illo quae optio ea nostrum."
            title="Card Title"
          />
        </div>
      </div>
    </>
  );
}

export default App;
