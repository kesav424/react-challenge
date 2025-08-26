import React from "react";
import { tv } from "tailwind-variants";

interface PageTitle extends React.ComponentPropsWithoutRef<'h1'> {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode,
    className?: string;
}

const title = tv({
    base: "font-semibold text-gray-900 dark:text-white",
    variants: {
        tag: {
            h1: "text-5xl leading-tight",
            h2: "text-4xl leading-snug",
            h3: "text-3xl leading-snug",
            h4: "text-2xl leading-snug",
            h5: "text-xl leading-normal",
            h6: "text-lg leading-normal",
        },
    },
    defaultVariants: {
        tag: "h1",
    },
});
function Title(props: PageTitle) {
    const { tag: Tag = 'h1', children, className = " " } = props
    return (
        <Tag className={title({ tag: Tag, class: className })}>{children}</Tag>
    )
}

export default Title