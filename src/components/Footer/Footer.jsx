import React from 'react';
import footerStyle from './footer.module.css'


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h2 className={footerStyle.footer}>hello footer coming</h2>
            </div>
        </footer>
    );
};

export default Footer;