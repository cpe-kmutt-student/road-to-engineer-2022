export const EventCard = ({ title, image, detail }) => {
    return (
      <div className="card-image">
        <img src={image} alt="" />
        <div className="card-image-text">
          <h2 className=" text-white text-3xl">{title}</h2>
          <p className=" text-white">{detail}</p>
        </div>
      </div>
    );
  };