import { useHistory } from "react-router-dom";
import MeetupForm from "../components/meetups/MeetupForm";

const NewMeetupsPage = () => {
  const history = useHistory();
  function addNewMeetupHandler(meetupData) {
    // Making API call to forward the form data
    fetch("https://react-demo-ebfd9-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <h1>New Meetups</h1>
      <MeetupForm onAddMeetup={addNewMeetupHandler} />
    </div>
  );
};

export default NewMeetupsPage;
