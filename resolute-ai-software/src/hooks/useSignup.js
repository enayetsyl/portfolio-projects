import {useState} from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
  const [loading, setLoading] = useState(false)

  const {setAuthUser} = useAuthContext()

  const signup = async({fullName, username, password, confirmPassword}) => {
    const success = handleErrorInput({fullName, username, password, confirmPassword});

    if(!success)  return;

    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: "POST",
        headers: { "Content-Type" : "application/json"
      },
      body: JSON.stringify({fullName, username, password, confirmPassword})
      })

      const data = await res.json();
      console.log(data)
      if(data.error){
        throw new Error(data.error)
      }

      localStorage.setItem("login-user", JSON.stringify(data))
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message)      
    } finally{
      setLoading(false)
    }
  }
    return { loading, signup}
}

export default useSignup

const handleErrorInput = ({fullName, username, password, confirmPassword}) => {
if( !fullName, !username, !password, !confirmPassword){
  toast.error("Please fill all the fields")
  return false;
}

if (password !== confirmPassword){
  toast.error("Password does not matched")
  // alert("Password does not matched")
  return false
}

if (password.length < 6){
  toast.error("Password must be at least 6 characters")
  return false;
}
  return true
}