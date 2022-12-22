import React from 'react'
import CreateEventButton from './CreateEventButton'
import Label from './Label'
import SmallCalendar from './SmallCalendar'

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Label />
    </aside>
  )
}
