'use client'
import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    userName: string;
    email: string;
    website?: string;
    phone?: string
}

export const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error("Failed to fetch", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return { users, loading };
};