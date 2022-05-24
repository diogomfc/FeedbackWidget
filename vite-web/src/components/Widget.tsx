import { Popover } from '@headlessui/react'
import { useState } from 'react';

import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from './WidgetForm';

interface IPops {
  text: string;
}

export function Widget() {



  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">

      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="
        group
        bg-brand-500 
        hover:bg-brand-700 
        text-white 
        font-bold  
        px-3
        h-12 S
        rounded-full
        flex
        items-center
      "
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="
        max-w-0 
        overflow-hidden 
        group-hover:max-w-xs
        transition-all duration-500 ease-linear
        ">
          <span className="pl-2"></span>
          Feedback</span>
      </Popover.Button>
    </Popover>
  )
}