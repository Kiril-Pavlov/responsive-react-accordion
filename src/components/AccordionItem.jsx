import React from 'react'

const AccordionItem = ({question, answer}) => {
  return (
    <div>
        <div>
            <div>{question}</div>
            <div>Open</div>
        </div>
        <div>{answer}</div>
    </div>
  )
}

export default AccordionItem