import AuthForm from '@/components/AuthForm';
import { authTypes } from '@/lib/utils';
import React from 'react';

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={authTypes.SIGN_IN} />
    </section>
  );
};

export default SignIn;
