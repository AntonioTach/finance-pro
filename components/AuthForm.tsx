'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { set, z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import CustomInput from './CustomInput';
import { authFormSchema, authTypes } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/actions/user.actions';
import PlaidLink from './PlaidLink';

const AuthForm = ({ type }: { type: authTypes }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Sign up with Appwrite and create plaid token
      if (type === authTypes.SIGN_IN) {
        const response = await signIn({
          email: values.email,
          password: values.password,
        });
        if (response) router.push('/');
      } else if (type === authTypes.SIGN_UP) {
        const newUser = await signUp(values);

        setUser(newUser);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer items-center gap-1 flex">
          <Image
            src="/icons/udb.png"
            alt="logo"
            width={34}
            height={34}
            className="m-2"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            FinancePro
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? 'Link Account'
              : type === authTypes.SIGN_IN
                ? 'Sign In'
                : 'Sign Up'}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? 'Link your account to get started'
                : 'Please enter your details to continue'}
            </p>
          </h1>
        </div>
      </header>
      {/* {user ? ( */}
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      {/* ) : ( */}
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === authTypes.SIGN_UP && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                      type="text"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                      type="text"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                    type="text"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="Example: JAL"
                      type="text"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="Example: 11101"
                      type="number"
                    />
                  </div>

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="yyyy-mm-dd"
                      type="Date"
                      style={{
                        width: '200px',
                        height: '40px',
                        padding: '0 15px',
                        paddingRight: '5px',
                        boxSizing: 'border-box',
                        textAlign: 'left',
                        appearance: 'none',
                      }}
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="Example: 12334"
                      type="text"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === authTypes.SIGN_IN ? (
                    'Sign In'
                  ) : (
                    'Sign Up'
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === authTypes.SIGN_IN
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>
            <Link
              href={type === authTypes.SIGN_IN ? '/sign-up' : '/sign-in'}
              className="form-link"
            >
              {' '}
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}{' '}
            </Link>
          </footer>
        </>
      {/* )} */}
    </section>
  );
};

export default AuthForm;
