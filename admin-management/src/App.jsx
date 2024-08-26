import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center">
  <div className="bg-blue-500 text-white rounded-full p-2 mr-2">
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
    </svg>
  </div>
  <span className="text-lg font-semibold">Your Logo</span>
</div>
<div className="relative h-12 w-12">
  <div className="absolute top-0 left-0 h-1 w-8 bg-blue-500 rounded-full"></div>
  <div className="absolute bottom-0 left-0 h-2 w-8 bg-blue-500 rounded-full"></div>
  <div className="absolute top-0 left-0 h-8 w-2 bg-blue-500 rounded-full"></div>
</div>
    </>
  )
}

export default App
