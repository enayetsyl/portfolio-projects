
const ShortAnswer = ({shortAnswer, handleShortAnswerChange}) => {
  return (
    <input
    type="text"
    placeholder="Short answer text"
    value={shortAnswer} 
    onChange={handleShortAnswerChange} 
    className="border border-gray-300 p-2 mt-2 rounded-sm outline-none w-full"
  />
  )
}

export default ShortAnswer