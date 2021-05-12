import Card from "../ui/Card/Card";
import itemCss from "./MeetupItem.module.css";
const MeetupItem = ({ meetup }) => {
  const { title, image, address, description } = meetup;
  return (
    <Card>
    <li className={itemCss.list}>
      <div className={itemCss.image}>
        <img src={image} alt={title} />
      </div>
      <div className={itemCss.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className={itemCss.actions}>
        <button>To Favorites</button>
      </div>
    </li>
    </Card>
  );
};

export default MeetupItem;
