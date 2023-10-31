import React, { useEffect, useState } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { Link } from 'react-router-dom';
import { api } from '../../../lib/axios';

export const MenubarDemo = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function handleGetCategory() {
            await api.get('/category')
                .then(response => {
                    setData(response.data.category)
                })
        }

        handleGetCategory()
    }, [])

    return (
        <Menubar.Root className="flex w-96 items-center justify-center gap-x-4 bg-slate-400 p-[3px] rounded-md shadow-[0_2px_10px] shadow-blackA4">
            {data?.map(category => {
                return (
                    <Menubar.Menu>
                        <Menubar.Trigger key={category.id} className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                            <Link to={`/section/${category.id}`}>
                                {category.title}
                            </Link>
                        </Menubar.Trigger>
                    </Menubar.Menu>
                )
            })}
            <Menubar.Menu>
                <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                    <Link to='/admin/create'>
                        ADM
                    </Link>
                </Menubar.Trigger>
            </Menubar.Menu>
        </Menubar.Root>
    );
};