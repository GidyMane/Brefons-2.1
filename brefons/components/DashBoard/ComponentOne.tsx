"use client"
import React, { useState } from 'react'
import CardData from './compone.json'
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
    console.log(CardData)

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

export default ComponentOne