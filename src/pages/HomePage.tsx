import animation from "../assets/animation.gif";

function HomePage(): JSX.Element {
  return (
    <div className="container">
      <h1 className="titles">Welcome</h1>

      <div
        className="card border-dark mb-3 col-md-2 col-sm-6 col-10"
        id="profile-img"
      >
        <img className="img-artist" src={animation} alt="Johnny draws" />
      </div>
    </div>
  );
}

export default HomePage;
