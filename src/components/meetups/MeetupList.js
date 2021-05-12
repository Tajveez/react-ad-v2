import MeetupItem from "./MeetupItem";
import listCss from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={listCss.list}>
      {meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} meetup={meetup} />;
      })}
    </ul>
  );
};

export default MeetupList;
