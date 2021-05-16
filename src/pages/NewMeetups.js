import MeetupForm from "../components/meetups/MeetupForm"

const NewMeetupsPage = () => {
  function addNewMeetupHandler(meetupData) {
    // Making API call to forward the form data
  }

  return (
    <div>
      <h1>New Meetups</h1>
      <MeetupForm onAddMeetup={addNewMeetupHandler} />
    </div>
  );
};

export default NewMeetupsPage;
