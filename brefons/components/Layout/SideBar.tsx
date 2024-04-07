'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from '@/shadcn/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import { toggleSidebar } from '@/Redux/Slices/MenuSlice';
import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn/ui/avatar';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

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
        <div>
            <SwipeableDrawer
                anchor={"left"}
                open={menuIsOpen}
                onClose={toggleDrawer()}
                onOpen={toggleDrawer()}
            >
                <div className='h-full bg-white shadow-md rounded-md p-4'>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-blue-500">BREFONS</h2>


                        <aside id="default-sidebar" className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <div className='h-10 w-10 rounded-full mx-2 outline-1'>
                                                <Avatar className='rounded-full'>
                                                    <AvatarImage src="/reports.gif" className='' />
                                                    <AvatarFallback>reports</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <span className="ms-3">Reports</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <div className='h-10 w-10 rounded-full mx-2 outline-1'>
                                                <Avatar className='rounded-full'>
                                                    <AvatarImage src="/technical.gif" className='' />
                                                    <AvatarFallback>tech</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Technical Parameters</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <div className='h-10 w-10 rounded-full mx-2 outline-1'>
                                                <Avatar className='rounded-full'>
                                                    <AvatarImage src="/parameters.gif" className='' />
                                                    <AvatarFallback>Operational</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Operational Parameters</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <div className='h-10 w-10 rounded-full mx-2 outline-1'>
                                                <Avatar className='rounded-full'>
                                                    <AvatarImage src="/activity.gif" className='' />
                                                    <AvatarFallback>activities</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Activities</span>
                                        </a>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold my-2">Project Planning</h3>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <div className='h-10 w-10 rounded-full mx-2 outline-1'>
                                                <Avatar className='rounded-full'>
                                                    <AvatarImage src="/project.png" className='' />
                                                    <AvatarFallback>project</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <span className="ms-3">Projects</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <div className='h-10 w-10 rounded-full mx-2 outline-1'>
                                                <Avatar className='rounded-full'>
                                                    <AvatarImage src="/target.gif" className='' />
                                                    <AvatarFallback>target</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <span className="ms-3">Annual Targets</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <div className='h-10 w-10 rounded-full mx-2 outline-1'>
                                                <Avatar className='rounded-full'>
                                                    <AvatarImage src="/settings.gif" className='' />
                                                    <AvatarFallback>settings</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <span className="ms-3">Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <div className='h-10 w-10 rounded-full mx-2 outline-1'>
                                                <Avatar className='rounded-full'>
                                                    <AvatarImage src="/logout.gif" className='' />
                                                    <AvatarFallback>logout</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <span className="ms-3">Logout</span>
                                        </a>
                                    </li>
                                </ul>
                                

                            </div>
                        </aside>
                        <div className='md:h-10 md:w-10 rounded-full outline-1'>
                                    <Avatar className='rounded-full'>
                                        <AvatarImage src="https://github.com/shadcn.png" className='rounded-full' />
                                        <AvatarFallback>User</AvatarFallback>
                                    </Avatar>
                                </div>
                    </div>


                </div>
            </SwipeableDrawer>
        </div>
    );
}

