
const ThankYou = () => {
  const handleClose = () => {
    // Close the browser tab when the exit button is clicked
    window.close();
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-white/80 text-5xl font-semibold">Thank You</h1>
      <h2 className="text-white/70 text-xl font-semibold">Your submission has been recorder.</h2>

      <button className="bg-gray-400 px-4 py-2 hover:bg-gray-300 rounded-xl transition-all duration-700"
      onClick={handleClose}
      >Exit Page</button>
    </div>
  )
}

export default ThankYou