// components/InteractiveList.jsx

'use client';

import { useState } from 'react';

export default function list2() {
  const [items, setItems] = useState(['Laundry']);
  const [input, setInput] = useState('');

  const handleDelete = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  const handleAdd = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div className=" min-h-[50vh] w-[25vw] mx-auto p-10 bg-green-200 rounded-xl shadow transition-all duration-300 ease-in-out hover:scale-105">
      <h1 className="text-2xl text-black mb-4">To Do This Week</h1>
      
      <div className="p-4 bg-green-300 rounded mb-4 flex items-center w-auto justify-between hover:scale-105 transition-all duration-300 ease-in-out">
        <div>
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add item..."
              className=" text-black hover:text-[18px] transition-all duration-300 w-[10vw] ease-in-out focus:outline-hidden"
            />
        </div>
            
        <div>
          <button onClick={handleAdd} className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500 hover:scale-105 transition-all duration-300 ease-in-out ">
              +
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-black text-[3vh]">Finished! You did it!</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleDelete(index)}
              className="cursor-pointer text-black bg-green-100 hover:bg-green-50 hover:scale-105 text-[15px] px-4 py-[3vh] rounded transition-all duration-300 ease-in-out "
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
