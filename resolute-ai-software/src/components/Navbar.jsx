import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import logo from '../../public/download.jpg'

const Navbar = () => {
  const { logout } = useLogout();
  return (
    <div className='bg-gray-800 py-4 w-full mx-auto flex justify-between items-center px-10'>
        <img src={logo} alt="" 
        className='w-12 h-12'
        />
        <div className='flex justify-center items-center gap-5 text-white/80 font-semibold'>
          <Link to='/' className='hover:text-white hover:-translate-y-[2px] transition-all duration-300'>
          Home
          </Link>
          <Link to='/createform' className='hover:text-white hover:-translate-y-[2px] transition-all duration-300'>
          Create Form
          </Link>
          <Link to='/showform' className='hover:text-white hover:-translate-y-[2px] transition-all duration-300'>
          Show Form
          </Link>
          <Link to='/showresponse' className='hover:text-white hover:-translate-y-[2px] transition-all duration-300'>
          Show Response
          </Link>
        </div>
        <button className="bg-white/90 px-3 py-2 rounded-xl" onClick={logout}>Logout</button>
      </div>
  )
}

export default Navbar