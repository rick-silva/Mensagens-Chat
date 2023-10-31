import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { Link } from 'react-router-dom';

export const MenubarDemo = () => {

    return (
        <Menubar.Root className="flex w-96 items-center justify-center gap-x-4 bg-slate-400 p-[3px] rounded-md shadow-[0_2px_10px] shadow-blackA4">
            <Menubar.Menu>
                <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                    <Link to={'/'}>
                        Saudação
                    </Link>
                </Menubar.Trigger>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                    <Link to={'/OS'}>
                        O.S
                    </Link>
                </Menubar.Trigger>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                    Região
                </Menubar.Trigger>

            </Menubar.Menu>
            <Menubar.Menu>
                <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                    Finalização
                </Menubar.Trigger>
            </Menubar.Menu>
        </Menubar.Root>
    );
};