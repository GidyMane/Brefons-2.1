'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from '@/shadcn/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import { toggleSidebar } from '@/Redux/Slices/MenuSlice';
import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn/ui/avatar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

const menu = {
    "home": [
        {
            gif: "/dashboard.gif",
            fallback: "dashboard",
            name: "Dashboard",
            link: "/dashboard"
        },
        {
            gif: "/reports.gif",
            fallback: "reports",
            name: "Reports",
            link: "/reports"
        },
        {
            gif: "/technical.gif",
            fallback: "technical",
            name: "Technical Parameters",
            link: "/technical"
        },
        {
            gif: "/activity.gif",
            fallback: "activity",
            name: "activities",
            link: "/activities"
        },
        {
            gif: "/parameters.gif",
            fallback: "operational",
            name: "Operational Parameters",
            link: "/operationalparameters"
        },
    ],
    "Project Planning": [
        {
            gif: "/project.png",
            fallback: "projects",
            name: "Projects",
            link: "/projects"
        },
        {
            gif: "/target.gif",
            fallback: "targets",
            name: "Target",
            link: "/targets"
        },
        {
            gif: "/settings.gif",
            fallback: "settings",
            name: "Settings",
            link: "/settings"
        },
        {
            gif: "/logout.gif",
            fallback: "logout",
            name: "Logout",
            link: ""
        },


    ]
}

export default function SideBar() {
    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });

    // retrieve sidebar open state
    const menuIsOpen = useSelector((state: RootState) => state.toggleMenu.isOpen)
    const dispatch = useDispatch()

    // retrieve pathname 
    const pathname = usePathname().split("/")
    console.log(pathname)

    const toggleDrawer =
        () =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                dispatch(toggleSidebar())
            };





    return (
        <div className=''>
            <SwipeableDrawer
                anchor={"left"}
                open={menuIsOpen}
                onClose={toggleDrawer()}
                onOpen={toggleDrawer()}
                className=''
            >
                <div className='w-full flex flex-col'>
                    <div className='w-full bg-[#222F3F] flex gap-4 justify-between items-center px-3 py-2'>
                        <h2 className="text-2xl font-bold  text-white ">BREFONS</h2>
                        <div className='text-white px-2 cursor-pointer transition-all duration-150' >
                            <svg width="20" onClick={() => dispatch(toggleSidebar())} height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div className='w-full h-full flex flex-col items-start rounded-md p-4 relative'>


                        <div className='w-full'>


                            <aside id="default-sidebar" className="top-0 left-0 z-40 w-full h-full " aria-label="Sidebar">
                                <div className="h-full w-full">
                                    <ul className="space-y-2 font-medium mt-8">
                                        <div className='my-4'>


                                            {menu["home"].map((menuItem, index) => (
                                                <li key={index}>
                                                    <Link href={`/brefons.console${menuItem.link}`} className={`flex items-center p-2 text-gray-900 rounded-lg ${menuItem.link.slice(1) === pathname[2] && "bg-[#222F3F] text-white"}  hover:bg-gray-100 dark:hover:bg-gray-700 group`} onClick={()=>dispatch(toggleSidebar())}>
                                                        <div className='h-5 w-5 rounded-full mx-2 outline-1'>
                                                            <Avatar className='rounded-full'>
                                                                <AvatarImage src={menuItem.gif} className=' h-5 w-5' />
                                                                <AvatarFallback>{menuItem.fallback}</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <span className="ms-2">{menuItem.name}</span>
                                                    </Link>
                                                </li>
                                            ))}

                                        </div>



                                        <li className=''>
                                            <h3 className="text-lg font-bold my-6">Project Planning</h3>
                                        </li>

                                        <div className='my-4'>
                                            {menu["Project Planning"].map((menuItem, index) => (
                                                <li key={index}>
                                                    {menuItem.name === "Logout" ? (
                                                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                            <div className='h-5 w-5 rounded-full mx-2 outline-1'>
                                                                <Avatar className='rounded-full'>
                                                                    <AvatarImage src={menuItem.gif} className=' h-5 w-5' />
                                                                    <AvatarFallback>{menuItem.fallback}</AvatarFallback>
                                                                </Avatar>
                                                            </div>
                                                            <span className="ms-2">{menuItem.name}</span>
                                                        </div>
                                                    ) : (
                                                        <Link href={`/brefons.console${menuItem.link}`} className={`flex items-center p-2 ${menuItem.link.slice(1) === pathname[2] && "bg-[#222F3F] text-white"} text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group`} onClick={()=>dispatch(toggleSidebar())}>
                                                            <div className='h-5 w-5 rounded-full mx-2 outline-1'>
                                                                <Avatar className='rounded-full'>
                                                                    <AvatarImage src={menuItem.gif} className=' h-5 w-5' />
                                                                    <AvatarFallback>{menuItem.fallback}</AvatarFallback>
                                                                </Avatar>
                                                            </div>
                                                            <span className="ms-2">{menuItem.name}</span>
                                                        </Link>
                                                    )}

                                                </li>
                                            ))}

                                        </div>


                                    </ul>


                                </div>
                            </aside>

                        </div>

                        <div className='mt-10  my-6 rounded-full bottom-0 fixed flex items-center gap-4 justify-start outline-1'>
                            <Avatar className='rounded-full flex items-center justify-center md:h-10 md:w-10 '>
                                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full text-center flex justify-center items-center' />
                                <AvatarFallback className='flex items-center justify-center'>User</AvatarFallback>
                            </Avatar>
                            <div>
                                <p>user@gmail.com</p>
                            </div>
                        </div>


                    </div>
                </div>
            </SwipeableDrawer>
        </div>
    );
}

