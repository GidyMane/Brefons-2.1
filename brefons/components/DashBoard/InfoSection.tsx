import React from 'react'
import { Tabs } from '../Aceternity/tabs'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'
import ComponentThree from './ComponentThree'

const tabs = [
    {
        title: "comp1",
        value: "irrigation",
        content: <ComponentOne/>
    },
    {
        title: "comp2",
        value: "component 2",
        content: <ComponentTwo/>
    },
    {
        title: "comp3",
        value: "component 3",
        content: <ComponentThree/>
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