import profileImage from "../assets/perfil.png";

function HomePage(): JSX.Element {
  return (
    <div>
      <h1>About</h1>
      <img className="img-artist" src={profileImage} alt="artist" />
    </div>
  );
}

export default HomePage;
