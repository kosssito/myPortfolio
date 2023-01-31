import { Card, Carousel, Nav } from "react-bootstrap";
import NavBar from "./NavBar";
import countries1 from "../img/countries1.jpg";
import countries2 from "../img/countries2.jpg";
import countries3 from "../img/countries3.jpg";
import food1 from "../img/Food1.jpg";
import food2 from "../img/Food2.jpg";
import food3 from "../img/Food3.jpg";

const Projects = () => {
  return (
    <>
       <div className="bg-light">
        <NavBar />

        <div className="row">
        <Card className="col-lg m-5 bg-muted text-muted">
            <h2 className="text-center text-secondary">Henrry Restaurant</h2>
            <Carousel className="p-4">
              <Carousel.Item>
                <img className="d-block w-100" src={food1} alt="food1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={food2} alt="food2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={food3} alt="food3" />
              </Carousel.Item>
            </Carousel>
            <p className="">
              Henry's Foods is the final project that we developed in the
              Henry's bootcamp. It is a web application that seeks to integrate
              the purchase flow of a client and the dashboard of the owner of
              the restaurant that uses our web application, without the need to
              outsource processes. You can access our web application creating a
              new user, having to activate the account by entering the link that
              is sent to the corresponding email, or by registering with Google
              or GitHub. From the client side you can see the available menus,
              with their respective details, with the possibility to leave your
              reviews, and add the dishes you want to the shopping cart. There
              we implement a payment gateway integrated with Stripe, which
              reports via email the status of the buy. Meals can be ordered for
              delivery, to eat at the place or to reserve and go on a certain
              date. on the side of Dashboard of the Administrator, it has graphs
              and statistics of the sales, new users, and purchases that are
              made weekly. You can edit, delete, update and create Plates,
              Users, Reviews and manage the status of orders. This Web
              Application It is Responsive and has Dark Mode and Light Mode
              Libraries implemented: • Image upload: Cloudinary • Graphics:
              Chart.js • Sending emails: Nodemailer • Payment gateway: Stripe •
              Login : JSON Web Token The backend was developed with MongoDB,
              Mongoose, Node.js., Express.js The frontend was developed with
              HTML, React.js. Redux, Tailwind.
              <div className="p-2">

              <Nav.Link
              className="text-primary"
              href="https://github.com/kosssito/HenryClient"
            >
              Github Client Repository 
            </Nav.Link>
            <Nav.Link
             className="text-primary"
              href="https://github.com/kosssito/Henry_Restaurant_Back"
            >
              Github Bakend Repository 
            </Nav.Link>
              </div>
            </p>
            <Nav.Link
              className="text-primary text-center"
              href="https://main-henry-client.vercel.app/"
            >
              Go to page project
            </Nav.Link>
          </Card>
          <Card className="col-lg m-5 bg-muted text-muted">
            <h2 className="text-center text-secondary">Countries</h2>
            <Carousel className="p-4">
              <Carousel.Item>
                <img className="d-block w-100" src={countries1} alt="food1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={countries2} alt="food2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={countries3} alt="food3" />
              </Carousel.Item>
            </Carousel>
            <p className="m-4">
              Develop a Web page using PostgreSQL | Sequelize | NodeJS | Express
              | react | Redux | HTML | CSS . The page gets paid from an external
              API and the user can filter/sort by different criteria. The sorts
              are maintained even when applying and removing filters. Also, the
              search results are paged with buttons. On the other hand, there is
              a form for creating tourist activities by the user with fields
              fully validated with JavaScript. In addition, these validations
              also exist in the Back-End, and database. Finally, in terms of
              error handling, they are fully managed both in the back and in the
              front, providing accurate feedback for both the user and the
              developer who manages the project.
              <div className="p-2">
              <Nav.Link
              className="text-primary"
              href="https://github.com/kosssito/Countries-"
            >
              Github Repository
            </Nav.Link>
              </div>
            </p>
            <Nav.Link
              className="text-primary text-center"
              href="https://pi-cliente-countries-oqa6lrgzq-kosssito.vercel.app/"
            >
              Go to page project
            </Nav.Link>
          </Card>
        </div>
      </div>
      <footer className="bg-dark py-5">
        <p className="text-center text-white">Copyrigth &copy; Eduardo 2023</p>
      </footer>
    </>
  );
};

export default Projects;
