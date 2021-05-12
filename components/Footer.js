import React from 'react'
import style from "../styles/components/Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const Footer = () => {
    return (
        <div className={style.FooterWrapper}>
            <ul className={style.footerMenu}>
                <li className={style.footerMenu__items}>
                    <Link href="/contact-us">
                        contact us
                    </Link>
                </li>
            </ul>

            <ul className={style.socialIcons}>
                <li className={style.socialIcons__items}>
                    <Link href="">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </Link>
</li>
<li className={style.socialIcons__items}>
                
                    <Link href="">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </Link>
                    </li>
                <li className={style.socialIcons__items}>
                    <Link href="">
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </Link>

                </li>
            </ul>
        </div>
    )
}

export default Footer
