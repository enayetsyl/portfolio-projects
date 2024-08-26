import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { TbFileArrowRight } from "react-icons/tb";
import { MdOutlineTextFields } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { TiEqualsOutline } from "react-icons/ti";
import QuestionDiv from "../components/QuestionDiv";

const CreateForm = () => {
  const [formTitle, setFormTitle] = useState("Untitled form");
  const [formDescription, setFormDescription] = useState("");
  const [additionalDivs, setAdditionalDivs] = useState([]);
  const [questionType, setQuestionType] = useState("mcq"); 

  const [shortAnswer, setShortAnswer] = useState("");
  const [paragraph, setParagraph] = useState("")
  const [options, setOptions] = useState([""]);
  const [date, setDate] = useState(""); 
  const [time, setTime] = useState("");

  console.log(formTitle, formDescription, shortAnswer, paragraph, options, date, time)
  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
    // setShortAnswer("");
    // setParagraph("");
    // setOptions([""]);
    // setDate("");
    // setTime(""); 
  };

  const handleShortAnswerChange = (event) => {
    setShortAnswer(event.target.value);
  };
  
  const handleParagraphChange = (event) => {
    setParagraph(event.target.value);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleAddDiv = () => {
    setAdditionalDivs([...additionalDivs, {}]);
  };


  return (
    <div className="flex justify-center items-end gap-5 pt-20">
      {/* Form name */}
      <div className="max-w-3xl  space-y-3">
      <div className=" rounded-xl border-t-8 border-t-purple-700 custom-div  bg-white py-2">
        <input
          type="text"
          placeholder="Untitled form"
          className="border-b-2 border-b-slate-400 w-[95%] text-4xl outline-none px-2 py-1 my-2 mx-2  "
          value={formTitle}
          onChange={(e)=>setFormTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Form description"
          className="border-b-2 border-b-slate-400 w-[95%] text-lg outline-none px-2 py-1  mx-2 mb-2 focus:border-b-slate-500 focus:border-b-[3px]"
          value={formDescription}
          onChange={(e)=>setFormDescription(e.target.value)}
        />
      </div>
        {/* Additional divs */}
        {additionalDivs.map((div, index) => (
        <QuestionDiv key={index}
        questionType={questionType}
        setQuestionType={setQuestionType}
        shortAnswer={shortAnswer}
        setShortAnswer={setShortAnswer}
        paragraph={paragraph}
        options={options}
        date={date}
        time={time}
        handleQuestionTypeChange={handleQuestionTypeChange}
        handleShortAnswerChange={handleShortAnswerChange}
        handleParagraphChange={handleParagraphChange}
        handleOptionChange={handleOptionChange}
        handleAddOption={handleAddOption}
        handleRemoveOption={handleRemoveOption}
        handleDateChange={handleDateChange}
        handleTimeChange={handleTimeChange}


        />
      ))}
    </div>
    {/* Icon */}
    <div className="p-4 bg-white rounded-xl flex flex-col gap-5 text-2xl text-gray-700">
      <CiCirclePlus onClick={handleAddDiv}/>
      <TbFileArrowRight/>
      <MdOutlineTextFields/>
      <MdOutlineImage/>
      <GoVideo/>
      <TiEqualsOutline/>
    </div>
    </div>
  );
};

export default CreateForm;
