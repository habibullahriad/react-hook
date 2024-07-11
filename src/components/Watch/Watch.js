import React, { useEffect, useState } from "react";
import Display from "../Display/Display";
import Dial from "../Dial/Dial";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  };
  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <div style={{ border: "2px solid green" }}>
      <h2>This is my smart Watch</h2>
      <h3>My current steps:{steps}</h3>
      <button onClick={increaseSteps}>CLICK</button>
      <Display name="garmin" steps={steps}></Display>
    </div>
  );
};

export default Watch;
