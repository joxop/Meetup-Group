import classes from './MeetUpItem.module.css'


//step 2 takes the props and uss the inofrmation what we see on page
function MeetUpItem(props) {
  return (<li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.content}>
        <button className={classes.actions}> To Favoritess </button>
      </div>
    </li>
  );
}

export default MeetUpItem;
