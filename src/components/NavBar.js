import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar(props) {
  const { mode, toggleMode, articles, setArticles} = props
  const temp = articles
  const onChange = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue === "") {
        setArticles(temp);
        return;
    }

    const filteredData = articles?.filter((news) =>
        news.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setArticles(filteredData);
};

  return (
    <>
      <Navbar bg={mode} data-bs-theme={mode} expand="lg" className="bg-body-tertiary fixed-top" style={{ padding: '7px 15px 7px 10px' }}>
        <Navbar.Brand href="/">News Paper</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="/business">Business</NavDropdown.Item>
            <NavDropdown.Item href="/entertainment">Entertainment</NavDropdown.Item>
            <NavDropdown.Item href="/general">General</NavDropdown.Item>
            <NavDropdown.Item href="/health">Health</NavDropdown.Item>
            <NavDropdown.Item href="/science">Science</NavDropdown.Item>
            <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
            <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Some other</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={onChange}
              />
            </Col>
          </Row>
        </Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          onClick={toggleMode}
        /><h6 style={{ color: mode === 'dark' ? '#f8f9fa' : '#343a40' }}>{mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</h6>
      </Navbar>
    </>
  );
}

export default NavBar;
