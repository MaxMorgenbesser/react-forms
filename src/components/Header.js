import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (<>
  {/* <Button>BootStrap button </Button> */}
  <Nav 
      activeKey="/home"
      
    >
      <Nav.Item>
      <Link to='/'/>
        <Nav.Link as = {Link} to ='/'>Home</Nav.Link>
       

      </Nav.Item>
      <Nav.Item>
      <Nav.Link as = {Link} to ='/about'>About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Link to='/'/>
      <Nav.Link as = {Link} to ='/contact'>Contact
        </Nav.Link>
      </Nav.Item>
    </Nav></>)
};

export default Header;
