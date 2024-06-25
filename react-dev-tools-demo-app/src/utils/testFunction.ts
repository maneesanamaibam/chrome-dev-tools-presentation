export const testFunction = () => {
  for (const i of Object.keys(new Array(1024))) {
    const isEqual = Math.floor(Math.random() * 1024).toString() === i;
    if (isEqual) {
      console.log("Lucky !!", i);
    } else {
      console.log("Come back next time !!!", i);
    }
  }
};
