import React from "react";

const globalContext = React.createContext({
  monthIdx: 0,
  setMonthIdx: (idx) => {},
});

export default globalContext;
