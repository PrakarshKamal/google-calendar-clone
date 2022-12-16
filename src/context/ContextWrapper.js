import React, { useState, useEffect, useReducer } from 'react'
import globalContext from './GlobalContext'
import dayjs from 'dayjs'

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case 'push':
      return [...state, payload]
    case 'update':
      return state.map((event) => (event.id === payload.id ? payload : event))
    case 'delete':
      return state.filter((event) => event.id !== payload.id)
    default:
      throw new Error()
  }
}

function initialEvent() {
  const storedEvents = localStorage.getItem('savedEvents')
  const parsedEvents = storedEvents ? JSON.parse(storedEvents) : []
  return parsedEvents
}

export default function ContextWrapper(props) {
  const [monthIdx, setMonthIdx] = useState(dayjs().month())
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
  const [selectedDay, setSelectedDay] = useState(dayjs())
  const [showEvent, setShowEvent] = useState(false)

  const [savedEvents, dispatchEvents] = useReducer(
    savedEventsReducer,
    [],
    initialEvent
  )

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIdx(smallCalendarMonth)
    }
  }, [smallCalendarMonth])

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
  }, [savedEvents])

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
        savedEvents,
        dispatchEvents,
      }}
    >
      {props.children}
    </globalContext.Provider>
  )
}
