import classes from './MeetUpItem.module.css'

function MeetUpItem(props) {
  return (<li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.descriptioin}</p>
      </div>
      <div>
        <button className={classes.actions}> To Favoritess </button>
      </div>
    </li>
  );
}

export default MeetUpItem;
