import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import './Placements.css'

const Count = () => {
  const [state, setState] = useState("000");

  const ref = useRef(0);
  const accumulator = 700 / 90000000; /**22 secs */

  const UpdateCount = () => {

    if (ref.current < 700) {
      const res = Math.ceil(ref.current + accumulator);
      if (res > 700) 
        return setState(700);

      setState(res);
      ref.current = res;
    }
    setTimeout(UpdateCount, 50);
  };


  useEffect(() => {
    let isMounted = true;
    if (isMounted) {UpdateCount()};
    return () => (isMounted = false);
  }, [700]);

  return (
    <>
      <div id="counter">{state}</div>
    </>
  );
};

export default Count;