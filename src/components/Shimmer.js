import React from 'react'

const Shimmer = () => {
    return (
        <React.Fragment>
            {Array.from({ length: 5 }).map((_, index) => (
                <div className='px-6 animate-pulse' key={index}>
                    <div className='text-lg md:text-2xl px-4 bg-gray-700 h-6 rounded w-1/4 mb-2'></div>
                    <div className='flex overflow-x-scroll'>
                        <div className='flex'>
                            {Array.from({ length: 7 }).map((_, i) => (
                                <div key={i} className='w-36 md:w-48 p-2'>
                                    <div className='bg-gray-700 h-48 md:h-64 rounded'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
}

export default Shimmer