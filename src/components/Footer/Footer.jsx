import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="stuff" />
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by{" "}
                <a href="#" target="_blank" rel="noreferrer">
                    Pog
                </a>
            </div>
            <div className={styles.socials}>
                <a href="http://instagram.com" target="_blank" rel="noreferrer">
                    <svg className="icon">
                        <use
                            xlinkHref={`/sprite.svg#instagram`}
                        />
                    </svg>
                </a>
                <a href="http://facebook.com" target="_blank" rel="noreferrer">
                    <svg className="icon">
                        <use
                            xlinkHref={`/sprite.svg#facebook`}
                        />
                    </svg>
                </a>
                <a href="http://youtube.com" target="_blank" rel="noreferrer">
                    <svg className="icon">
                        <use xlinkHref={`/sprite.svg#youtube`} />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Footer;
