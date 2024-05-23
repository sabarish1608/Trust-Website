import { Navbar, Container} from "react-bootstrap";
import logo from "../../assets/logo.png"
function NavUse(){
    return <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="fs-3 fw-bold">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            AIDING HEARTS
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
}
export default NavUse;