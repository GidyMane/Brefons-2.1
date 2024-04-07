import React from 'react'
import { Tabs } from '../Aceternity/tabs'

const tabs = [
    {
        title: "comp1",
        value: "irrigation",
        content: <div className='w-full bg-red-400'>hello</div>
    },
    {
        title: "comp2",
        value: "component 2",
        content: <div className='w-full bg-blue-400'>hello</div>
    },
    {
        title: "comp3",
        value: "component 3",
        content: <div className='w-full bg-green-400'>hello</div>
    }
]

const InfoSection = () => {
    return (
        <div>
            <Tabs tabs={tabs} />
        </div>
    )
}

export default InfoSection