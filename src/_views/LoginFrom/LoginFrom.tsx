'use client'
import Title from '@/_components/Title'
import React, { FormEvent } from 'react'
import Input from './_comp/Input'
import InputFelid from './_comp/InputFelid';
import InputLabel from './_comp/InputLabel';
import ErrorMessage from './_comp/ErrorMessage';
import { useForm } from 'react-hook-form';
import { loginForm, LoginSchema } from './helpers/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';

function LoginFrom() {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginForm)
    })

    function submitForm(data: LoginSchema) {
        console.log('form submitted succfully', data)

    }
    return (
        <section>
            <Title tag='h2' className='text-center'>Login Form</Title>

            <form onSubmit={handleSubmit(submitForm)}
                noValidate
                className="my-6 w-full rounded border border-zinc-700 bg-zinc-900 p-3 max-w-3xs mx-auto">

                <InputFelid className='gap-1 my-1.5'>
                    <InputLabel
                        htmlFor="EMAIl"
                        aria-label='enter your user email'
                    >
                        Email <span className='text-red-500' aria-hidden="true">*</span>
                    </InputLabel>
                    <Input
                        id='EMAIl'
                        placeholder='Enter your email'
                        type='email'
                        autoComplete='username'
                        required
                        {
                        ...register('email')
                        }
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-blue-500"}
                    />
                    {
                        errors.email && (
                            <ErrorMessage id='email-error' >
                                {
                                    errors.email.message
                                }
                            </ErrorMessage>
                        )
                    }
                </InputFelid>

                <InputFelid>
                    <InputLabel
                        htmlFor="PASSWORD"
                        aria-label='enter you password'
                    >
                        Password <span className='text-red-500' aria-hidden="true">*</span>
                    </InputLabel>
                    <Input
                        id='PASSWORD'
                        placeholder='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        {...register("password")}
                        aria-invalid={!!errors.password}
                        aria-describedby={errors.password ? "error-email" : undefined}
                        className={errors.password
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-blue-500"}
                    />
                    {
                        errors.password && (
                            <ErrorMessage id={"error-email"}>
                                {
                                    errors.password?.message
                                }
                            </ErrorMessage>
                        )
                    }
                </InputFelid>

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