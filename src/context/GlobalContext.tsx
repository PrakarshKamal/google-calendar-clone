import dayjs from 'dayjs'
import React from 'react'
import Event from '../components/Event'
import { CreateEvent } from './ContextWrapper'

const globalContext = React.createContext({
  monthIdx: 0,
  setMonthIdx: (idx) => {},

  smallCalendarMonth: 0,
  setSmallCalendarMonth: (idx) => {},

  selectedDay: dayjs(),
  setSelectedDay: (day) => {},

  showEvent: false,
  setShowEvent: (isEvent) => isEvent,
  // Type 'Dispatch<SetStateAction<boolean>>'

  savedEvents: [],
  dispatchEvents: ({ type, payload }) => {},

  showSelectedEvent: {
    title: '',
    description: '',
    label: '',
    id: Date.now(),
  },
  setShowSelectedEvent: (event: CreateEvent) => event,

  labels: [],
  setLabels: (isLabel) => isLabel,
  updateLabel: (label) => label,

  filterEvents: [],
})

export default globalContext
