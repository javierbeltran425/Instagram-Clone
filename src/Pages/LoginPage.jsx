import React from 'react';



export default function LoginPage() {
  return (
      <div className="flex justify-center items-center w-screen h-screen">
          <form className='md:w-2/3 lg:w-1/3 outline outline-1 outline-gray-400 rounded-md' style={{ height: "80%" }} >
            <h1 className='text-black text-3xl font-bold text-center m-10'>Instagram</h1>
            <div className="flex flex-col w-full p-3">
                <label>Username</label>
                <input className='outline outline-1 outline-gray-400 rounded-md w-6/6'></input>
            </div>
          </form>
      </div>
  );
}