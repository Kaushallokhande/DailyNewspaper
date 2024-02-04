import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Toggle from './Toggle';
import { useEffect, useState } from 'react';

function NavBar(props) {
  const { articles, setArticles, isDark, setDark } = props
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

  const handleChange = () => {
    setDark(!isDark);
  }
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (isDark) {
      setMode("light");
    } else {
      setMode("dark");
    }
    // console.log(mode);

  }, [isDark])


  return (
    <>
      <Navbar bg={mode === "light" ? "dark" : "light"} data-bs-theme={mode === "light" ? "dark" : "light"} expand="lg" className="bg-body-tertiary fixed-top" style={{ padding: '7px 15px 7px 10px' }}>
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

        {/* Search bar */}
        <form action='' style={{ padding: '0 8px 0 0' }}>
          <input type="text"
            placeholder="Search" onChange={onChange}></input>
        </form>

        <Toggle isChecked={isDark} handleChange={handleChange} />
      </Navbar>
    </>
  );
}

export default NavBar;