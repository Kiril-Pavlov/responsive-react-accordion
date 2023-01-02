import React from 'react'

import AccordionItem from './AccordionItem'

const Accordion = () => {

  const accordionData = [
    {
      id:1,
      question:"What is your name?",
      answer: "Kiril",
      active: false,
    },
    {
      id:2,
      question:"What is your surname?",
      answer: "Pavlov",
      active: false,
    },
    {
      id:3,
      question:"Write something about yourself?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum, maiores placeat vel voluptatibus laboriosam quo suscipit earum veniam iure labore, cupiditate molestiae quisquam alias in unde optio. Quos veritatis facere pariatur adipisci corporis nihil sint harum fuga mollitia amet?",
      active: false,

    },
  ]

  

  return (
    <div className='flex flex-col gap-2 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 my-8 mx-auto'>
      {accordionData.map(item =>{
        return (
          <AccordionItem key={item.id} question={item.question} answer={item.answer} active={item.active}/>
        )
      })}
    </div>
  )
}

export default Accordion