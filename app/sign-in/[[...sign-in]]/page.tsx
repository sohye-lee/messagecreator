import AuthContainer from '@/components/container/authContainer';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <AuthContainer>
      <SignIn />
    </AuthContainer>
  );
}
