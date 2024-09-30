import React, { useState } from 'react';
import PromptBar from './PromptBar';
import PromptField from './PromptField';


const Console = () => {
    const [queries, setQueries] = useState(JSON.parse(localStorage.getItem('queries')));
    return (
        <div className='flex h-[100vh] min-h-[100vh] w-[100vw] px-6 items-center justify-end'>
            <div className="h-full w-[88%] bg-gray-800 overflow-y-scroll grid">
                <PromptField queries={queries} />
            </div>
            <PromptBar setQueries={setQueries} />
        </div>
    )
}

export default Console
