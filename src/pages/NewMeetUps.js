import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetUpsPage() {
  const navigate = useNavigate()
  function addMeetUpHandler(meetupData) {
    fetch(
      "https://react-meetup-app-ec879-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "content-type": "application/json" },
      }
    ).then(()=>{navigate('/', {replace:true})})
  }

  return (
    <section>
      <h1>Add New Meetup </h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetUpsPage;
