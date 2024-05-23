import { Carousel } from "react-bootstrap";
import "./carousel.css"
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import Donations from "../donations/donations";
import { Link } from "react-router-dom";
function Carouseluse(){
    return <>
    <Carousel>
      <Carousel.Item>
        <img
          className="images"
          src={img1}
          alt="First slide"
        />
        <div className="text">
          <p>Your donation can make a difference</p>
        </div>
        <Carousel.Caption>
          <Link to="/donations"><button className="button">DONATE NOW!</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="images"
          src={img2}
          alt="Second slide"
        />
        <div className="text">
          <p>Your donation can make a difference</p>
        </div>
        <Carousel.Caption>
          <Link to="/donations"><button className="button">DONATE NOW!</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="images"
          src={img3}
          alt="Third slide"
        />
        <div className="text">
          <p>Your donation can make a difference</p>
        </div>
        <Carousel.Caption>
          <Link to="/donations"><button className="button">DONATE NOW!</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
}
export default Carouseluse;