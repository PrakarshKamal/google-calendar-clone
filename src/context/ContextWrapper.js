import React, { useState, useEffect } from "react";
import globalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) { 
  const [monthIdx, setMonthIdx] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showEvent, setShowEvent] = useState(false);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIdx(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  return (
    <globalContext.Provider
      value={{
        monthIdx,
        setMonthIdx,
        smallCalendarMonth,
        setSmallCalendarMonth,
        selectedDay,
        setSelectedDay,
        showEvent,
        setShowEvent,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
}
