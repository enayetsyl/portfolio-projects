import {useState} from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
  const [loading, setLoading] = useState(false)

  const {setAuthUser} = useAuthContext()
  const login = async (username, password) => {
    const success = handleErrorInput(username, password)

    if(!success){
      return
    }

    setLoading(true)
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({username, password})
      })

      const data = await res.json()

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
  
  return {loading, login}
}

export default useLogin

const handleErrorInput = (username, password) => {
  if(!username, !password){
    // alert("Please fill in all the fields")
    toast.error("Please fill in all the fields")
    return false
  }

  if (password.length < 6 ){
    // alert("Password must be 6 character long.")
    toast.error("Password must be 6 character long.")
    return false
  }

  return true
}