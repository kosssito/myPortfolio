import vector from "../img/vector.png";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {


const handleClick = (e)=>{
  console.log(e.target)
}
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <nav>
            <Link onClick={handleClick} className="icon" to="">Menu</Link>
            <div className="links one" id="links">
              <Link to="./home">Home</Link>
              <Link to="./about">About</Link>
              <Link to="./skills">Skills</Link>
              <Link to="./projects">Projects</Link>
              <Link to="./Contact">Contact</Link>
            </div>
          </nav>
          <div className={style.text}>
            <h1>Eduardo</h1>
            <h2>Full Stack Developer</h2>
            <div className={style.animacion}>
              HTML - CSS - React - Redux, API Rest - Node Js - Express ,
              Sequelize - Mongoose - Git , SQLite - PostgreSql - MongoDb, Git
              Flow - JSON Web Token (JWT)
            </div>
          </div>
          <img className={style.img} src={vector} alt="img vector" />
        </div>
      </header>
      <div className={style.space}></div>
      {/* <div className={style.wave}>
        <div style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-0.00,49.85 C149.77,156.98 282.39,-93.99 500.00,49.85 L500.00,149.60 L-2.03,150.09 Z"
              style={{ stroke: "none", fill: "#fff" }}
            ></path>
          </svg>
        </div>
      </div> */}
    </>
  );
};

export default Landing;
