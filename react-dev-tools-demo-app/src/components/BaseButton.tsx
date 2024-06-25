import { ReactNode } from "react";

interface IBaseButton {
  children:
    | {
        upper?: () => ReactNode;
        lower?: () => ReactNode;
      }
    | ReactNode[];
}
export default function BaseButton({ children }: IBaseButton) {
  console.log(children);
  //   let result = Object.values(children).map((child) => child());
  const isChildrenTypeArray = Array.isArray(children);
  console.log("isChildrenTypeArray", isChildrenTypeArray);
  return (
    <>
      <h4 className="my-2 text-center text-2xl font-bold text-blue-500">
        upper
      </h4>
      <div className="bg-teal-900 text-white p-2 rounded-md">
        {isChildrenTypeArray && children[0]}
        {!isChildrenTypeArray && children.upper && children.upper()}
      </div>
      <button
        className="bg-red-900 text-white p-2 rounded-md my-2"
        type="button"
      >
        Base Button
      </button>
      <h4 className="my-2 text-center text-2xl font-bold text-orange-400">
        lower
      </h4>
      <div className="bg-indigo-900 text-white p-2 rounded-md">
        {isChildrenTypeArray && children[1]}
        {!isChildrenTypeArray && children.lower && children.lower()}
      </div>
    </>
  );
}
