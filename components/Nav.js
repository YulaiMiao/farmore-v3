import React from 'react';
import style from "../styles/components/Nav.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import {root} from "../components/Layout"
import AppContext from './AppContext';

const Nav = () => {
    // const myContext = useContext(AppContext);
    return (
        <div className={style.NavWrapper}>
            <Link href="/" >
            {/* <img  src={`${myContext.baseUrl}/assets/images/logo.png`} height={50} width={50} alt="Far More Coffee Logo"/> */}
            {/* <Image  src="/assets/images/logo.png" height={50} width={50} alt="Far More Coffee Logo"/> */}
            <img  src="/assets/images/logo.png" height="50px" width="50px" alt="Far More Coffee Logo"/>
            </Link>
            <ul className={style.MenuWrapper}>
                <li className={style.MenuItem}>
                    <Link href="/all-products">
                        our coffee
                    </Link>
                </li>
                <li className={style.MenuItem}>
                    <Link href="/all-products">
                        Roasters
                    </Link>
                </li>
                <li className={style.MenuItem}>
                    <Link href="/about">
                       about us
                    </Link>
                </li>
                <li className={style.MenuItem}>
                    <Link href="/contact">
                        contact
                    </Link>
                </li>
            </ul>
            <div className={style.ActionWrapper}>
                <a href="#">
                    <FontAwesomeIcon icon={faUser} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </a>
            </div>
            
        </div>
    )
}

export default Nav
