import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

const ShowForm = () => {
  const { authUser } = useAuthContext();
  const [forms, setForms] = useState([]);
  const [dynamicLink, setDynamicLink] = useState('')

  console.log(forms);
  const getFormData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/form/getForm?userId=${authUser._id}`
      );
      const data = await response.json();
      // Update the state with the fetched forms
      setForms(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(() => {
    // Call the getFormData function when the component mounts
    getFormData();
  }, []);

  const generateFormLink = (id) => {
    setDynamicLink(`http://localhost:5173/showform/${id}`)
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dynamicLink);
    toast.success('Link copied.')
  };

  return (
    <div>
      <Navbar/>
      <div className="max-w-3xl mx-auto pb-10">
      <div className=" py-5">
        <h1 className="text-5xl text-center ">Your Forms.</h1>
      </div>
      <div className="space-y-5 ">
        {forms.map((form, index) => (
          <>
          <div key={index} className="my-10 border py-5">
            <p className="text-3xl text-center">{form.formTitle}</p>
            <p className="px-10">{form.formDescription}</p>
            {form.questionDivs.map((question) => (
              <div key={question._id} className="px-10 ">
                <p className="py-2 font-bold">{question.question}</p>
                {question.answerType === "shortAnswer" && (
                  <input
                    type="text"
                    placeholder="Answer Section"
                    className="outline-none border-b bg-gray-400 w-full py-1 px-2"
                    disabled
                  />
                )}
                {question.answerType === "paragraph" && (
                  <textarea 
                  placeholder="Answer Section"
                  className="outline-none border-b bg-gray-400 w-full py-1 px-2" 
                  disabled
                  />
                )}
              </div>
            ))}
          </div>
        <div className="flex flex-col justify-center items-center">
          <button 
          className="bg-gray-400 px-4 py-2 rounded-xl hover:bg-gray-300 transition-all duration-500 mb-5"
          onClick={()=>generateFormLink(form._id)}>Share Form</button>
         {
          dynamicLink && (
            <p onClick={copyToClipboard}>Shareable Link: <span className="border py-1 px-4 rounded-md cursor-pointer hover:bg-slate-300 transition-all duration-500">{ dynamicLink }</span></p>
          )
         }
        </div>
        </>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ShowForm;
