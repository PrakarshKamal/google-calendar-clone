import React, { useContext } from 'react'
import globalContext from '../context/GlobalContext'

export default function Label() {
  const { labels, updateLabel } = useContext(globalContext)

  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: l, checkLabel }, idx) => (
        <label key={idx} className="items-center block mt-3">
          <input
            type="checkbox"
            checked={checkLabel}
            onChange={() => updateLabel({ label: l, checkLabel: !checkLabel })}
            className={`form-checkbox rounded h-5 w-5 text-${l}-400 focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 capitalize text-gray-700">{l}</span>
        </label>
      ))}
    </React.Fragment>
  )
}
