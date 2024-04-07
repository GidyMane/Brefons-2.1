'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from '@/shadcn/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import { toggleSidebar } from '@/Redux/Slices/MenuSlice';


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


                        <aside id="default-sidebar" className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                                <h2 className="text-2xl font-bold mb-4">BREFONS</h2>
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                            </svg>
                                            <span className="ms-3">Reports</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Technical Parameters</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Operational Parameters</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Activities</span>
                                        </a>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold my-2">Project Planning</h3>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                            </svg>
                                            <span className="ms-3">Projects</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                            </svg>
                                            <span className="ms-3">Annual Targets</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
                                                <path fill="#cadbea" d="M106.9,55.3c-0.8-2.8-1.8-5.4-3.2-7.9l8.8-8.8L99.8,26l-8.8,8.8c-4.9-2.8-10.5-4.3-16.3-4.4l-3.2-12l-17.3,4.6l3.2,12c-5,2.9-9.1,7.1-11.9,11.9l-12-3.2L29,61.1l12,3.2c0,2.8,0.4,5.6,1.1,8.4c0.8,2.8,1.8,5.4,3.2,7.9l-8.8,8.8L49.2,102l8.8-8.8c4.9,2.8,10.5,4.3,16.3,4.4l3.2,12l17.3-4.6l-3.2-12c5-2.9,9.1-7.1,11.9-11.9l12,3.2l4.6-17.3l-12-3.2C108.1,60.9,107.7,58.1,106.9,55.3z M78.6,79.1c-8.4,2.2-16.9-2.7-19.2-11.1s2.7-16.9,11.1-19.2c8.4-2.2,16.9,2.7,19.2,11.1C91.9,68.3,86.9,76.9,78.6,79.1z"></path><path fill="#fff" d="M96.9,55.3c-0.8-2.8-1.8-5.4-3.2-7.9l8.8-8.8L89.8,26l-8.8,8.8c-4.9-2.8-10.5-4.3-16.3-4.4l-3.2-12l-17.3,4.6l3.2,12c-5,2.9-9.1,7.1-11.9,11.9l-12-3.2L19,61.1l12,3.2c0,2.8,0.4,5.6,1.1,8.4c0.8,2.8,1.8,5.4,3.2,7.9l-8.8,8.8L39.2,102l8.8-8.8c4.9,2.8,10.5,4.3,16.3,4.4l3.2,12l17.3-4.6l-3.2-12c5-2.9,9.1-7.1,11.9-11.9l12,3.2l4.6-17.3l-12-3.2C98.1,60.9,97.7,58.1,96.9,55.3z M68.6,79.1c-8.4,2.2-16.9-2.7-19.2-11.1s2.7-16.9,11.1-19.2c8.4-2.2,16.9,2.7,19.2,11.1C81.9,68.3,76.9,76.9,68.6,79.1z"></path><path fill="#3f4a54" d="M67.5,112.5c-1.3,0-2.5-0.9-2.9-2.2l-2.6-9.8c-4.6-0.3-9.2-1.6-13.4-3.6l-7.2,7.2c-1.2,1.2-3.1,1.2-4.2,0L24.4,91.4c-1.2-1.2-1.2-3.1,0-4.2l7.2-7.2c-1-2.1-1.8-4.3-2.4-6.5c-0.6-2.3-1-4.6-1.2-6.9L18.2,64c-0.8-0.2-1.4-0.7-1.8-1.4s-0.5-1.5-0.3-2.3L20.7,43c0.2-0.8,0.7-1.4,1.4-1.8c0.7-0.4,1.5-0.5,2.3-0.3l9.8,2.6c2.6-3.9,5.9-7.2,9.8-9.8l-2.6-9.8c-0.4-1.6,0.5-3.2,2.1-3.7l17.3-4.6c1.6-0.4,3.2,0.5,3.7,2.1l2.6,9.8c4.6,0.3,9.2,1.6,13.4,3.6l7.2-7.2c1.1-1.1,3.1-1.1,4.2,0l12.7,12.7c1.2,1.2,1.2,3.1,0,4.2L97.4,48c1,2.1,1.8,4.3,2.4,6.5c0.6,2.3,1,4.6,1.2,6.9l9.8,2.6c1.6,0.4,2.5,2.1,2.1,3.7L108.3,85c-0.2,0.8-0.7,1.4-1.4,1.8c-0.7,0.4-1.5,0.5-2.3,0.3l-9.8-2.6c-2.6,3.9-5.9,7.2-9.8,9.8l2.6,9.8c0.4,1.6-0.5,3.2-2.1,3.7l-17.3,4.6C68,112.5,67.7,112.5,67.5,112.5z M48,90.2c0.5,0,1,0.1,1.5,0.4c4.5,2.6,9.6,3.9,14.8,4c1.3,0,2.5,0.9,2.9,2.2l2.4,9.1l11.5-3.1l-2.4-9.1c-0.3-1.3,0.2-2.7,1.4-3.4c4.5-2.6,8.2-6.4,10.8-10.8c0.7-1.2,2.1-1.7,3.4-1.4l9.1,2.4l3.1-11.5l-9.1-2.4c-1.3-0.3-2.2-1.5-2.2-2.9c0-2.6-0.4-5.2-1-7.7l0,0c-0.7-2.5-1.7-4.9-2.9-7.2c-0.7-1.2-0.5-2.6,0.5-3.6l6.6-6.6l-8.4-8.4l-6.6,6.6c-1,1-2.4,1.2-3.6,0.5c-4.5-2.6-9.6-3.9-14.8-4c-1.3,0-2.5-0.9-2.9-2.2l-2.4-9.1L48,25.2l2.4,9.1c0.3,1.3-0.2,2.7-1.4,3.4c-4.5,2.6-8.2,6.4-10.8,10.8c-0.7,1.2-2.1,1.7-3.4,1.4l-9.1-2.4l-3.1,11.5l9.1,2.4c1.3,0.3,2.2,1.5,2.2,2.9c0,2.6,0.4,5.2,1,7.7c0.7,2.5,1.7,4.9,2.9,7.2c0.7,1.2,0.5,2.6-0.5,3.6l-6.6,6.6l8.4,8.4l6.7-6.6C46.4,90.5,47.2,90.2,48,90.2z M64.5,82.7c-3.2,0-6.4-0.8-9.3-2.5c-4.3-2.5-7.4-6.5-8.7-11.3c-1.3-4.8-0.6-9.8,1.9-14.2c2.5-4.3,6.5-7.4,11.3-8.7c9.9-2.7,20.2,3.3,22.9,13.2c1.3,4.8,0.6,9.8-1.9,14.2c-2.5,4.3-6.5,7.4-11.3,8.7l0,0C67.7,82.5,66.1,82.7,64.5,82.7z M68.6,79.1L68.6,79.1L68.6,79.1z M64.5,51.3c-1.1,0-2.2,0.1-3.3,0.4c-3.3,0.9-6,3-7.7,5.9c-1.7,2.9-2.1,6.3-1.3,9.6c0.9,3.3,3,6,5.9,7.7c2.9,1.7,6.3,2.1,9.6,1.3l0,0c3.3-0.9,6-3,7.7-5.9c1.7-2.9,2.1-6.3,1.3-9.6C75.2,55.1,70.1,51.3,64.5,51.3z"></path>
                                            </svg>
                                            <span className="ms-3">Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                            </svg>
                                            <span className="ms-3">Logout</span>
                                        </a>
                                    </li>
                                </ul>
                                <p className="mt-8 text-gray-500 dark:text-gray-400">ADMINISTRATOR</p>
                            </div>
                        </aside>
                    </div>

                </div>
            </SwipeableDrawer>
        </div>
    );
}

