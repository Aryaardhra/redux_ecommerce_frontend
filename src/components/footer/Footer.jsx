import instaImg1 from "../../assets/instagram-1.jpg"
import instaImg2 from "../../assets/instagram-2.jpg"
import instaImg3 from "../../assets/instagram-3.jpg"
import instaImg4 from "../../assets/instagram-4.jpg"
import instaImg5 from "../../assets/instagram-5.jpg"
import instaImg6 from "../../assets/instagram-6.jpg"

const Footer = () => {
  return (
    <>
    <footer className="section__container footer__container">
        <div className="footer__col">
            <h4>CONTACT INFO</h4>
            <p>
                <span><i className="ri-map-pin-2-line"></i></span>
                123,xyz,bdhjd
            </p>
            <p>
                <span><i className="ri-mail-fill"></i></span>
                support@gmail.com
            </p>
            <p>
                <span><i className="ri-phone-fill"></i></span>
                +91 9654084586
            </p>
        </div>

        <div className="footer__col">
            <h4>COMPANY</h4>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Work With Us</a>
            <a href="/">Our Blogs</a>
            <a href="/">Terms and Conditions</a>
        </div>

        <div className="footer__col">
            <h4>USEFUL LINKS</h4>
            <a href="/">Help</a>
            <a href="/">Track My Orders</a>
            <a href="/">Mens</a>
            <a href="/">Womens</a>
            <a href="/">Dresses</a>
        </div>

        <div className="footer__col">
            <h4>INSTAGRAM</h4>
            <div className="instagram__grid">
                <img src={instaImg1} alt="instaImg1" />
                <img src={instaImg2} alt="instaImg2" />
                <img src={instaImg3} alt="instaImg3" />
                <img src={instaImg4} alt="instaImg4" />
                <img src={instaImg5} alt="instaImg5" />
                <img src={instaImg6} alt="instaImg6" />
            </div>
        </div>
    </footer>

    <div className="footer__bar">
        Copyright 2025 by Ecommerce. All rights reserved.
    </div>
    </>
  )
}

export default Footer