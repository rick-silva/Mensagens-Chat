'use client'

import React, { useEffect, useState } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import axios from 'axios';
import Link from 'next/link';

interface DataProps {
    id: string
    title: string
}

export const MenubarDemo = () => {

    const [data, setData] = useState<DataProps[]>([])

    useEffect(() => {
        async function handleGetCategory() {
            await axios.get('/api/category')
                .then(response => {
                    setData(response.data)
                })
        }

        handleGetCategory()
    }, [])

    return (
        <Menubar.Root className="flex w-max items-center justify-center gap-x-4 bg-slate-400 p-[3px] rounded-md shadow-[0_2px_10px] shadow-black">
            <Menubar.Menu>
                <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                    <Link href='/' className='text-black font-semibold'>
                        Geral
                    </Link>
                </Menubar.Trigger>
            </Menubar.Menu>
            {data?.map(category => {
                return (
                    <Menubar.Menu>
                        <Menubar.Trigger key={category.id} className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                            <Link href={`/section/${category.id}`} className='text-black font-semibold'>
                                {category.title}
                            </Link>
                        </Menubar.Trigger>
                    </Menubar.Menu>
                )
            })}
            <Menubar.Menu>
                <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                    <Link href='/message/create' className='text-black font-semibold'>
                        ADM
                    </Link>
                </Menubar.Trigger>
            </Menubar.Menu>
        </Menubar.Root>
    );
};