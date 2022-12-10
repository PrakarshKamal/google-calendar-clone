import React, { useContext } from "react";
import plus from "../assets/plus.svg";
import globalContext from "../context/GlobalContext";

export default function CreateEventButton() {
  const { setShowEvent } = useContext(globalContext);

  return (
    <button
      onClick={() => setShowEvent(true)}
      id="createEventButton"
      className="border rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plus} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
