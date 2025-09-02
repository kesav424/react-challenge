import { Metadata } from 'next';
import React from 'react'
import LoginFrom from '@/_views/LoginFrom/LoginFrom'


export const metadata: Metadata = {
    title: "Login form",
    description: "Login form with form validation",
};

function page() {
    return (
        <LoginFrom />
    )
}

export default page