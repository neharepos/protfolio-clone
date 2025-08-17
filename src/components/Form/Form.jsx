import React from 'react'

const Form = () => {
  return (
    <div className='bg-white text-black rounded-2xl text-xl sm:text-xl mx-7 p-6 sm:w-[380px]  md:w-[600px] lg:w-[800px] xl:w-[950px]'>
        <div className='ml-12'>
            <form>
                <br />
                <h3 className='font-bold text-3xl'>Let's Connect</h3>
                <h1 className='font-bold text-5xl font-poppins'>SEND ME A MESSAGE</h1>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-6 font-quicksand'>
                    <input type="text" placeholder='First Name*' className='bg-gray-100 focus:outline-none focus:ring-2 focus-blue-500 p-2 mt-2 w-full h-10 rounded-lg'/> 
                    <input type="text" placeholder='Last Name*' className='bg-gray-100 focus:outline-none focus:ring-2 focus-blue-500 p-2 mt-2 w-full h-10 rounded-lg'/>
                    <input type="email" placeholder='Email*' className='bg-gray-100 focus:outline-none focus:ring-2 focus-blue-500 p-2 mt-2 w-full h-10 rounded-lg md:col-span-2'/>
                </div>

                <div className='my-2'>

                    <textarea placeholder="Message*" className='bg-gray-100  w-full h-32 p-3 focus:outline-none focus:shadow-outline rounded-lg'></textarea>
                </div>
                    <button className='bg-blue-900 py-3 px-6 mt-6 p-3 w-full tracking-wide cursor-pointer rounded-lg text-sm text-white font-bold focus:outline-none 
                    focus:shadow-outline relative'>SEND MESSAGE</button>
            
            </form>
        </div>
    </div>
  )
}

export default Form