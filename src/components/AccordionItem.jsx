import React, { useState } from 'react'

import {BsChevronUp,BsChevronDown} from "react-icons/bs"

const AccordionItem = ({question, answer, active}) => {
const [isActive,setIsActive] = useState(active)
  return (
    <div>
        <div className='flex flex-row py-2 px-6 items-center justify-between bg-slate-500 font-bold text-slate-100'>
            <div>{question}</div>
            <div onClick={()=>setIsActive(!isActive)}>{(isActive === false ? <BsChevronDown /> : <BsChevronUp />)}</div>
        </div>
        <div className={(isActive===false ? "h-0 opacity-0 transition-all duration-500" : 'flex h-auto opacity-100 py-2 px-6 border-2 transition-all duration-500')}>{answer}</div>
    </div>
  )
}

export default AccordionItem