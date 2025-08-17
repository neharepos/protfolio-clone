import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <h1 className="text-white text-3xl ml-4 p-2 font-semibold">
                <div className="inline-block group">
                    <a className="p-1 gap-2 cursor-default font-rammetto"> {props.heading}
                        <span className='p-2 w-[5px]'>&#8594;</span>
                    </a>
                    <div
                        className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500 group-hover:bg-blue-500"
                    >
                    </div>
                </div>
            </h1>
            <div className='text-white ml-8 font-semibold font-quicksand'>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Heading