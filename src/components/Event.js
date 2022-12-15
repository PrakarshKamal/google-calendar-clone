import React, { useContext, useState } from "react";
import globalContext from "../context/GlobalContext";

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
  "yellow",
  "cyan",
];

export default function Event() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0]);

  const { setShowEvent, selectedDay } = useContext(globalContext);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button onClick={() => setShowEvent(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p className="ml-2">{selectedDay.format("dddd, MMMM, DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((label, idx) => (
                <span
                  key={idx}
                  onClick={() => setSelectedLabel(label)}
                  className={`bg-${label}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === label && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-5">
          <button
            type="submit"
            className="bg-blue-500 rounded text-white hover:bg-blue-600 px-6 py-2"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
