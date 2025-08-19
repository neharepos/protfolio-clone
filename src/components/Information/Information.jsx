import React from 'react'

const Information = () => {
  return (
    <div className='bg-blue-900 h-auto rounded-2xl mt-4 sm:max-w-sm px-6 py-8 sm:px-8 sm:py-10 mr-18 mb-6 w-full max-w-md  md:max-w-lg 
                    lg:max-w-sm 
                    xl:max-w-md'>
        <div className='text-gray-400 flex flex-col space-y-6 p-6'>
            <h1 className='mt-10 font-bold text-white font-poppins text-4xl my-4'>DROP ME A DM</h1>
            <p className='font-quicksand'>You can Directly contact me via any social networking platform or
             directly drop me a mail/ message.</p>
            
            
            <div className='flex flex-col'>
            <h3 className='text-white mt-16 text-2xl'>Contacts</h3>
            <p>Mob: <a href="tel:+917209879211">+91 7209879211</a></p>
            <p>Mail: <a href="mailto:nishaantkrsingh@gmail.com">nishaantkrsingh@gmail.com</a></p>
            </div>
            
        </div>
    </div>
  )
}

export default Information