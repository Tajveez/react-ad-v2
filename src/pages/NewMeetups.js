import MeetupForm from "../components/meetups/MeetupForm"

const NewMeetupsPage = () => {
  function addNewMeetupHandler(meetupData) {
  }

  return (
    <div>
      <h1>New Meetups</h1>
      <MeetupForm onAddMeetup={addNewMeetupHandler} />
    </div>
  );
};

export default NewMeetupsPage;
