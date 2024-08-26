import React from 'react'

const TimeInput = ({time, handleTimeChange}) => {
  return (
    <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              className="border-b-2 border-b-slate-400 focus:border-b-slate-500 focus:border-b-[3px] p-2 mt-2 rounded-sm bg-gray-200 outline-none"
            />
  )
}

export default TimeInput