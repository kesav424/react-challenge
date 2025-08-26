'use client';

import React, { useEffect, useState } from 'react';
import { productList } from '../_data/search.data';
import { useSearchParams } from 'next/navigation';

function SearchList() {
    const searchParam = useSearchParams();
    const [list, setList] = useState<string[]>(productList);
    const searchValue = searchParam.get('query') || "";

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredItem = productList.filter(item =>
                item.toLowerCase().includes(searchValue.toLowerCase())
            );
            setList(filteredItem);
        }, 1000);

        return () => clearTimeout(debounce);
    }, [searchValue]);

    return (
        <div className="my-6 w-full rounded border border-zinc-700 bg-zinc-900 p-3 focus-within:border-green-400">
            {list.length > 0 ? (
                <ul aria-live="polite">
                    {list.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            ) : (
                <ul aria-live="polite">
                    <li role="status" className="text-red-500 dark:text-red-500">
                        Not in the list
                    </li>
                </ul>
            )}
        </div>
    );
}

export default SearchList;
