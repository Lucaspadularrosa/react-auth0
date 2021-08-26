import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
require('react-json-pretty/themes/monikai.css');

const Profile = () => {
  const { user } = useAuth0(); // user => Json
  return (
    <div>
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.emial}</p>
        <JSONPretty data={user} />
      </div>
    </div>
  );
};

export default Profile;
