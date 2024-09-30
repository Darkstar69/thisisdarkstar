import React, { useEffect } from 'react'

const PromptField = ({queries}) => {

    return (
        <div className='w-3/5 min-h-screen h-full bg-gray-600 place-self-center pt-24 px-6'>
            {
                queries?.map((q, i) => (
                    <p key={q.query+i}>{q?.query}</p>
                ))
            }
        </div>
    )
}

export default PromptField
