import {Card } from "react-bootstrap";
import NavBar from "./NavBar";
import profil from "../img/profile.jpg";
const About = () => {
  return (
    <>
      <div className="bg-success">
        <NavBar />
        <div className="d-flex justify-content-center">
        
          <h1 className="display-1 text-white" >ABOUT ME</h1>
        </div>
        <div className=" d-flex justify-content-around" >
        <div className=" col-lg">
            <img
              className="m-5 w-80 img-fluid rounded-circle shadow-sm"
              src={profil}
              alt="profile"
            />
          </div>
          <div className="col-lg">
            <Card className="m-4 p-5 text-secondary bg-muted">
              <h1 className="text-center text-secondary">
                Full Stack Developer
              </h1>
              <h2>👋 Who am I?</h2>
              <p>
                Graduated in full stack web development at soyHenry (PERN stack).
                I like solving problems and creating tools that
                they make life easier. I discovered the world of programming through
                through JavaScript, Node.js, and MongoDB, and I decided to sign up for the
                Henry's bootcamp, in which I was able to learn and deepen a lot
                about code, technologies, and also the importance of work
                team up. What I like most about this world is that there is so much
                to learn, and that is a great motivation trigger for me
                curiosity. 🤓🧠🚀
              </p>
              <h2>⏪ Where do I come from?</h2>
              <p>
                Work as Deliver, and I worked for five years in
                various Deliver Applications, which always gave me
                curious about how they worked and thought that if I knew
                program, could give solutions to errors that these same
                applications sometimes had.
              </p>
              <h2>🔭 Where am I going?</h2>
              <p>
                Wherever I can contribute solutions through code.
                I believe that the destination is not a place to arrive, but a
                way of transit I choose those processes where I feel
                safe but challenged, demanded but also cared for and rewarded.
              </p>
              <h2>   What technologies and languages ​​do I use?</h2>
              <p>
                JavaScript, HTML, CSS, NodeJS, Express, React, Redux, Sequelize,
                PostgreSQL, MongoDB and Bootstrap.
              </p>
            </Card>
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

export default About;
