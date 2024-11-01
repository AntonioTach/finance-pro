import AuthForm from '@/components/AuthForm';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { authTypes } from '@/lib/utils';
import React from 'react';

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser);
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={authTypes.SIGN_UP} />
    </section>
  );
};

export default SignUp;
