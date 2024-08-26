import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogout = () => {

const [loading, setLoading] = useState(false)
const {setAuthUser} = useAuthContext()
const logout = async () => {
  setLoading(true)
  try {
    const res = await fetch("http://localhost:5000/api/auth/logout",{
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      }
    })
    const data = await res.json()

    if(data.error){
      throw new Error(data.error)
    }

    localStorage.removeItem("login-user")
    setAuthUser(null)

  } catch (error) {
    toast.error(error.message)
  } finally{
    setLoading(false)
  }
}

return {logout, loading}

}

export default useLogout