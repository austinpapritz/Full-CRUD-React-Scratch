import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header({ main, stories, name }) {
  const history = useHistory();

  const nameCap = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <header>
      {main && <p>Click on a character to see their stories</p>}
      {stories && <p>Stories about {nameCap}</p>}
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
