import { Link } from "react-router-dom"
import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">UPTO 20% Discount on</h4>
        <h1>Girl's Fashion</h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</p>
        <button className="btn"><Link to="/shop">EXPLORE NOW</Link></button>
      </div>

      {/*image*/}

      <div className="header__image">
         <img src={bannerImg} alt="bannerImg" />
      </div>
    </div>
  )
}

export default Banner