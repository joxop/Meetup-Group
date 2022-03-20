// import classes from "./MeetUPList.module.css";
import MeetUpItem from "./MeetUpItem";

function MeetupList(props) {
  return (
    <ul className="list">
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          descriptopn={meetup.description}
        />
        ))}
    </ul>
  );
}

export default MeetupList;
