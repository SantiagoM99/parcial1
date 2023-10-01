/*Footer component with the following message centered Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico*/
import React from 'react';
import './Footer.css';

import { FormattedMessage } from "react-intl";
function Footer() {
    return (
        <div className="footer">
            <p className="contacto">
                <FormattedMessage id="TextoFooter"/>
            </p>
        </div>
    );
}

export default Footer;

