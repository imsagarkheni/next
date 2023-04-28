import Link from 'next/link';
import React from 'react'

const login = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-wrap bg-white">
       
        <div className="w-full relative lg:w-1/2 flex px-4">
          <div className="max-w-md w-full m-auto">
            <h1>Welcome Back!</h1>
            <p className="sm:text-lg xl:text-xl text-quicksilver font-normal sm:pt-3.5 xl:pr-8">
              Log in with your data that you entered during your registration
            </p>
            <div className="w-full pt-7 sm:pt-10">
              <form className="space-y-5">
                <div>
                  {/* <label htmlFor="" className="input-titel">Email or Phone number</label> */}
                  <label htmlFor="" className="input-titel">
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="input_box"
                    value=""
                    required
                  />
                </div>
                <div>
                  <label htmlFor="" className="input-titel">
                    Password
                  </label>
                  <input
                    type="Password"
                    name="password"
                    className="input_box"
                    value=""
                    required
                  />
                  <Link
                    href="../forgot-password"
                    className="text-caribbeanGreen font-bold text-xs md:text-sm block text-right mt-2"
                  >
                    Forget Password?
                  </Link>
                </div>
                <button
                  className="btn-primary w-full py-[15px] uppercase"
                  
                >
                  Login Now
                </button>
                <span className="block text-sm text-japaneseIndigo font-bold text-center">
                  Are you new? <Link href="/register">Register Now</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login
