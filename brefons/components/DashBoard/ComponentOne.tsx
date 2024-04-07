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



const indicators = [
    {
        title: "1.1",
        indicators: [
            {
                title: "1.1.1",
                cards: [
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    }
                ]
            },
            {
                title: "1.1.2",
                cards: [
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    }
                ]
            },
            {
                title: "1.1.3",
                cards: [
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
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
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    }
                ]
            },
            {
                title: "1.2.2",
                cards: [
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    }
                ]
            },
            {
                title: "1.2.3",
                cards: [
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    },
                    {
                        name: "irrigation",
                        total: 20,
                        completed: 5
                    }
                ]
            }
        ]
    }
]

const ComponentOne = () => {

    const [activeTab, setActiveTab] = useState("")


    return (
        <div className='p-4 w-full'>

            <div className='grid md:grid-cols-3 gap-4'>

                {indicators.map((item, index) => (
                    <div className='col-span-1' key={index}>
                        <Tabs defaultValue={item.indicators[0].title} className="w-[400px]">
                            <TabsList>
                                {item.indicators.map((item, index) => (
                                    <TabsTrigger key={index} value={item.title} className='bg-gray-400 px-2 gap-2 mx-2 rounded-full'>{item.title}</TabsTrigger>

                                ))}
                            </TabsList>
                            {item.indicators.map((item, number) => (

                                <TabsContent value={item.title} key={number} className='w-full flex items-center justify-between flex-wrap'>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{item.title}</CardTitle>
                                            <CardDescription>Card Description</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p>Card Content</p>
                                        </CardContent>
                                        <CardFooter>
                                            <p>Card Footer</p>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            ))}


                        </Tabs>
                    </div>
                ))}



            </div>

        </div>
    )
}

export default ComponentOne