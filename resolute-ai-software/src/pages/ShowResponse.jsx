import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const ShowResponse = () => {
  const { authUser } = useAuthContext();
  const [forms, setForms] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState([])

  const getAllFormData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `http://localhost:5000/api/response/allForms?userId=${authUser._id}`
      );
      const data = await response.json();
      // Update the state with the fetched forms
      setForms(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
    finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    // Call the getFormData function when the component mounts
    getAllFormData();
  }, []);

  const getFormResponse = async (formId) => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `http://localhost:5000/api/response/formResponse?formId=${formId}`
      );
      const data = await response.json();
      // Update the state with the fetched forms
      setResponse(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
    finally{
      setIsLoading(false)
    }
  }
  

  return (
    <div>
      <Navbar/>
      <div className="max-w-3xl mx-auto ">
        {
          forms.map(form => (
            <div key={form.formId}
            className="border border-gray-300 p-5 space-y-3 my-5 rounded-xl"
            >
              <p>Form Name: {form.formTitle}</p>
              <p>Form Description: {form.formDescription}</p>
              <button className="bg-gray-400 px-4 py-2 rounded-xl"
              onClick={()=>getFormResponse(form.formId)}
              >Show Response for this Form</button>
            </div>
          ))
        }
      </div>
      <div className="max-w-3xl mx-auto pb-10 ">
        {
          response && response.map((item, index) => (
            <div key={index} className="border border-blue-900 p-5 my-3 rounded-xl space-y-3">
              <p className="text-xl">Response No: {index + 1}</p>
              {
                item.questionDivs.map(question => (
                  <div key={question._id}
                  className="border border-gray-400 p-2 rounded-xl"
                  >
                    <p><span className="font-semibold">Question: </span>{question.question}</p>
                    <p><span className="font-semibold">Response: </span>{question.answer}</p>

                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ShowResponse