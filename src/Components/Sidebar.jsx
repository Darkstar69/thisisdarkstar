import React from 'react'

const Sidebar = () => {
    const chatHistory = [
        {
            id: 1,
            title: "history 1",
            description: "brief descripton"
        },
        {
            id: 2,
            title: "history 2",
            description: "brief descripton"
        },
        {
            id: 3,
            title: "history 3",
            description: "brief descripton"
        },
        {
            id: 4,
            title: "history 4",
            description: "brief descripton"
        },
    ];
    return (
        <div className='h-[100vh] bg-blue-950 w-[12%] fixed top-[5.5rem] left-2 overflow-y-scroll text-gray-200'>
            {
                chatHistory.map((chat, index) => (
                    <p key={chat.id+index} className='px-3 py-2 font-medium hover:bg-gray-800 hover:cursor-pointer relative group'>
                        <span>{chat.title}</span> 
                        <span className='hidden group-hover:flex items-center justify-center gap-[2px] absolute top-1/2 -translate-x-1/2 right-1'>
                            <span className='h-1 w-1 rounded bg-gray-400'></span>
                            <span className='h-1 w-1 rounded bg-gray-400'></span>
                            <span className='h-1 w-1 rounded bg-gray-400'></span>
                        </span>
                    </p>
                ))
            }
        </div>
    )
}

export default Sidebar
