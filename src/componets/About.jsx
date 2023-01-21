import { Container, Card } from "react-bootstrap";
import NavBar from "./NavBar";
import profil from "../img/profile.jpg"
const About = () => {
  return (
    <>
    <div className="bg-success">

      <NavBar />
      <Container className="d-flex align-items-center justify-content-center">
        {/* <h1 className="display-1 text-uppercase text-black" >About</h1> */}
        <h1 className="display-1 text-uppercase text-white">
          ABOUT ME
        </h1>
      </Container>
      <Container className="d-flex">
        <Container>
          <Card className="p-5 text-secondary">
            <h3 className="text-center text-secondary">Full Stack Developer</h3>
            <p>
              Hello! I'm Eduardo Laredo, Full Stack web developer. Let me tell
              you a little about me.
            </p>
            <p>
              I self-taught the courses on Udemy and then entered soyHenry's
              bootcamp, which gave me a solid knowledge of web development in
              the JavaScript language, both frontend and backend.
            </p>
            <span>The technologies I have worked with are:</span>

            <span>JavaScript</span>
            <span>Front : HTML - CSS - React - Redux</span>
            <span>
              Back : API Rest - Node Js - Express - Sequelize - Mongoose
            </span>
            <span>Data Base : SQLite - PostgreSql - MongoDb</span>
            <span>Extras: Git - Trello</span>
            <span>Learning: TypeScript</span>
            <br />
            <p>
              I am currently building an app for my website staff; and of
              course, studying to improve my skills as a programmer. Finally, I
              invite you to discover my projects in the projects section
            </p>
          </Card>
        </Container>
        <Container>
          
              <img className="w-100 img-fluid rounded-circle shadow-sm" src={profil} alt="profile" />
           
        </Container>
      </Container>
      <footer className="bg-dark py-5" >
        <p className="text-center text-white">Copyrigth &copy; Eduardo 2023</p>
      </footer>
    </div>
    </>
  );
};

export default About;
