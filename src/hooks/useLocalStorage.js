import { useState } from 'react';

const useLocalStorage = (key, initialValue) => { 
    //declaring our function call with 2 values we expect.  
    //The key/name of what we are changing and the intialvalue object
    const [storedValue, setStoredValue] = useState(() => {
    //This will check the local storage of window to see if there is anything already holding that value
    //from previous changes
      if (window.localStorage.getItem(key)) {
        // if localstorage has anything for this key value then return the value held there.
        // window.localStorage is a built in function with getItem as a function that checks values held in browser
        // you can also setItem to have the window hold the value.
        return JSON.parse(window.localStorage.getItem(key));
      }
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      // this line will then add the current value held in initialValue to the key
      // and return the initialValue instead 
      return initialValue;
    });
  
    const setValue = value => {
    //We will then create another function to manage the value held in storedValue with setStoredValue
    //
    setStoredValue(value);  //This is setting the local (for the lack of a better word) state
    window.localStorage.setItem(key, JSON.stringify(value)); // this is holding the window.localStorage 
    //that will be used even when we close the browser
    };
  
    return [storedValue, setValue];
  };

export default useLocalStorage;