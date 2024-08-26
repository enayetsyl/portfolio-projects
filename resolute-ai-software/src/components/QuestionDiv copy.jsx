import  { useState } from "react";
import ShortAnswer from "./ShortAnswer";
import LongAnswer from "./LongAnswer";
import MCQOptions from "./MCQOptions";
import DateInput from "./DateInput";
import TimeInput from "./TimeInput";

const QuestionDiv = ({questionType, shortAnswer, paragraph, options, date, time, handleQuestionTypeChange, handleShortAnswerChange, handleParagraphChange, handleOptionChange, handleAddOption, handleRemoveOption, handleDateChange, handleTimeChange}) => {
  // Render input field based on question type
  const renderInputField = () => {
    switch (questionType) {
      case "shortAnswer":
        return (
          <ShortAnswer
            shortAnswer={shortAnswer}
            handleShortAnswerChange={handleShortAnswerChange}
          />
        );
      case "paragraph":
        return (
          <LongAnswer
            paragraph={paragraph}
            handleParagraphChange={handleParagraphChange}
          />
        );
      case "mcq":
      case "checkboxes":
      case "dropdown":
        return (
          <MCQOptions
            options={options}
            handleOptionChange={handleOptionChange}
            handleRemoveOption={handleRemoveOption}
            handleAddOption={handleAddOption}
          />
        );
      case "date":
        return <DateInput date={date} handleDateChange={handleDateChange} />;
      case "time":
        return <TimeInput time={time} handleTimeChange={handleTimeChange} />;
      default:
        return null;
    }
  };
  return (
    <div className=" rounded-xl  bg-white p-2 custom-div">
      <div className="flex justify-center items-start gap-5">
        <div className="flex-1">
          {/* question */}
          <input
            type="text"
            placeholder="Question"
            className="border-b-2 border-b-slate-400 focus:border-b-slate-500 focus:border-b-[3px] p-2 mt-2 rounded-sm bg-gray-200 outline-none w-full"
          />
          {/* Options */}
          {renderInputField()}
        </div>
        <select
          className="border border-gray-300 p-2 mt-2 rounded-sm outline-none"
          value={questionType} 
          onChange={handleQuestionTypeChange}
        >
          <option value="shortAnswer">Short answer</option>
          <option value="paragraph">Paragraph</option>
          <option value="mcq">Multiple choice</option>
          <option value="checkboxes">Checkboxes</option>
          <option value="dropdown">Dropdown</option>
          <option value="fileUpload">File upload</option>
          <option value="date">Date</option>
          <option value="time">Time</option>
        </select>
      </div>
    </div>
  );
};

export default QuestionDiv;
