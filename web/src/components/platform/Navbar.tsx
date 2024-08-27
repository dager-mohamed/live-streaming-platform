import { Tv } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { Button } from '@components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="container flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Tv className="h-6 w-6" />
        </Link>
        <SignedOut>
          <div className="flex items-center gap-4">
            <SignInButton>
              <Button>Login</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant={'outline'}>Sign Up</Button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
