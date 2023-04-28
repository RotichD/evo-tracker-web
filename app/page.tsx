'use client';
import { useState, useEffect } from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { signOut } from 'next-auth/react';

function HomePage() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    let newGreeting: string;

    if (hour >= 5 && hour < 12) {
      newGreeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      newGreeting = 'Good afternoon';
    } else {
      newGreeting = 'Good evening';
    }

    setGreeting(newGreeting);
  }, []);

  return (
    <>
      <div className='flex flex-col items-center py-4 bg-medium'>
        <h1 className='text-amber-400 text-3xl flex items-center font-semibold'>
          <GiWeightLiftingUp />
          <span className='text-white'>Evo</span> Tracker
        </h1>
      </div>
      <span className='text-white text-2xl px-4'>{greeting}, Dylan</span>
      <button onClick={() => signOut()} className='bg-blue-300 p-3'>
        Sign Out
      </button>
    </>
  );
}

export default HomePage;
