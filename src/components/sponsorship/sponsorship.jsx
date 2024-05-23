import img6 from "../../assets/img6.jpg"
import "../sponsorship/sponsorship.css"
function Sponsorship(){
return <div>
    <div className="d-flex align-items-center mt-5">
        <div>
            <img src={img6}/>
        </div>
        <div className="text-center ms-5 me-3">
            <p className="fs-1 fw-bold">SPONSORSHIP</p>
            <p className="fw-medium fs-5">"Education is a powerful tool that has the potential to transform lives and break the cycle of poverty."</p>
            <p>Yet, for many children from impoverished backgrounds, access to quality education remains a distant dream. We request you to join us in making that dream a reality by sponsoring a child's education. Your sponsorship will provide a deserving child with the opportunity to attend school, access learning materials, and receive essential support to thrive academically. By investing in their education, you're not just changing the trajectory of one child's life, but you're also contributing to the betterment of entire communities and future generations.</p>
            <button className="button">SPONSOR A CHILD</button>
        </div>
    </div>
</div>
}
export default Sponsorship;