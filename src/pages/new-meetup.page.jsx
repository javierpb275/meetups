import NewMeetupForm from "../components/meetups/new-meetup-form.component";
import { useHistory } from "react-router-dom";

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch("https://meetups-45992-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
