import React, { useState } from "react";
import globalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIdx, setMonthIdx] = useState(dayjs().month());
  return (
    <globalContext.Provider value={{ monthIdx, setMonthIdx }}>
      {props.children}
    </globalContext.Provider>
  );
}
