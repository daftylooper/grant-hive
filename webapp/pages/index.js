
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link'; // Import Link component for navigation

export default function Home() {
  return (
    <main>
      <nav className='navbar-log'>
        <img src="/GH.svg" alt="Your SVG" className="gh-svg" />
        <div className="logoo" style={{margin: "0 0 0 2%"}}>
          <h1>
            GrantHive
          </h1>
        </div>
        <div className='login'>
          <Link href="/login">
            Login
          </Link>
        </div>
      </nav>
      <img src="/money.svg" alt="Your SVG" className="money-svg" />
      <img src="/work.svg" alt="Your SVG" className="work-svg" />
      <div className='content'>
        <h1 className="center-text">GrantHive</h1>
        <p className="description">
          "Fueling Dreams and Empowering Students to Shape the Future, One Project at a Time!"
        </p>
      </div>
    </main>
  )
}
