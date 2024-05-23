import "../donations/donations.css"
function Donations(){
    return <>
    <form className="form">
  <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"/>
    <label>Date of Birth</label>
    <input type="date" class="form-control" id="exampleFormControlInput1"/>
    <label>Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    <label>Mobile</label>
    <input type="number" class="form-control" id="exampleFormControlInput1"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Category of Donation</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Money</option>
      <option>Clothes</option>
      <option>Gadgets</option>
      <option>Construction materials</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Collection Address</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
      </>
}
export default Donations;