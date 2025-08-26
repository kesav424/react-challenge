'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import Button from './Button';
import { MoonIcon, SunIcon } from 'lucide-react';

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid hydration mismatch

    const handleTheam = () => {
        setTheme(theme === 'dark' ? "light" : "dark")
    }
    return (
        <Button
            variant='outline'
            aria-label='toggle the theam'
            onClick={handleTheam}
        >
            {
                theme == "dark"
                    ? <MoonIcon />
                    : <SunIcon />
            }
        </Button>
    )
}

export default ThemeSwitcher