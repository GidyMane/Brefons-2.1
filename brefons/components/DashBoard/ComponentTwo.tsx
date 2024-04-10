"use client"
import React, { useState } from 'react'
import CardData from "./comptwo.json"
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





const ComponentTwo = () => {

    // Assuming indicators is defined somewhere

    


    return (
        <div className='grid md:grid-cols-1 gap-4 w-full bg-white rounded shadow'>
            <HierarchicalCard data={CardData} />

        </div>

    )
}

export default ComponentTwo