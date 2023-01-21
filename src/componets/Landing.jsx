import NavBar from "./NavBar";
import Badge from "react-bootstrap/Badge";
import { Container, Image } from "react-bootstrap";
import perfil from "../img/profile.jpg";

const Landing = () => {
  return (
    <>
      <NavBar />

      <Container className="d-flex p-2">
        <Image src={perfil} className="img-fluid w-50 rounded-circle shadow-sm" />
        <Container className="col-lg-7 text-center " >
          <h3 className="text white font-weight-normal mb-3">
            Im
          </h3>
          <h1
              className="display-3 text-uppercase text-primary mb-2" >
              Eduardo Laredo
            </h1>
            <Container className="typed-text d-none">
              HTML - CSS - React - Redux, API Rest - Node Js - Express ,
              Sequelize - Mongoose - Git , SQLite - PostgreSql - MongoDb, Git
              Flow - JSON Web Token (JWT)
            </Container>
        </Container>
      </Container>
    </>
  );
};

export default Landing;
