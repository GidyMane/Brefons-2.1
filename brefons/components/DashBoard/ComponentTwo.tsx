"use client"
import React, { useState } from 'react'
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



const indicators = [
    {
        title: "2.1",
        indicators: [
            {
                title: "2.1.1",
                cards: [
                    {
                        name: "Farmers and Pastoralists benefitting from extension on using digital advisory services",
                        total: 5000,
                        completed: 769
                    }
                ]
            }
        ]
    },
    {
        title: "2.2",
        indicators: [
            {
                title: "2.2.1",
                cards: [
                    {
                        name: "Number of people benefitting from enhanced entrepreneurship skills development and access to finance",
                        total: 3000,
                        completed: 545
                    }

                ]
            }
        ]
    },
    {
        title: "2.3",
        indicators: [
            {
                title: "2.3.1",
                cards: [
                    {
                        name: "Number of people with access to renewable energy for households",
                        total: 2000,
                        completed: 624
                    }
                ]
            }
        ]
    }
]

const ComponentTwo = () => {

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

        <div className='grid md:grid-cols-2 gap-4 w-full'>
            {indicators.map((column, columnIndex) => (
                <div className='col-span-1' key={columnIndex}>
                    <Tabs defaultValue={column.indicators[0].title} className="w-full">
                        <TabsList>
                            {column.indicators.map((item, index) => (
                                <TabsTrigger
                                    key={index}
                                    value={item.title}
                                    className={`bg-gray-400 px-2 gap-2 mx-2 rounded-full ${activeTabs[columnIndex] === item.title ? 'bg-[#222F3F] text-white' : ''}`}
                                    onClick={() => handleTabChange(columnIndex, item.title)}
                                >
                                    {item.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {column.indicators.map((item, number) => (
                            <TabsContent value={item.title} key={number} className='grid md:grid-cols-3 gap-2 px-2  md:mx-0'>
                                {item.cards.map((card, index) => (
                                    <Card className='bg-white cursor-pointer relative col-span-1 h-[300px] md:h-[200px] px-4  transition-all shadow-md rounded py-4  duration-150' key={index}>
                                        <CardHeader className='my-8'>
                                            <CardTitle className='capitalize text-md dark:text-gray-900'>{card.name}</CardTitle>
                                            {/* <CardDescription>Card Description</CardDescription> */}
                                        </CardHeader>
                                        <CardContent className='bottom-0 p-2 flex flex-col md:flex-row justify-start gap-2 md:items-center items-start'>
                                            <p className='bg-green-400 px-4 py-2 rounded-full text-white text-sm font-bold'>completed: {card.completed}</p>
                                            <p className='bg-gray-200 px-4 py-2 rounded-full text-black text-sm font-bold'>Total: {card.total}</p>
                                            <Button className='px-3 text-gray-400 py-2 flex justify-between items-center cursor-pointer'>View more</Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            ))}
        </div>

    )
}

export default ComponentTwo