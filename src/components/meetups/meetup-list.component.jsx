import MeetupItem from "./meetup-item.component";
import "./meetup-list.styles.css";

const MeetupList = (props) => {
  return (
    <ul className="list">
      {props.meetups.map((meetup) => (
        <MeetupItem
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
};

export default MeetupList;
