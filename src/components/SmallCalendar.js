import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getMonth } from "../utils";
import globalContext from "../context/GlobalContext";
import { useContext } from "react";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIdx } = useContext(globalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIdx);
  }, [monthIdx]);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  function handlePreviousMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getCurrentDayClass(day) {
    // const currentDay = dayjs().format("DD-MM-YY");
    // const currDay = day.format("DD-MM-YY");
    // if (currentDay === currDay) {
    //   return "bg-blue-500 text-black rounded-full";
    // } else {
    //   return "";
    // }
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full"
      : "";
  }
  return (
    <div id="smallCalendarContainer">
      <header className="flex justify-between">
        <p className="text-gray-600">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <button onClick={handlePreviousMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
          </span>
        </button>
      </header>
      <div id="sCChild" className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, idx) => (
          <span key={idx} className="text-sm text-gray-500 py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, idx) => (
          <React.Fragment key={idx}>
            {row.map((day, j) => (
              <button
                key={j}
                className={`py-1 w-full ${getCurrentDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
