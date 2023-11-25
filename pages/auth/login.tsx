import React, { useState, SyntheticEvent} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'

export default function Login() {
	const router = useRouter();
	const [ users, setUsers ] = useState({
	  user: "",
	  password: ""
	})
  
	const [ password, setPassword ] = useState(false)
	const onHandlePassword = () => {
	  setPassword(() => !password)
	}

	const onHandleSubmitForm = async (e: SyntheticEvent) => {

		e.preventDefault();
	
		const res = await fetch("http://localhost:3001/user/login", {
		  method: "POST",
		  headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify({
			email: users.user,
			password: users.password
		  })
		})
	
	
		const data = await res.json()
	
		if (res) {
		  const cookies = Cookies.set("ecom_token", data, {
			expires: 60 * 60 * 24 * 7,
			path: "/",
			sameSite: "none",
			secure: true
		  })
	
	
		  if (cookies) {
			const { role }: any = jwtDecode(cookies)
			if (role === "admin") {
			  router.push("/minerva/admin/customer")
			} else {
				router.push('/minerva/customer/accountdetails')
			}
		  }
		}
	  }
  return (

    <div className="h-screen md:flex">
	<div
			className="relative overflow-hidden md:flex w-1/2 i justify-around items-center hidden">
			<div>
				<Image src="/loginregister.jpeg" alt="" height={10} width={1000}></Image>
			</div>
			<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		</div><div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
				<form className="bg-white">
					<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
					<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back to Minerva Sales Corporation</p>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
							<path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
						</svg>
						<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" onChange={(e) => setUsers({ ...users, user: e.target.value })} />
					</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
						</svg>
						<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" onChange={(e) => setUsers({ ...users, password: e.target.value })} />
					</div>
					<button type="submit" className="block w-full bg-[#FFBD59] mt-4 py-2 rounded-2xl text-black font-semibold mb-2">Login</button>
					<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer" onClick={() => router.push("/auth/changePassword")}>Forgot Password?</span>
					<br></br>
					<span className="text-sm ml-2"> Don't have an Account? <span onClick={() => router.push("/auth/register")} className="text-sm hover:text-blue-500 cursor-pointer">Sign Up.</span></span>
				</form>
			</div>
</div>

  )
}


