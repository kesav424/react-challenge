import React from 'react';
import clsx from 'clsx';
import { cn } from '@/_utils/tailwind.utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                "max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 px-4 py-2",
                className
            )}
        >
            {children}
        </div>
    );
}

export default Card;
