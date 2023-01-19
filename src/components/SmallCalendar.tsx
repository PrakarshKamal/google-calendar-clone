import React, { useEffect, useState, useContext } from 'react'
import { getMonth } from '../utils'
import globalContext from '../context/GlobalContext'
import dayjs from 'dayjs'

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  const { monthIdx, setSmallCalendarMonth, selectedDay, setSelectedDay } =
    useContext(globalContext)

  useEffect(() => {
    setCurrentMonthIdx(monthIdx)
  }, [monthIdx])

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx))
  }, [currentMonthIdx])

  function handlePreviousMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1)
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1)
  }

  function getCurrentDayClass(day: dayjs.Dayjs) {
    const format = 'DD-MM-YY'
    const currentDay = dayjs().format(format)
    const currDay = day.format(format)
    const chosenDay = selectedDay && selectedDay.format(format)

    if (currDay === currentDay) {
      return 'bg-blue-600 text-white rounded-full'
    } else if (currDay === chosenDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold'
    } else {
      return ''
    }
  }
  return (
    <div className="mt-7">
      <header className="flex justify-between">
        <p className="text-gray-600">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
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
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, idx) => (
          <span key={idx} className="text-sm text-gray-500 py-1 text-center">
            {day.format('dd').charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, idx) => (
          <React.Fragment key={idx}>
            {row.map((day, j) => (
              <button
                key={j}
                className={`py-1 w-full ${getCurrentDayClass(day)}`}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx)
                  setSelectedDay(day)
                }}
              >
                <span className="text-sm">{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
