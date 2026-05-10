'use client'
import Title from '@/_components/Title'
import React from 'react'
import Input from './_comp/Input'
import InputFelid from './_comp/InputFelid';
import InputLabel from './_comp/InputLabel';
import ErrorMessage from './_comp/ErrorMessage';
import { useForm } from 'react-hook-form';
import { loginForm, LoginSchema } from './helpers/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/_utils/tailwind.utils';

function LoginFrom() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginSchema>({
        resolver: zodResolver(loginForm)
    })
    const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false)

    function submitForm(data: LoginSchema) {

        if (data.email != "" && data.password != "") {
            console.log('form submitted succfully', data)
            setIsSubmitted(true)
            reset();
        }
    }

    React.useEffect(() => {
        if (!isSubmitted) return
        const timeout = setTimeout(() => {
            setIsSubmitted(false)
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [isSubmitted])
    return (
        <section>
            <Title tag='h2' className='text-center'>Login Form</Title>

            <form onSubmit={handleSubmit(submitForm)}
                noValidate
                className="my-6 w-full rounded border border-zinc-700 dark:bg-zinc-900 p-3 max-w-3xs mx-auto">

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
                        className={cn("border-gray-300 focus:outline-blue-500 ", errors.email
                            && "border-red-500 focus:outline-red-500"
                        )}
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
                        className={cn("border-gray-300 focus:outline-blue-500", errors.email
                            && "border-red-500 focus:outline-red-500"
                        )}
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
                <AnimatePresence>
                    {
                        isSubmitted && (
                            <motion.div
                                initial={{ opacity: "0" }}
                                animate={{ opacity: '1' }}
                                transition={{ duration: 2 }}

                            >
                                <p className='flex mt-4 text-green-500 justify-center'>
                                    Successfully form submitted
                                </p>
                            </motion.div>
                        )
                    }
                </AnimatePresence>

            </form>
        </section>
    )
}

export default LoginFrom