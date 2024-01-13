import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';

function NavBar(props) {
  const { mode, toggleMode } = props
  useEffect(() => {
    document.body.style.background = mode === 'dark' ? 'dark' : 'light';
  }, [mode]);

  return (
    <>
      <Navbar bg={mode} data-bs-theme={mode} expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="/">News Paper</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/general">General</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
          </Nav>
          <Form.Check
            type="switch"
            id="custom-switch"
            onClick={toggleMode}
          /><h6 style={{ color: mode === 'dark' ? '#f8f9fa' : '#343a40' }}>{mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</h6>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;


// import React from 'react';
// import { Link } from "react-router-dom";

// function NavBar(props) {
//   const { mode, toggleMode } = props;

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} fixed-top`}>
//       <div className="container-fluid">
//         <a className="navbar-brand" to="/">
//           News Paper
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/business">Business</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/entertainment">
//                 Entertainment
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/general">
//                 General
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/health">Health</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/science">
//                 Science
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/sports">
//                 Sports
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/technology">
//                 Technology
//               </Link>
//             </li>
//           </ul>
//           <div className="form-check form-switch">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               role="switch"
//               id="flexSwitchCheckDefault"
//               onClick={toggleMode}
//             />
//             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
//               {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
//             </label>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
