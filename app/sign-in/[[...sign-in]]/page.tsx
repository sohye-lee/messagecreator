// import AuthContainer from '@/components/container/authContainer';
import { SignIn } from '@clerk/nextjs';
import AuthContainer from '@components/container/authContainer';
import React from 'react';

export default function Page() {
  return (
    <AuthContainer>
      <SignIn />
    </AuthContainer>
  );
}
