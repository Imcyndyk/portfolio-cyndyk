import useTheme from '../../hooks/useTheme';
import Switch from 'react-switch';

import styles from './ThemeToggler.module.scss';

import { Fragment } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';


const ThemeToggler = () => {
    const {theme, toggleTheme} = useTheme();
    
  return (
    <Fragment>
    <label className={styles.toggleContainer}>
        <span className={styles.lable}>Switch Theme</span>
        <Switch
        // Use context values
            checked={theme === "dark"}
            onChange={toggleTheme}
         // NON-TOGGLED MODE: light
         checkedIcon={false}
         checkedHandleIcon={
           <MdDarkMode
             style={{ color: "black", paddingLeft: "5px", fontSize: "20px" }}
           />
         }
         offColor='#F2E5A2'
         
         // TOGGLED MODE: dark
         uncheckedIcon={false}
         uncheckedHandleIcon={
           <MdLightMode
             style={{ color: "black", paddingLeft: "5px", fontSize: "20px" }}
           />
         }
         onColor='#499CA6'
        />
    </label>
   </Fragment>
  )
}

export default ThemeToggler