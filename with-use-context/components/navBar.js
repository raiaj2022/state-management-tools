import React from 'react';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/user">User</Link></li>
    </ul>
  )
}

