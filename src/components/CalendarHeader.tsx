import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import globalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const { monthIdx, setMonthIdx } = useContext(globalContext);

  function handlePreviousMonth() {
    setMonthIdx(monthIdx - 1);
  }

  function handleNextMonth() {
    setMonthIdx(monthIdx + 1);
  }

  function handleReset() {
    setMonthIdx(
      monthIdx === dayjs().month() ? monthIdx + Math.random() : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-600">Calendar</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
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
      <h2 className="ml-4 text-xl text-gray-600">
        {dayjs(new Date(dayjs().year(), monthIdx)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
