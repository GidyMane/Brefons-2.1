"use client"
import React, { useState } from 'react'
import CardData from "./compfour.json"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card"
import { SkeletonCard } from './Skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs"
import { Button } from '@/shadcn/ui/button'
import { HierarchicalCard } from './CardDetail/HierachialCard'



const indicators = [
    {
        title: "4.1",
        indicators: [
            {
                title: "4.1.1",
                cards: [
                    {
                        name: "Gender action plans implemented",
                        total: 1,
                        completed: 1
                    }
                ]
            },
            {
                title: "4.1.2",
                cards: [
                    {
                        name: "Baseline Surveys Done",
                        total: 1,
                        completed: 1
                    }

                ]
            }

        ]
    }


]

const ComponentFour = () => {

    // Assuming indicators is defined somewhere
    const defaultActiveTabs = indicators.map(column => column.indicators.length > 0 ? column.indicators[0].title : "");

    const [activeTabs, setActiveTabs] = useState(defaultActiveTabs);

    const handleTabChange = (columnIndex: number, value: string) => {
        setActiveTabs(prevTabs => {
            const newTabs = [...prevTabs];
            newTabs[columnIndex] = value;
            return newTabs;
        });
    };


    return (
        <div className='grid md:grid-cols-1 gap-4 w-full bg-white rounded shadow'>
            <HierarchicalCard data={CardData} />

        </div>

    )
}

export default ComponentFour