'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps{

    value: string
    title: string
    isSelected?: boolean
    
}
export function TabItem({ value, title, isSelected = false}: TabItemProps){ 
    
    return(     
        <Tabs.Trigger                 
            value={value}
            className='relative  px-3 pb-4 text-md font-medium border-0 text-zinc-500 hover:text-orange-600 data-[state=active]:text-orange-700'>
            <span>{title}</span>

            {isSelected &&(
                <motion.div
                layoutId='activeTab'
                 className='absolute -bottom-px left-0 right-0 h-0.5 bg-orange-700' />
            )}
        </Tabs.Trigger>

    )
}