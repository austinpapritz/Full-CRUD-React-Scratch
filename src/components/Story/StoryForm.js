import React from 'react';
import { useState } from 'react';

export default function StoryForm({ title = '', name = '', entry = '', submitHandler }) {
  const [titleInput, setTitleInput] = useState(title);
  const [nameInput, setNameInput] = useState(name);
  const [entryInput, setEntryInput] = useState(entry);

  return (
    <div className="form-container">
      <label>Title</label>
      <input type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
      <label>Name</label>
      <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
      <label>Entry</label>
      <input type="text" value={entryInput} onChange={(e) => setEntryInput(e.target.value)} />
      <button
        onClick={() => {
          submitHandler(titleInput, nameInput, entryInput);
        }}
      >
        Submit Entry
      </button>
    </div>
  );
}
