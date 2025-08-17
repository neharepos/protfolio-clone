import React from 'react'

const Hero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[20px] mr-[20px] ml-[20px] p-[40px] items-center text-white justify-center">
            
    
            <div className="order-1 md:order-2 flex justify-center">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1d-6vBf7RvcRaGND6qrF_yC6toH5ICgXDEA&s" 
                    alt="Hero"
                    className="w-32 h-32 lg:w-48 lg:h-48 border-2 border-black object-cover rounded-full"
                />
            </div>
            
        
            <div className="order-2 lg:order-1 min-h-[50vh] items-center lg:text-left">
                <h1 className="mb-4 text-2xl font-rammetto font-bold">Hello</h1>
                <p className='font-quicksand'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sunt,
                    dolores perferendis voluptate officia aut officiis repudiandae quaerat, 
                    ipsum id ad ex eos? Odio omnis rerum, quod iste necessitatibus cum natus laboriosam ut 
                    dolores reprehenderit et adipisci nihil ducimus, sed excepturi corporis nam provident 
                    architecto vitae! Neque, autem odio? Itaque eligendi, officia deserunt tempora animi
                    velit odit iure odio eveniet dolores sequi error sapiente ratione impedit molestias
                    accusamus alias aspernatur quaerat pariatur dolore nam vero perspiciatis saepe quo?
                    Sed voluptate eligendi aperiam dolore, praesentium culpa minus sint, eos nihil magni
                    ratione quod dolores magnam tempore nemo quibusdam ab provident. Aliquid? A hill 
                    station is a small town located at a higher elevation than the surrounding plains
                    or valleys, known for its cool climate and low temperatures. Below is an 
                    essay about visiting a hill station, written in simple and easy-to-understand language
                    to help 5th-grade students and older children. After reading this essay, kids will be
                    able to write their own essay on a visit to a hill station essay in English.
                </p>
            </div>
        </div>
    )
}

export default Hero
