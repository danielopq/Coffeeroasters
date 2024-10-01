import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div id="footerLinks">
                <div>HOME</div>
                <div>ABOUT US</div>
                <div>CREATE YOUR PLAN</div>
            </div>
            <div id="footerSocialMedia">
                <div id="facebook" className='socialMediaIcon'></div>
                <div id="twitter" className='socialMediaIcon'></div>
                <div id="instagram" className='socialMediaIcon'></div>
            </div>
        </footer>
    )
}

export default Footer;