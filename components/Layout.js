import React,{useContext} from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss'
// import AppContext from './AppContext';

// let root = '';
 


const Layout = ({children}) => {
    
    //  const myContext = useContext(AppContext);
    return (
        <>
        <Head>
        <title>Far More Coffee</title>
        <meta name="description" content="Far More Than Coffee. It is a movement. Introducing far more coffee, a whole new way of enjoying fresh made coffee." />
        <link rel="icon" href="/assets/images/logo.png"/>
      </Head>
      <Nav/>
      <main className={styles.main}>
          {children}
      </main>
      <Footer/>
      </>
    )
}

export default Layout
// export {root};
