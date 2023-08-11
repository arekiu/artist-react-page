import iconBrush from "../assets/icon-brush.png";
import iconDigital from "../assets/icon-digital.png";
import iconPen from "../assets/icon-pen.png";
import iconPencil from "../assets/icon-pencil.png";
import iconPirograf from "../assets/icon-pirograf.png";

function GalleryPage(): JSX.Element {
  return (
    <div className="container">
      <h1 className="titles">Gallery</h1>

      <div className="icons text-center">
        <div className="single-icon text-center col-md-1 col-sm-2 col-3">
          <img className="img-artist" src={iconBrush} alt="Brush icon" />
          <h5>Paint</h5>
        </div>
        <div className="single-icon text-center col-md-1 col-sm-2 col-3">
          <img className="img-artist" src={iconDigital} alt="Digital icon" />
          <h5>Digital</h5>
        </div>
        <div className="single-icon text-center col-md-1 col-sm-2 col-3">
          <img className="img-artist" src={iconPen} alt="Pen icon" />
          <h5>Pen</h5>
        </div>
        <div className="single-icon text-center col-md-1 col-sm-2 col-3">
          <img className="img-artist" src={iconPencil} alt="Pencil icon" />
          <h5>Pencil</h5>
        </div>
        <div className="single-icon text-center col-md-1 col-sm-2 col-3">
          <img
            className="img-artist"
            src={iconPirograf}
            alt="Pirography icon"
          />
          <h5>Pirography</h5>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
