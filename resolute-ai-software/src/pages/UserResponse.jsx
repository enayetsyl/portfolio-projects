import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link, useParams } from "react-router-dom"

const UserResponse = ({params}) => {
  const formId = useParams()
  const [form, setForm] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  console.log(form)
  const [responses, setResponses] = useState({}); 
  const getResponseFormData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `http://localhost:5000/api/form/getUserForm?formId=${formId.id}`
      );
      const data = await response.json();
      // Update the state with the fetched forms

      setForm(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    } finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    // Call the getFormData function when the component mounts
    getResponseFormData();
  }, []);

  const handleInputChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value, // Update the response for the given question
    }));
  };

  const handleSubmit = () => {
    // Create a copy of the form array
    const updatedForm = [...form];
  
    // Update the answers in the copy of the form array
    updatedForm.forEach((formData) => {
      formData.questionDivs.forEach((question) => {
        if (responses[question._id]) {
          question.answer = responses[question._id];
        }
      });
    });
  
    sendDataToBackend(updatedForm)
    // Perform any additional logic, such as sending the updated form to the server
    console.log("Updated form with user responses:", updatedForm);
  };


  const sendDataToBackend = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/response/userResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send data to the server');
      }
  
      // If the request is successful, you can handle the response here if needed
      const responseData = await response.json();
      
      toast.success('Form Submitted Successfully.')
    } catch (error) {
      console.error('Error sending data to the server:', error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto pb-10">
      <div>
        <h1 className="text-center text-5xl py-10 font-semibold hover:text-6xl transition-all duration-1000">Please fill up the form</h1>
      </div>
      <div className="border border-gray-300 rounded-xl">
        {form.map((form) => (
          <>
          <div key={form.creator} className="py-6 px-10">
            <p className="text-3xl text-center">{form.formTitle}</p>
            <p className="text-xl pb-5">{form.formDescription}</p>
            {form.questionDivs.map((question) => (
              <div key={question._id}>
                <p className="font-bold py-3 pl-2">{question.question}</p>
                {question.answerType === "shortAnswer" && (
                  <input
                    type="text"
                    className="outline-none border-b bg-gray-400 w-full py-1 px-2 focus:bg-white focus:border-b-blue-800 focus:border-b-2"
                    value={responses[question._id] || ""} // Bind input value to user response
                    onChange={(e) =>
                      handleInputChange(question._id, e.target.value)
                    }
                  />
                )}
                {question.answerType === "paragraph" && (
                  <textarea className="outline-none border-b bg-gray-400 w-full py-1 px-2 focus:bg-white focus:border-b-blue-800 focus:border-b-2" 
                  value={responses[question._id] || ""} // Bind textarea value to user response
                    onChange={(e) =>
                      handleInputChange(question._id, e.target.value)
                    }
                  />

                )}
              </div>
            ))}
          </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <button 
          className="bg-gray-400 px-4 py-2 rounded-xl hover:bg-gray-300 transition-all duration-700"
          onClick={handleSubmit}
          >
            <Link to='/thankyou'>
            Submit Form
            </Link>
          </button>
        </div>
        </>
        ))}
      </div>
    </div>
  )
}

export default UserResponse