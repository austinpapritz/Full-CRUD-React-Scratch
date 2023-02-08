import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  const history = useHistory();
  return (
    <header>
      <button
        onClick={() => {
          signOut();
          history.push('/auth/sign-in');
        }}
      >
        Log out
      </button>
    </header>
  );
}
