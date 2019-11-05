import React, { useState, createContext } from 'react';
import list from '../../objects/list';

export const WindowsContext = createContext();

export const WindowsProvider = props => {
  const [windows, setWindows] = useState([]);

  const [menuOpen, setMenuOpen] = useState(false);

  const [focusQueue, setFocusQueue] = useState([]);

  const openWindow = name => {
    const newItemCopy = list.objects.filter(item => item.name === name);
    const newWindow = { ...newItemCopy[0] };
    newWindow.key = getSomeKey(newWindow.name);

    setWindows(prevState => [...prevState, newWindow]);
    focusWindow(newWindow.key);
  };

  const closeWindow = key => {
    const filtered = windows.filter(item => item.key !== key);
    setWindows(() => filtered);
  };

  const focusWindow = key => {
    if (focusQueue.indexOf(key) !== -1) unqueueWindow(key);
    queueWindow(key);
    setWindows(prevState => {
      const newState = prevState;
      newState.map(item => {
        item.isFocus ? (item.isFocus = false) : null;
        item.key === key ? (item.isFocus = true) : null;
      });
      return [...newState];
    });
  };

  const queueWindow = key => {
    setFocusQueue(prevState => [key, ...prevState]);
  };

  const unqueueWindow = key => {
    setFocusQueue(prevState => prevState.filter(item => item !== key));
  };

  const minimizeWindow = key => {
    console.log(focusQueue);
  };

  const getSomeKey = name => {
    // this won't work
    // const key = windows.filter(item => item.name === name).length;

    const key = Math.floor(Math.random() * 10000);
    return `${name}${key}`;
  };

  return (
    <WindowsContext.Provider
      value={{
        menu: [menuOpen, setMenuOpen],
        windows: [windows, setWindows],
        focusQueue,
        openWindow,
        closeWindow,
        focusWindow,
        minimizeWindow,
      }}
    >
      {props.children}
    </WindowsContext.Provider>
  );
};
