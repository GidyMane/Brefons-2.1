"use client"
import { toggleSidebar } from "@/Redux/Slices/MenuSlice"
import { RootState } from "@/Redux/Store"
import { Button } from "@/shadcn/ui/button"
import { useDispatch, useSelector } from "react-redux"

import { Input } from "@/shadcn/ui/input"
import { motion } from "framer-motion"



export const HamBurgerButton = () => {
    // retriev our toggle action
    const dispatch = useDispatch()
    const menuState = useSelector((state: RootState) => state.toggleMenu.isOpen)
    return (
        <>
            <Button aria-label="Menu" className="transition-all duration-150" onClick={() => {
                dispatch(toggleSidebar())
            }}>
                <svg width="15" height="15" className='cursor-pointer' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </Button>
        </>
    )
}




export function SearchInput() {
  return (
    <motion.div className="hidden md:flex w-full mx-2 max-w-sm rounded-md items-center space-x-2" initial={{x:15, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.8, ease:"easeInOut"}}>
      <Input type="text" placeholder="Search for projects..."  className="rounded-md outline-none focus:border-gray-400 dark:text-gray-500" style={{
        borderRadius:"5px",
        borderColor:"gray",
        outline:"none"
      }} />
    </motion.div>
  )
}



