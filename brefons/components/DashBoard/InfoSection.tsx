import React from 'react'
import { Tabs } from '../Aceternity/tabs'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'
import ComponentThree from './ComponentThree'
import ComponentFour from './ComponentFour'

const tabs = [
    {
        title: "Comp1",
        value: "irrigation",
        content: <ComponentOne/>
    },
    {
        title: "Comp2",
        value: "component 2",
        content: <ComponentTwo/>
    },
    {
        title: "Comp3",
        value: "component 3",
        content: <ComponentThree/>
    },
    {
        title: "Comp4",
        Value: "component 4",
        content: <ComponentFour/>
    }
    
]

const InfoSection = () => {
    return (
        <div className='w-full'>
            <Tabs tabs={tabs}  contentClassName='' containerClassName='dark:text-gray-800'/>
        </div>
    )
}

export default InfoSection