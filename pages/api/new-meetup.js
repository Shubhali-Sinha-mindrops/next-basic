import { MongoClient } from 'mongodb';
// /api/new-meetup
// POST /api/new-meetup

async function reqhandler(req, res) {
  if(req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://ShubhaliSinha:*123Sinha@cluster0.lc8qw.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
};

export default reqhandler;

//API-ROUTE code.
//This page will contain server side code because it will run on the server.
//This code will never exposed to the client.

