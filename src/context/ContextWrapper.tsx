import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  ReactNode,
} from 'react'
import globalContext, { CalendarEvent, DispatchPayload } from './GlobalContext'
import dayjs from 'dayjs'

function savedEventsReducer(
  state: CalendarEvent[],
  { type, payload }: DispatchPayload
) {
  switch (type) {
    case 'push':
      return [...state, payload]
    case 'update':
      return state.map((event: CalendarEvent) =>
        event.id === payload.id ? payload : event
      )
    case 'delete':
      return state.filter((event: CalendarEvent) => event.id !== payload.id)
    default:
      throw new Error()
  }
}

function initialEvent() {
  const storedEvents = localStorage.getItem('savedEvents')
  const parsedEvents = storedEvents ? JSON.parse(storedEvents) : []
  return parsedEvents
}

export interface CreateEvent {
  label: string
  title: string
  description: string
  id: number
  day: number
}

interface ContextWrapperTypes {
  monthIdx: number
  smallCalendarMonth: number
  selectedDay: dayjs.Dayjs
  showEvent: boolean
  selectedCalendarEvent: Event
  labels: string[]
  children: ReactNode
}

export interface LabelType {
  label: string
  checkLabel: boolean
}

export default function ContextWrapper(props: ContextWrapperTypes) {
  const [monthIdx, setMonthIdx] = useState(dayjs().month())
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(0)
  const [selectedDay, setSelectedDay] = useState(dayjs())
  const [showEvent, setShowEvent] = useState(false)
  const [selectedCalendarEvent, setSelectedCalendarEvent] = useState(null)
  const [labelsInState, setLabelsInState] = useState<LabelType[]>([])

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
    if (!showEvent) {
      setSelectedCalendarEvent(null)
    }
  }, [showEvent])

  useEffect(() => {
    //@ts-ignore
    setLabels((prev) => {
      return [
        ...new Set(savedEvents.map((event: CalendarEvent) => event.label)),
      ].map((label) => {
        //@ts-ignore
        const curr = prev.find((l) => l.label === label)
        return {
          label,
          checkLabel: curr ? curr : true,
        }
      })
    })
  }, [savedEvents])

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
  }, [savedEvents])

  function updateLabel(newLabel: LabelType) {
    setLabelsInState(
      labelsInState.map((lbl) =>
        lbl.label === newLabel.label ? newLabel : lbl
      )
    )
  }

  const filterEvents = useMemo(() => {
    return savedEvents.filter((e: CalendarEvent) =>
      labelsInState
        .filter((l) => l.checkLabel)
        .map((l) => l.label)
        .includes(e.label)
    )
  }, [savedEvents, labelsInState])

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
        selectedCalendarEvent,
        setSelectedCalendarEvent,
        labelsInState,
        setLabelsInState,
        updateLabel,
        filterEvents,
      }}
    >
      {props.children}
    </globalContext.Provider>
  )
}
