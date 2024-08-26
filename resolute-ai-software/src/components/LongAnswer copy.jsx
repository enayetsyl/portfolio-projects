
const LongAnswer = ({paragraph, handleParagraphChange}) => {
  return (
    <textarea
    type="text"
    placeholder="Long answer text"
    value={paragraph} 
    onChange={handleParagraphChange} 
    className="border border-gray-300 p-2 mt-2 rounded-sm outline-none w-full"
  />
  )
}

export default LongAnswer