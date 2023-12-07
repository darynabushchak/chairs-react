import { Link } from "react-router-dom"
import Button from "./Button"
import ChairPhoto from "../../images/chair_logo.png";


function Header(props) {
    return (
        <>
            <div className={props.className}>
                <img src={ChairPhoto} alt="" className="chairImage"
                    width={"60px"}
                    height={"60px"}
                />
                <Link className={props.link} to="/"><Button className={props.homeButton} text={"Home"}></Button></Link>
                <Link className={props.link} to="/catalog"><Button className={props.catalogButton} text={"Catalog"}></Button></Link>
                <Link className={props.link} to="/"><Button className={props.cartButton} text={"Cart"}></Button></Link>
                <div className="searchPlace"></div>
                {props.children}
            </div>
        </>
    )
}

export default Header