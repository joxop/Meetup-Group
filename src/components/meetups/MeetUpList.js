import classes from "./MeetUpList.module.css";
import MeetUpItem from "./MeetUpItem";

//step 1 this gets information from DUMMY_DATA object, key,id, image is a prop 
//for meetupitem
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
        ))}
    </ul>
  );
}

export default MeetupList;
