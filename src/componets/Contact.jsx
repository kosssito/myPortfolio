import { Card, Nav } from "react-bootstrap";
import NavBar from "./NavBar";
import linkedin from "../img/Linkedin.png";
import gmail from "../img/Gmail.png";
import github from "../img/Github.jpg";
import wahtApp from "../img/whatApp.png";

const Contact = () => {
  return (
    <>
      <div className="bg-success">
        <NavBar />
    
        <div className="row">
        <div className="col-sm-5 p-5">
            <Nav.Link
              className="text-white"
              href="https://www.linkedin.com/in/eduardo-laredo-07644a231/"
            >
              <img className="  rounded-circle" src={linkedin} alt="linkedin" />
            </Nav.Link>
          </div>
          <div className="col-sm-5 p-5">
            <Nav.Link
              className="text-white"
              href="mailto:eduardo.fco.laredo.mateos@gmail.com"
            >
              <img className="rounded-circle" src={gmail} alt="gmail" />
            </Nav.Link>
          </div>
          <div className="col-sm-5 p-5">
            <Nav.Link
              className="text-white"
              href="https://github.com/kosssito"
            >
              <img className="rounded-circle" src={github} alt="github" />
            </Nav.Link>
          </div>
          <div className="col-sm-5 p-5">
            <Nav.Link
              className="text-white"
              href="https://www.linkedin.com/in/eduardo-laredo-07644a231/"
            >
              <img className="rounded-circle" src={wahtApp} alt="wahtApp" />
            </Nav.Link>
          </div>
        </div>
        <footer className="bg-dark py-5">
          <p className="text-center text-white">
            Copyrigth &copy; Eduardo 2023
          </p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
