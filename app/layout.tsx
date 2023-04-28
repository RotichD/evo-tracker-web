import './globals.css';
import { SessionProvider } from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import LoginPage from '@/components/Login';

export const metadata = {
  title: 'Evo Tracker',
  description: 'Progressive overload note taking app. Gym App.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className='bg-dark'>
        <SessionProvider session={session}>
          {!session ? <LoginPage /> : <>{children}</>}
        </SessionProvider>
      </body>
    </html>
  );
}
