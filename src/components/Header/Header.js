import React from 'react';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  return (
    <header>
      <button onClick={signOut}>Log out</button>
    </header>
  );
}
