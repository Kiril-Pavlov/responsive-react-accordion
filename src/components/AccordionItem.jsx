import React, { useState } from 'react'

const AccordionItem = ({question, answer, active}) => {
const [isActive,setIsActive] = useState(active)
  return (
    <div>
        <div className='flex flex-row py-2 px-6 items-center justify-between bg-slate-500 font-bold text-slate-100'>
            <div>{question}</div>
            <div onClick={()=>setIsActive(!isActive)}>{(isActive === false ? "Open" : "Close")}</div>
        </div>
        <div className={(isActive===false ? "hidden" : 'flex py-2 px-6 border-2')}>{answer}</div>
    </div>
  )
}

export default AccordionItem