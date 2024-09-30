import React from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

const PromptBar = ({setQueries}) => {

    const processPrompt = () => {
        let prompt = document.getElementById("promptMsg");
        let prevQr = JSON.parse(localStorage.getItem('queries'));
        let queries = prevQr ? prevQr : [];
        const querieData = {
            _id: Date.now(),
            query: prompt.value,
            reply: ""
        }
        queries.push(querieData);
        localStorage.setItem('queries',JSON.stringify(queries));
        setQueries(queries);
        prompt.value = '';
    }

    return (
        <div className='h-12 w-2/5 bg-gray-500 rounded-full absolute bottom-8 left-1/3 overflow-hidden flex items-center border border-black'>
            <input id='promptMsg' type="text" className='h-full w-full text-xl p-2 bg-gray-500 border-none outline-none text-gray-300' />
            <button onClick={processPrompt} className='flex items-center justify-center p-3'>
                <FaArrowCircleUp size={35} color='black' />
            </button>
        </div>
    )
}

export default PromptBar
