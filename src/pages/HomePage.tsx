import { Link } from "react-router-dom";
import logo from "../assets/logo_name.png";
import profileImage from "../assets/perfil.png";

function HomePage(): JSX.Element {
  return (
    <div className="container ">
      <section className="container ">
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

      <section className="">
        <div className="about-info">
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
          <div
            className="card border-light mb-3 col-md-2 col-sm-6 col-10"
            id="profile-img"
          >
            <img className="img-artist" src={profileImage} alt="artist" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
