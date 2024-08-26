
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <div >
      <Navbar/>
      <div className='max-w-4xl mx-auto py-10 space-y-5'>
        <h1 className='text-center text-5xl font-semibold hover:text-7xl transition-all duration-1000'>Welcome!</h1>
        <h3 className='text-2xl text-center opacity-30 hover:opacity-100 transition-all duration-1000'>We're thrilled to have you join our community.</h3>

        <p className=' text-justify pl-80 text-xl pt-10 text-violet-900 font-bold hover:pl-72 transition-all duration-1000'> In our web application, you have the power to create an unlimited number of forms and effortlessly share them with anyone you choose. Whether it's for gathering feedback, conducting surveys, or collecting data, our platform empowers you to create forms tailored to your needs.

</p>
<p className=' text-justify pr-96 text-xl pt-10 text-blue-900 font-bold hover:pr-80 transition-all duration-1000'>But that's not all. With our intuitive interface, you can seamlessly track and manage the responses submitted by users. Gain valuable insights and make informed decisions based on the feedback received.

</p>
<p className=' text-justify pl-96 text-xl pt-10 text-purple-900 font-bold transition-all duration-1000 hover:pl-80'>Join us on this journey of exploration and discovery as we revolutionize the way you engage with your audience and unlock the full potential of your ideas. Welcome to our community, where possibilities are endless, and innovation knows no bounds.</p>
      </div>
    </div>
  )
}

export default Home