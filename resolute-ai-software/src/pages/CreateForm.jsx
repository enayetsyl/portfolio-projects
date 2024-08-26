import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { TbFileArrowRight } from "react-icons/tb";
import { MdOutlineTextFields } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { TiEqualsOutline } from "react-icons/ti";
import QuestionDiv from "../components/QuestionDiv";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
const CreateForm = () => {
  const { authUser } = useAuthContext();

  const [formTitle, setFormTitle] = useState("Untitled form");

  const [formDescription, setFormDescription] = useState("");

  const [questionDivs, setQuestionDivs] = useState([]);

  const handleAddDiv = () => {
    setQuestionDivs([
      ...questionDivs,
      { question: "", answerType: "shortAnswer", answer: "" },
    ]);
    toast.success("New question added");
  };

  const handleDivDelete = (index) => {
    const updatedQuestionDivs = [...questionDivs];
    updatedQuestionDivs.splice(index, 1);
    setQuestionDivs(updatedQuestionDivs);
    toast.success("Question deleted.");
  };

  const handleQuestionChange = (index, question) => {
    const updatedQuestionDivs = [...questionDivs];
    updatedQuestionDivs[index].question = question;
    setQuestionDivs(updatedQuestionDivs);
  };

  const handleAnswerTypeChange = (index, answerType) => {
    const updatedQuestionDivs = [...questionDivs];
    updatedQuestionDivs[index].answerType = answerType;
    setQuestionDivs(updatedQuestionDivs);
  };

  const handleAnswerChange = (index, answer) => {
    const updatedQuestionDivs = [...questionDivs];
    updatedQuestionDivs[index].answer = answer;
    setQuestionDivs(updatedQuestionDivs);
  };

  const handleFormCreate = async () => {
    const formData = {
      creator: authUser._id,
      formTitle,
      formDescription,
      questionDivs,
    };
    console.log(formData);
    try {
      const res = await fetch("http://localhost:5000/api/form/createForm", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      if(!data.error) {
        toast.success('Form created successfully.')
        setFormTitle('Untitled Form')
        setFormDescription('')
        setQuestionDivs([])
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      // setLoading(false)
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" flex justify-end px-10 py-5 items-center">
        <h1 className="text-5xl pr-[400px]">Create Your form</h1>
        <button
          className="bg-white/90 px-3 py-2 rounded-xl"
          onClick={handleFormCreate}
        >
          Create
        </button>
      </div>
      <div className="flex justify-center items-start gap-5 pt-10 pb-20">
        {/* Form name */}
        <div className="max-w-3xl  space-y-3">
          <div className=" rounded-xl border-t-8 border-t-purple-700 custom-div  bg-white py-2">
            <input
              type="text"
              placeholder="Untitled form"
              className="border-b-2 border-b-slate-400 w-[95%] text-4xl outline-none px-2 py-1 my-2 mx-2  "
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Form description"
              className="border-b-2 border-b-slate-400 w-[95%] text-lg outline-none px-2 py-1  mx-2 mb-2 focus:border-b-slate-500 focus:border-b-[3px]"
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
            />
          </div>
          {/* Additional divs */}
          {questionDivs.map((div, index) => (
            <QuestionDiv
              key={index}
              index={index}
              question={div.question}
              answerType={div.answerType}
              answer={div.answer}
              onQuestionChange={handleQuestionChange}
              onAnswerTypeChange={handleAnswerTypeChange}
              onAnswerChange={handleAnswerChange}
              handleDivDelete={() => handleDivDelete(index)}
            />
          ))}
        </div>
        {/* Icon */}
        <div className="p-4 bg-white rounded-xl flex flex-col gap-5 text-2xl text-gray-700 cursor-pointer">
          <CiCirclePlus onClick={handleAddDiv} />
          <TbFileArrowRight />
          <MdOutlineTextFields />
          <MdOutlineImage />
          <GoVideo />
          <TiEqualsOutline />
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
