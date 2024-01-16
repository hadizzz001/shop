"use client" 
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const PDFProvider = ({ children }) => {
  const [myString, setMyString] = useState('');
  const [stringSaved, setStringSaved] = useState(false);

  const saveString = (newString) => {
    // Allow saving only if no string is present
    if (!stringSaved) {
      setMyString(newString);
      setStringSaved(true);
    } else {
      console.warn('A string is already present. Delete the existing string before saving a new one.');
    }
  };

  const deleteString = () => {
    setMyString('');
    setStringSaved(false);
  };

  return (
    <MyContext.Provider value={{ myString, stringSaved, saveString, deleteString }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

