import ChairPhoto from "../../images/chair_logo.png";
import InstagramLogo from "../../images/instagram_logo.png";
import FacebookLogo from "../../images/facebook_logo.png";
import TwitterLogo from "../../images/twitter_logo.png";



export default function Footer(props) {
    return (
        <>
        <div className={props.className}>
            <div className={props.footerInfo}>
                <h3>Branding stuff</h3>
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Sed euismod libero auctor metus congue, a finibus nisi cursus.</p>
                </section>
            </div>
            <div className={props.footerLogo}>
            <img src={ChairPhoto} alt="" className="chairImage"/>
            </div>
            <div className={props.footerLinks}>
                <a href="./"><img src={InstagramLogo} alt="" className="InstagramLogo"/></a>
                <a href="./"><img src={FacebookLogo} alt="" className="InstagramLogo"/></a>
                <a href="./"><img src={TwitterLogo} alt="" className="InstagramLogo"/></a>
            </div>
            <div className={props.footerCopyrights}>
                <section>2020 IoT Copyright all rights reserved, bla bla</section>
            </div>
        </div>
        </>
    )
}