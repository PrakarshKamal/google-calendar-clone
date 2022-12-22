import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./utils";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import Event from "./components/Event";
import globalContext from "./context/GlobalContext";

function App() {
  const { monthIdx, showEvent } = useContext(globalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIdx));
  }, [monthIdx]);

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          {showEvent && <Event />}
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
