'use client';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { signIn } from 'next-auth/react';

function LoginPage() {
  return (
    <div className='text-white flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-amber-400 text-3xl flex items-center font-semibold'>
        <GiWeightLiftingUp />
        <span className='text-white'>Evo</span> Tracker
      </h1>
      <button onClick={() => signIn('google')} className='animate-pulse'>
        DEMO SIGN IN
      </button>
    </div>
  );
}

export default LoginPage;
