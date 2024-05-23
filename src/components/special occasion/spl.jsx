import img5 from "../../assets/img5.jpg"
import "../special occasion/spl.css"
function Special(){
    return <div>
        <div className="d-flex text-center mt-5">
            <div className="me-5 ms-3">
                <p className="fs-1 fw-bold">SPECIAL OCCASIONS</p>
                <p>As we approach special occasions and festive seasons, our hearts fill with joy and anticipation for the celebrations ahead. However, for many underprivileged children in India, these moments are overshadowed by the harsh realities of poverty and deprivation. We are reaching out to you with a heartfelt request to support our initiative to bring the magic of special occasions to underprivileged children across India. Your donation can make a world of difference in brightening the lives of these children and giving them memories to cherish for a lifetime. With your support, we can organize celebratory events, provide gifts, and create memorable experiences for children who would otherwise miss out on these joyful moments. Whether it's a birthday celebration, a cultural festival, or a milestone achievement, every child deserves to feel loved, valued, and celebrated. It will remind them that they are not forgotten, that they are cherished, and that their dreams and aspirations matter.</p>
                <button className="button">CONTRIBUTE HERE</button>
            </div>
            <div>
                <img src={img5}/>
            </div>
        </div>
    </div>
}
export default Special;