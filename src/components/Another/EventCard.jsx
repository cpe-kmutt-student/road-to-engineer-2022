export const EventCard = ({ title, subtitle, image, detail }) => {
  return (
    <div className="card-image bg-black overflow-hidden">
      <img src={image} alt="" className="opacity-30	aspect-video object-cover object-right-bottom scale-150" />
      <div className="card-image-text">
        <h2 className=" text-white text-3xl">{title}</h2>
        <h1 className=" text-white text-2xl">{subtitle}</h1>
        <p className=" text-white">{detail}</p>
      </div>
    </div>
  );
};
