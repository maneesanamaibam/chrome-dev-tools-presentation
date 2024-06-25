import { useState } from "react";
import BaseInput from "./BaseInput";
import BaseInputGPT from "./BaseInputGPT";

export default function PerformanceProfilingFixMe() {
  const [score, setScore] = useState(0);

  const [bgColor, setBgColor] = useState({
    head: "#047857",
    headInnerCircle: "#fdba74",
    headInnerCircleEye: "#fff",
    body: "#818cf8",
    innerBody: "#34d399",
  });
  const increaseScore = () => {
    performance.mark("IncreaseScoreWithRandomNumber");
    const randNumb = getRandomNumberAfterNoOfTimes();
    setScore(randNumb);
    performance.measure(
      "RunIncreaseScoreWithRandomNumber",
      "IncreaseScoreWithRandomNumber"
    );
  };
  const getRandomColor = () => {
    const rValue = Math.floor(Math.random() * 255);
    const gValue = Math.floor(Math.random() * 255);
    const bValue = Math.floor(Math.random() * 255);
    return `rgb(${rValue},${gValue},${bValue})`;
  };
  console.log("Color", bgColor);

  const getRandomNumberAfterNoOfTimes = () => {
    performance.mark("GetRandomNumberAfterMillionTimes");
    let randomNumber = 0;

    for (let i = 0; i <= 1000_000; i++) {
      randomNumber = 1 + Math.random() * 100;
    }
    performance.measure(
      "RunRandomNumberAfterNoOfTimes",
      "GetRandomNumberAfterMillionTimes"
    );
    return randomNumber;
  };

  const changeColor = () => {
    performance.mark("ChangeColor");
    setBgColor({
      head: getRandomColor(),
      headInnerCircle: getRandomColor(),
      headInnerCircleEye: getRandomColor(),
      body: getRandomColor(),
      innerBody: getRandomColor(),
    });
    performance.measure("RunChangeColor", "ChangeColor");
  };
  return (
    <>
      <div className="w-[90%] mx-auto mt-10">
        <form>
          <label>Number Input</label>
          <div>
            <BaseInput placeholder="Enter a number upto 6 digits" />
          </div>
        </form>
        <form>
          <label>ChatGPT Number Input</label>
          <div>
            <BaseInputGPT placeholder="Enter a number upto 6 digits" />
          </div>
        </form>
        <h3 className="text-emerald-700 text-2xl my-10">
          {" "}
          Performance profile with Issue
        </h3>
        <div
          className="w-[90%] mx-auto flex justify-center cursor-pointer"
          onPointerDown={changeColor}
          onClick={increaseScore}
        >
          <div className="flex flex-col justify-center items-center">
            <div
              style={{
                backgroundColor: bgColor.head,
              }}
              className={`w-[120px] h-[120px] rounded-full flex items-center gap-2 justify-center`}
            >
              <div
                style={{
                  backgroundColor: bgColor.headInnerCircle,
                }}
                className="w-[40px] h-[40px] rounded-full   flex items-center justify-center"
              >
                <div
                  style={{
                    backgroundColor: bgColor.headInnerCircleEye,
                  }}
                  className="w-[15px] h-[15px] rounded-full"
                ></div>
              </div>
              <div
                style={{
                  backgroundColor: bgColor.headInnerCircle,
                }}
                className="w-[40px] h-[40px] rounded-full   flex items-center justify-center"
              >
                <div
                  style={{
                    backgroundColor: bgColor.headInnerCircleEye,
                  }}
                  className="w-[15px] h-[15px]  rounded-full"
                ></div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: bgColor.body,
              }}
              className="w-[200px] h-[350px] rounded-t-[150px] rounded-b-[150px] flex flex-col justify-end p-3"
            >
              <div
                style={{
                  backgroundColor: bgColor.innerBody,
                }}
                className="w-full  p-3 my-2 rounded-sm"
              ></div>
              <div className="bg-white  w-full h-[100px] mb-[90px] rounded-t-[30px]"></div>
            </div>
          </div>

          <div className=""></div>
        </div>

        <span className="text-center text-indigo-800 italic font-bold text-xl">
          Score : {score}
        </span>
      </div>
    </>
  );
}
