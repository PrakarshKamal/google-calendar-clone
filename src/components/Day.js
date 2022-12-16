import React, { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import globalContext from '../context/GlobalContext'

const format = 'DD-MM-YY'

export default function Day({ day, rowIdx }) {
  function getCurrentDayClass() {
    return day.format(format) === dayjs().format(format)
      ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }

  const [event, setEvent] = useState([])

  const { setSelectedDay, setShowEvent, savedEvents } =
    useContext(globalContext)

  useEffect(() => {
    const events = savedEvents.filter(
      (e) => dayjs(e.day).format(format) === day.format(format)
    )
    setEvent(events)
  }, [day, savedEvents])

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1 text-gray-500">
            {day.format('ddd').toUpperCase()}
          </p>
        )}

        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setSelectedDay(day)
          setShowEvent(true)
        }}
      >
        {event.map((e, idx) => (
          <div
            key={idx}
            className={`bg-${e.label}-200 p-1 mr-3 w-full text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {e.title}
          </div>
        ))}
      </div>
    </div>
  )
}
