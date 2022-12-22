import React, { useContext } from "react";
import plus from "../assets/plus.svg";
import globalContext from "../context/GlobalContext";

export default function CreateEventButton() {
  const { setShowEvent } = useContext(globalContext);

  return (
    <button
      onClick={() => setShowEvent(true)}
      className="border p-2 rounded-full ml-[-10px] flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plus} alt="create_event" className="w-11 h-8" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
