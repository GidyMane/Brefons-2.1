'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from '@/shadcn/ui/button';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SideBar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };



    return (
        <div>
            <Button variant={"outline"} onClick={toggleDrawer("left", true)} className='mx-auto bg-black text-white px-3 py-2 rounded-md flex items-center justify-center'>open SideBar</Button>
            <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
            >
                <div className='h-full bg-white shadow-md rounded-md p-4'>
                    SideBar
                </div>
            </SwipeableDrawer>
        </div>
    );
}
