import { Outlet } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

import useTheme from '../../hooks/useTheme'


const Layout = () => {
  const {theme} = useTheme();
  return(
  <div className={"app " + theme}>
    <Header />
    <div className="appContent">
      <Outlet />
    </div>
    <Footer />
  </div>
  )
};

export default Layout