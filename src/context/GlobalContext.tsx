import dayjs from 'dayjs'
import React from 'react'
// import Event from '../components/Event'
import { CreateEvent, LabelType } from './ContextWrapper'

type DispatchTypes = 'update' | 'push' | 'delete'

export interface CalendarEvent {
  title: string
  description: string
  label: string
  day?: number
  id: number
}

export interface DispatchPayload {
  type: DispatchTypes
  payload: CalendarEvent
}

// type DispatchTypes = keyof typeof obj;

const globalContext = React.createContext({
  monthIdx: 0,
  setMonthIdx: (idx: number) => {},

  smallCalendarMonth: 0,
  setSmallCalendarMonth: (idx: number) => {},

  selectedDay: dayjs(),
  setSelectedDay: (day: dayjs.Dayjs) => {},

  showEvent: false,
  setShowEvent: (isEvent: boolean) => isEvent,
  // Type 'Dispatch<SetStateAction<boolean>>'

  savedEvents: [],
  dispatchEvents: ({ type, payload }: DispatchPayload) => {},

  selectedCalendarEvent: {
    title: '',
    description: '',
    label: '',
    id: Date.now(),
  },
  setSelectedCalendarEvent: (event: CreateEvent) => event,

  labels: [],
  setLabels: (isLabel: boolean) => isLabel,
  updateLabel: (label: LabelType) => label,

  filterEvents: [],
})

export default globalContext
