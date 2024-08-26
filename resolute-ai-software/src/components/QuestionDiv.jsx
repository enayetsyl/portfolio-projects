import { MdDeleteOutline } from "react-icons/md";
const QuestionDiv = ({
  index,
  question,
  answerType,
  answer,
  onQuestionChange,
  onAnswerTypeChange,
  onAnswerChange,
  handleDivDelete
}) => {
  console.log(question, answer)
  const handleQuestionInputChange = (e) => {
    onQuestionChange(index, e.target.value);
  };

  const handleAnswerTypeSelectChange = (e) => {
    onAnswerTypeChange(index, e.target.value);
  };

  const handleAnswerInputChange = (e) => {
    onAnswerChange(index, e.target.value);
  };

  return (
    <div className="rounded-xl bg-white p-2 custom-div">
      <div className="flex justify-center items-start gap-5 pb-3">
        <div className="flex-1">
          {/* Question */}
          <input
            type="text"
            placeholder="Question"
            className="border-b-2 border-b-slate-400 focus:border-b-slate-500 focus:border-b-[3px] p-2 mt-2 rounded-sm bg-gray-200 outline-none w-full"
            value={question}
            onChange={handleQuestionInputChange}
          />
          {/* Render answer input based on answerType */}
          {answerType === "shortAnswer" && (
            <input
              type="text"
              placeholder="Short answer"
              className="border-b-2 border-b-slate-400 focus:border-b-slate-500 focus:border-b-[3px] p-2 mt-2 rounded-sm bg-gray-200 outline-none w-full"
              value={answer}
              onChange={handleAnswerInputChange}
            />
          )}
          {answerType === "paragraph" && (
            <textarea
              placeholder="Paragraph"
              className="border-b-2 border-b-slate-400 focus:border-b-slate-500 focus:border-b-[3px] p-2 mt-2 rounded-sm bg-gray-200 outline-none w-full"
              value={answer}
              onChange={handleAnswerInputChange}
            />
          )}
        </div>
        <select
          className="border border-gray-300 p-2 mt-2 rounded-sm outline-none"
          value={answerType}
          onChange={handleAnswerTypeSelectChange}
        >
          <option value="shortAnswer">Short answer</option>
          <option value="paragraph">Paragraph</option>
        </select>
      </div>
      <hr />
      <div className="pt-3 flex justify-end pr-10">

<MdDeleteOutline className="text-2xl text-red-700 cursor-pointer" onClick={handleDivDelete}/>
      </div>
    </div>
  );
};

export default QuestionDiv;
