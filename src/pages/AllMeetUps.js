import MeetupList from "../components/meetups/MeetUpList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ortler_Ascent_-_South_Tyrol.jpg/800px-Ortler_Ascent_-_South_Tyrol.jpg",
    address: "meetupstreet 5, 12345 meetup city",
    description:
      "thisisa first amaing meetup which you definitely shoul not MediaSession.",
  },
  {id: "m2",
  title: "This is a second meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/01_Calanche_Piana.jpg/500px-01_Calanche_Piana.jpg",
  address: "meetupstreet 5, 12345 meetup city",
  description:
    "thisisa second amaing meetup which you definitely shoul not MediaSession.",},
];

function AllMeetUpsPage() {
  return <section>
<h1>All Meetups</h1>

<MeetupList meetups={DUMMY_DATA} />
</section>
{/* <ul>
{DUMMY_DATA.map((meetup)=>{
    return<li key={meetup.id}>{meetup.title}</li>
})}
</ul> */}

//   <div>All Meet Ups Page</div>;
//{[<li>Item1</li>, <li>Item2</li>]}


;}

export default AllMeetUpsPage;
