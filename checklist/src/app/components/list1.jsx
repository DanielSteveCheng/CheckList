'use client';

import { useState } from 'react';

export default function list1() {
  const [items, setItems] = useState(['Do the Dishes', 'Violin']);
  const [input, setInput] = useState('');

  const handleDelete = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  const handleAdd = () => {
    if (input.trim() !== '') {
      setItems([input,...items]);
      setInput('');
    }
  };

  return (
    <div className="h-[60vh] w-[30vw] mt-[-5vh] mx-auto p-10 bg-green-300 rounded-xl shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 overflow-y-scroll no-scrollbar">
      <h1 className="text-2xl text-black mb-4">To Do Today</h1>
      
      <div className="p-4 bg-green-400 rounded mb-4 flex items-center w-auto justify-between hover:scale-105 transition-all duration-300 ease-in-out">
        <div>
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add item..."
              className=" text-black hover:text-[18px] transition-all duration-300 w-[12vw] ease-in-out focus:outline-hidden"
            />
        </div>
            
        <div>
          <button onClick={handleAdd} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:scale-105 transition-all duration-300 ease-in-out overflow-y-scroll no-scrollbar">
              +
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-black text-[2.5vh] text-center justify-center">Finished! You did it!</p>
      ) : (
        <ul className="space-y-2 trransition-all duration-300 ease-in-out">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleDelete(index)}
              className="cursor-pointer text-black bg-green-200 hover:bg-green-100 hover:scale-105 text-[15px] px-4 py-[3vh] rounded transition-all duration-300 ease-in-out "
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}
