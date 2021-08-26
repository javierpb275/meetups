import NewMeetupForm from "../components/meetups/new-meetup-form.component";

const NewMeetupPage = () => {
  const addMeetupHandler = (meetupData) => {
    fetch("https://meetups-45992-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
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
