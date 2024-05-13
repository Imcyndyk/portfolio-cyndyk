import React from 'react'
import { useState, createContext, useEffect } from 'react';


// 1. init context 
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
// Init state
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if(!theme) {
      loadUserSettings();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  function loadUserSettings(){
   let userSettings = localStorage.getItem('userSettings')
    if(userSettings){
        userSettings = JSON.parse(userSettings)
        setTheme(userSettings.theme)
    } else {
        defaultSettings()
    }
  };  

  function defaultSettings(){
    const prefersDark = window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        setTheme("dark");
    } else { 
        setTheme("light");
    }
  }

//   Save user settings
  function saveUserSettings(){
    let toggleTheme = theme === "light" ? "dark" : "light"

    localStorage.setItem('userSettings', JSON.stringify({
        theme: toggleTheme
    }))
  }

// Functions to chang theme
 const toggleTheme = () => {
    setTheme((curr)=> (curr === "light" ? "dark" : "light"));
    saveUserSettings()
  }

return <ThemeContext.Provider value={{theme, toggleTheme}}>
  {children}
</ThemeContext.Provider>

}