import React from 'react'
import { BASE_URL, navLinks } from '../../_data/link.data'
import Link from 'next/link'
import { LinkIcon } from 'lucide-react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/_components/table'

function Home() {
    return (

        <div className='w-full max-w-4xl mx-auto p-1'>
            <Table>
                <TableCaption >
                    React Challenges Links
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            No
                        </TableHead>
                        <TableHead>
                            Link
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        navLinks.map((link, index) => (
                            <TableRow key={index}>
                                < TableCell className='hover:text-green-500 transition-colors' >
                                    {
                                        index + 1
                                    }
                                </TableCell>
                                <TableCell className='hover:text-green-500 transition-colors flex gap-2 items-center'>
                                    <LinkIcon className='text-amber-400' />
                                    <Link href={BASE_URL + link.href}>{link.label}</Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table >
        </div >

    )
}

export default Home