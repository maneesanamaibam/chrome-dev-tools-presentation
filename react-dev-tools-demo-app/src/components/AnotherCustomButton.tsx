import { ReactNode } from "react";

interface IAnotherCustomButton {
  upperSlot?: ReactNode;
  lowerSlot?: ReactNode;
}

export default function AnotherCustomButton({
  upperSlot,
  lowerSlot,
}: IAnotherCustomButton) {
  return (
    <>
      <h3>upper</h3>
      {upperSlot && upperSlot}
      <button>Another Custom Button</button>
      <h3>lower</h3>
      {lowerSlot && lowerSlot}
    </>
  );
}
