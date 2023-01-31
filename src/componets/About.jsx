import { Card } from "react-bootstrap";
import NavBar from "./NavBar";
const About = () => {
  return (
    <>
      <div className="bg-light">
        <NavBar />
        <div className="">
         
          <div className="container">
            <Card className="mx-5 my-5 p-2 text-secondary bg-muted">
              <h4>👋 Who am I?</h4>
              <p>
                Graduated in full stack web development at soyHenry (PERN
                stack). I like solving problems and creating tools that they
                make life easier. I discovered the world of programming through
                through JavaScript, Node.js, and MongoDB, and I decided to sign
                up for the Henry's bootcamp, in which I was able to learn and
                deepen a lot about code, technologies, and also the importance
                of work team up. What I like most about this world is that there
                is so much to learn, and that is a great motivation trigger for
                me curiosity. 🤓🧠🚀
              </p>
              <h4>⏪ Where do I come from?</h4>
              <p>
                Work as Deliver, and I worked for five years in various Deliver
                Applications, which always gave me curious about how they worked
                and thought that if I knew program, could give solutions to
                errors that these same applications sometimes had.
              </p>
              <h4>🔭 Where am I going?</h4>
              <p>
                Wherever I can contribute solutions through code. I believe that
                the destination is not a place to arrive, but a way of transit I
                choose those processes where I feel safe but challenged,
                demanded but also cared for and rewarded.
              </p>
              <h4> What technologies and languages do I use?</h4>
              <p>
                JavaScript, HTML, CSS, NodeJS, Express, React, Redux, Sequelize,
                PostgreSQL, MongoDB and Bootstrap.
              </p>
            </Card>
          </div>
        </div>
        <footer className="bg-dark py-4">
          <p className="text-center text-white">
            Copyrigth &copy; Eduardo 2023
          </p>
        </footer>
      </div>
    </>
  );
};

export default About;
