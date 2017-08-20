import React from 'react';

// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/storage';

import './App.css';

// Firebase config
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
};
firebase.initializeApp(config);

const filenames = [
  '1.gif',
  '2.gif',
  '3.gif',
  '4.gif',
  '5.gif',
  '6.gif',
  '7.gif',
  '8.gif',
  '9.gif',
  '10.gif',
  '11.gif',
  '12.gif'
];

const storage = firebase.storage();
const storageRef = storage.ref();
const bucket = storageRef.child('fall-event-2017');

const getImageUrls = async (filenames) => {
  return await Promise.all(await filenames.map(async (filename) => {
    const url = await bucket.child(filename).getDownloadURL();
    return url;
  }));
};

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      urls: []
    };
  }

  async componentDidMount () {
    const urls = await getImageUrls(filenames);
    this.setState({ urls });
  }

  render () {
    return (
      <div className='images'>
        {this.state.urls.map((image, index) => {
          return <div className='image' key={index}><img src={image} alt='placeholder kitten' /></div>;
        })}
      </div>
    );
  }
}
