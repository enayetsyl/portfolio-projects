import { Link } from "react-router-dom";
// import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";
// import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
	});
	const {loading, signup} = useSignup()
	// const handleCheckboxChange = (gender) => {
	// 	setInputs({ ...inputs, gender });
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(inputs)
		await signup(inputs)
	};

	return (
		<div className="flex min-h-screen justify-center items-center ">
      <div className='flex flex-col items-center justify-center max-w-96 mx-auto bg-gray-800 rounded-xl'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300 mb-5'>
					Sign Up 
				</h1>

				<form onSubmit={handleSubmit} className="space-y-2">
					<div className="space-y-2">
						<label className='label p-2'>
							<span className='text-base label-text  text-white'>Full Name</span>
						</label>
						<input type='text' placeholder='Enayetur Rahman' className='w-full input input-bordered  h-10 px-2 rounded-md' 
						value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div className="space-y-2">
						<label className='label p-2 '>
							<span className='text-base label-text  text-white'>Username</span>
						</label>
						<input type='text' placeholder='Enayet' className='w-full input input-bordered h-10 px-2 rounded-md'
						value={inputs.username}
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
					/>
						
					</div>

					<div className="space-y-2">
						<label className='label p-2'>
							<span className='text-base label-text  text-white'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 px-2 rounded-md'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div className="space-y-2">
						<label className='label p-2'>
							<span className='text-base label-text  text-white'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 px-2 rounded-md'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					{/* <GenderCheckbox  onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/> */}

					<Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block  text-white' >
						Already have an account?
					</Link>

					<div className="flex justify-center">
					<button className=' mt-2 border border-slate-700 rounded-md py-2 px-4 text-white/80 hover:bg-slate-600 transition-all duration-500' 
          // disabled={loading}
          >Sign Up
							{/* {loading ? <span className='loading loading-spinner'></span> : "Sign Up"} */}
						</button>
						{/* <button className='btn btn-block btn-sm mt-2 border border-slate-700 text-black'>Sign Up</button> */}
					</div>
				</form>
			</div>
		</div>
    </div>
	);
};
export default SignUp;