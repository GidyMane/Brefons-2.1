import React from 'react'
import { Tabs } from '../Aceternity/tabs'
import ComponentOne from './ComponentOne'

const tabs = [
    {
        title: "comp1",
        value: "irrigation",
        content: <ComponentOne/>
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