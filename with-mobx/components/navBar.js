import React from 'react';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <>
      <strong>Navigation:</strong>
      <ul>
        <li><Link href="/">Home Page</Link></li>
        <li><Link href="/user">User Page</Link></li>
      </ul>
    </>
  )
}
