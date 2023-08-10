import profileImage from "../assets/perfil.png";

function HomePage(): JSX.Element {
  return (
    <div className="container">
      <h1 className="titles">About</h1>

      <div className="about-info">
        <div
          className="card border-dark mb-3 col-md-2 col-sm-6 .col-10"
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
            <figcaption className="blockquote-footer">Johnny Franco</figcaption>
          </figure>
        </div>
      </div>

      <div className="card bg-light mb-3">
        <div className="card-header">Biography</div>
        <div className="card-body">
          <p className="card-text">
            {" "}
            Johnny was born on November 10th (some years ago) in Arrecifes,
            province of Buenos Aires, commonly known as "the Cradle of
            Champions". Since he was a child he stood out with his art,
            generating his reputation among the neighbors of the neighborhood
            and the kids at school.
          </p>
        </div>
      </div>

      <p></p>
    </div>
  );
}

export default HomePage;
