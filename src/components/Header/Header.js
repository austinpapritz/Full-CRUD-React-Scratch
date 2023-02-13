import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header({ main }) {
  const history = useHistory();
  return (
    <header>
      {main && <p>Click on a character to see their stories</p>}
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
