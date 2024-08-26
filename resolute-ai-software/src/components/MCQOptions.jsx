
const MCQOptions = ({options, handleOptionChange, handleRemoveOption, handleAddOption}) => {
  return (
    <div>
              {/* Render options */}
              {options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    className="border-b-2 border-b-slate-400 focus:border-b-slate-500 focus:border-b-[3px] p-2 mt-2 rounded-sm bg-gray-200 outline-none flex-1 mr-2"
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                  {/* Cross button to remove option */}
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleRemoveOption(index)}
                  >
                    X
                  </button>
                </div>
              ))}
              {/* Button to add more options */}
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddOption}
              >
                Add Option
              </button>
            </div>
  )
}

export default MCQOptions