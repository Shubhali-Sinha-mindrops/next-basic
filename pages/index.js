//import { useEffect, useState } from 'react';
import { Fragment } from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {               //here, this useEffect run after the execution of component function. It means that loadedMeetups is empty at first time and then the state changed.
  //     setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  //return <MeetupList meetups={loadedMeetups} />

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {        //This code will always run on the server.
//     //fetch data from an API
//     //this async function gurantees to run for every request.But in this we have to wait until page regenerated fior every request.
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// };      //this function will not run during the build process, but instead always on the server after deployment.

export async function getStaticProps() {
  //this method return a promise since it is async and it will exceute first before the component function to load the data and send it to the component function through props.
  //fetch data from an API/ database
  //It make the page to run faster than serversideprops function just above and an alternate for this method.

  const client = await MongoClient.connect(
    "mongodb+srv://ShubhaliSinha:*123Sinha@cluster0.lc8qw.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    //data fetch for pre-Rendering and it will always return an object with a props key.
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(), //this will convert this value in a meaningful string which can be used later.
      })),
    },
    revalidate: 1, //it is in seconds....to save the site from old data.This page will re-generated after the time mentioned after the deploy of the site.
  };
}

export default HomePage;

//npm run build is a command need to run before deploy nextjs sites.



//https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg