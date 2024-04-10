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
        title: "Agricultural productivity (Crops and Livestock)",
        indicators: [
            {
                title: "1.1.1",
                cards: [
                    {
                        name: "Irrigation Schemes",
                        total: 8,
                        completed: 5
                    },
                    {
                        name: "Water Pans",
                        total: 28,
                        completed: 7
                    },
                    {
                        name: "Earth Dams",
                        total: 28,
                        completed: 16
                    },
                    {
                        name: "Boreholes",
                        total: 28,
                        completed: 20
                    },
                    {
                        name: "Shallow Wells",
                        total: 28,
                        completed: 23
                    },
                    {
                        name: "Subsurface Dams",
                        total: 28,
                        completed: 12
                    }
                ]
            },
            {
                title: "LIVESTOCK",
                cards: [
                    {
                        name: "Irrigation",
                        total: 800,
                        completed: 420
                    },
                    {
                        name: "Pastures",
                        total: 840,
                        completed: 310
                    },
                    {
                        name: "Rangelands",
                        total: 5000,
                        completed: 2000
                    },
                    
                    
                ]
            },
            {
                title: "1.1.3",
                cards: [
                    {
                        name: "Livestock Markets",
                        total: 21,
                        completed: 6
                    },
                    {
                        name: "Vet Diagnostic labs",
                        total: 7,
                        completed: 2
                    },
                    {
                        name: "Border Areas Clusters",
                        total: 2,
                        completed: 1
                    }
                ]
            }
        ]
    },
    {
        title: "1.2",
        indicators: [
            {
                title: "1.2.1",
                cards: [
                    {
                        name: "Area of Agriculture and Pastoral Land under Sustainable Management",
                        total: 5000,
                        completed: 969
                    }

                ]
            }
        ]
    },
    {
        title: "1.3",
        indicators: [
            {
                title: "1.3.1",
                cards: [
                    {
                        name: "Farmers and Pastoralists with access to innovative technologies and practices",
                        total: 5000,
                        completed: 1200
                    }
                ]
            }
        ]
    }
]

const ComponentOne = () => {

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
            <div className='grid md:grid-cols-1 gap-4 w-full '>
                {indicators.map((column, columnIndex) => (
                    <div className='col-span-1' key={columnIndex}>
                        <Tabs defaultValue={column.indicators[0].title} className="">
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
                                        <Card className='bg-white cursor-pointer relative col-span-1 w-full lg:h-[200px] px-4  transition-all shadow-md rounded py-4  duration-150' key={index}>
                                            <CardHeader className='mb-8'>
                                                <CardTitle className='capitalize text-md dark:text-gray-900'>{card.name}</CardTitle>
                                                {/* <CardDescription>Card Description</CardDescription> */}
                                            </CardHeader>
                                            <CardContent className='bottom-0 p-2 flex flex-col  lg:flex-row justify-start gap-2 md:items-center items-start'>
                                                <p className='bg-green-400 px-2 md:px-4 py-2 rounded-full text-white text-sm font-bold'>completed: {card.completed}</p>
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

export default ComponentOne