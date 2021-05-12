const MeetupItem = ({ title, image, address, description }) => {
  return (
    <li>
      <div className="">
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div>
        <button>To Favorites</button>
      </div>
    </li>
  );
};

export default MeetupItem;
