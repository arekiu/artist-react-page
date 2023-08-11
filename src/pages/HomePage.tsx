import { Link } from "react-router-dom";
import logo from "../assets/logo_name.png";
import profileImage from "../assets/perfil.png";
import iconAll from "../assets/icon-all.png";

function HomePage(): JSX.Element {
  return (
    <div className="container ">
      <section className="container " id="section-first">
        <h1 className="titles">Welcome</h1>

        <div className="divided-container">
          <div className=" mb-3 col-md-4 col-sm-6 col-10" id="profile-img">
            <img
              className="img-artist"
              id="home-image"
              src={logo}
              alt="Johnny logo"
            />
          </div>

          <div className="text-container text-center mb-3 col-md-4 col-sm-6 col-10">
            <h2>"The art born from a dreamer's soul."</h2>
            <p>
              Step into an artistic realm where emotions come to life with every
              stroke. Our versatile artist employs an array of techniques – from
              pen, pencil, paint, and pyrography, to digital art. Each creation
              is a visual narrative that resonates deep within. Immerse yourself
              in this captivating gallery, where traditional meets modern, and
              art becomes a personal journey.
            </p>
            <p>
              {" "}
              If you're drawn to their art, you have the unique opportunity to
              own a custom piece. Connect with the artist and bring your vision
              to life.
            </p>

            <Link to="/contact">
              <button type="button" className="btn btn-outline-primary btn-lg">
                Contact me
              </button>{" "}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="alert alert-dismissible alert-primary text-white bg-primary"
        id="section-gallery"
      >
        <div className="divided">
          <div className="divided-vertical  col-md-6 col-sm-12 col-12 text-center">
            <h3 id="home-text">Take a Look to the Gallery!</h3>
            <p>
              {" "}
              Step inside the virtual gallery and experience the diverse world
              of creativity going from pen and pencil sketches to vibrant
              painted pieces and even mesmerizing pyrography creations
            </p>
            <Link to="/gallery">
              <button id="gallery-btn" type="button" className="btn btn-light">
                Take me there!
              </button>
            </Link>
          </div>
          <div className=" col-md-3 col-sm-5 col-6">
            <img className="img-artist" src={iconAll} alt="icon gallery" />
          </div>
        </div>
      </section>

      <section className="">
        <div className="about-info">
          <div
            className="card border-light mb-3 col-md-2 col-sm-6 col-7"
            id="profile-img"
          >
            <img className="img-artist" src={profileImage} alt="artist" />
          </div>
          <div className="quote">
            <figure className="text-end">
              <blockquote className="blockquote">
                <p className="mb-0">
                  I was born, I drew. I think I'm going to die someday XD
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Johnny Franco
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
