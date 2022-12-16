import React from 'react'

const globalContext = React.createContext({
  monthIdx: 0,
  setMonthIdx: (idx) => {},

  smallCalendarMonth: 0,
  setSmallCalendarMonth: (idx) => {},

  selectedDay: null,
  setSelectedDay: (day) => {},

  showEvent: false,
  setShowEvent: () => {},

  savedEvents: [],
  dispatchEvents: ({ type, payload }) => {},
})

export default globalContext
