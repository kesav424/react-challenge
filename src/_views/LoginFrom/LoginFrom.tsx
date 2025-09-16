import Title from '@/_components/Title'
import React from 'react'
import Input from './_comp/Input'

function LoginFrom() {
    return (
        <section>
            <Title tag='h2' className='text-center'>Login Form</Title>
            <form action=""
                className="my-6 w-full rounded border border-zinc-700 bg-zinc-900 p-3 max-w-3xs mx-auto">

                <div className='flex flex-col  gap-1 my-1.5'>
                    <label htmlFor="EMAIl" aria-label='enter your user email'>Email</label>
                    <Input
                        id='EMAIl'
                        placeholder='Enter your email'
                        type='email'
                    />
                </div>

                <div className='flex flex-col  gap-1'>
                    <label htmlFor="PASSWORD" aria-label='enter you password'>Password</label>
                    <Input
                        id='PASSWORD'
                        placeholder='password'
                        type='password'
                    />
                </div>

                <button
                    type="submit"
                    className="rounded bg-indigo-600 px-1.5 py-1 text-xs text-indigo-50 transition-colors hover:bg-indigo-500 w-full mt-3"
                >
                    Submit
                </button>
            </form>
        </section>
    )
}

export default LoginFrom