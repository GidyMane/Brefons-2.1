"use client"
import React, { useState } from 'react'
import CardData from "./compthree.json"
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
        title: "3.1",
        indicators: [
            {
                title: "3.1.1",
                cards: [
                    {
                        name: "Climate products and services for agriculture and livestock developed",
                        total: 10,
                        completed: 4
                    }
                ]
            },
            {
                title: "3.1.2",
                cards: [
                    {
                        name: "Regional Information databases and online interactive established to report state of resilience in the region",
                        total: 1,
                        completed: 1
                    }
                ]
            }
        ]
    },

    {
        title: "3.2",
        indicators: [
            {
                title: "3.2.1",
                cards: [
                    {
                        name: "Uptake of climate risk financing and insurance solutions",
                        total: 30,
                        completed: 4
                    }

                ]
            }
        ]
    }

]

const ComponentThree = () => {

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

        <div className='grid md:grid-cols-1 gap-4 w-full bg-white shadow rounded'>
            <HierarchicalCard data={CardData} />

        </div>

    )
}

export default ComponentThree