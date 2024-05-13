// Imports
import styles from './Footer.module.scss';
import useTheme from '../../hooks/useTheme';

const Footer =() => {
  const { theme } = useTheme();
  const getCurrentYear = () => {
    return new Date().getFullYear();};

  return (
    <footer className={`${styles.footer} ${styles[theme]} py-3`}>
      <span>&copy; {getCurrentYear()} react-portfolio</span>
    </footer>
  )
}

export default Footer