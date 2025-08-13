import React from 'react'

const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[50px] mr-[45px] ml-[200px] items-center text-white justify-center">
            
    
            <div className="order-1 md:order-2 flex justify-center">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1d-6vBf7RvcRaGND6qrF_yC6toH5ICgXDEA&s" 
                    alt="Hero"
                    className="max-w-full h-auto"
                />
            </div>
            
        
            <div className="order-2 md:order-1">
                <h1 className="font-bold text-3xl mb-4">HELLO</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sunt,
                    dolores perferendis voluptate officia aut officiis repudiandae quaerat, 
                    ipsum id ad ex eos? Odio omnis rerum, quod iste necessitatibus cum natus laboriosam ut 
                    dolores reprehenderit et adipisci nihil ducimus, sed excepturi corporis nam provident 
                    architecto vitae! Neque, autem odio? Itaque eligendi, officia deserunt tempora animi
                    velit odit iure odio eveniet dolores sequi error sapiente ratione impedit molestias
                    accusamus alias aspernatur quaerat pariatur dolore nam vero perspiciatis saepe quo?
                    Sed voluptate eligendi aperiam dolore, praesentium culpa minus sint, eos nihil magni
                    ratione quod dolores magnam tempore nemo quibusdam ab provident. Aliquid?
                </p>
            </div>
        </div>
    )
}

export default Hero
