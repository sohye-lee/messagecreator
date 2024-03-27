import AuthContainer from '@components/container/authContainer';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <AuthContainer>
      <SignUp />
    </AuthContainer>
  );
}
