import img4 from "../../assets/img4.webp"
import "../feed/feed.css"
function Feed(){
    return <div className="d-flex mt-5 align-items-center">  
            <div>
                <img src={img4} className="img"/>  
            </div>
            <div className="title text-center ms-5 me-3">   
                <h2 className="text-center fs-1 fw-bold">FEED CHILDREN</h2>
                <p className="fw-medium fs-5">'The true measure of any society can be found in how it treats its most vulnerable members'- Mahathma Gandhi</p>
                <p>As we sit down to our meals each day, it's easy to take for granted the simple pleasure of having enough to eat. Yet, for the children of our charity, this basic necessity remains out of reach. Today, I'm reaching out to you with a heartfelt plea to join us in our mission to feed hungry children. Your donation, no matter how small, can make a world of difference in the life of a child who is struggling to find their next meal. With your support, we can provide nutritious meals to those who need it most. Your donation will help us sustain feeding programs, establish community gardens, and advocate for policies that address the root causes of hunger. Together, we can ensure that every child has access to the nourishment they need to grow, learn, and thrive.</p>
                <button className="button">FEED NOW!</button>
            </div>
    </div>
}
export default Feed;