import React from 'react'
import { ICFacebook, ICGithub, ICInstagram, ICTelegram, ICYoutube, Logo } from '../../../assets';
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img src={img} className="icon-footer" alt="Icon-footer" />
        </div>
    )
}
export const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="logo-footer">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICYoutube} />
                    <Icon img={ICGithub} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICFacebook} />
                </div>
            </div>
            <div className="copyright">
                <p>
                    CopyRight Alfa-Code
                </p>
            </div>
        </div>
    )
}
