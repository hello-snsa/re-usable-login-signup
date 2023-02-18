import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [email, setEmail] = useState('');
  const accessToken = useSelector(state => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      fetch('http://localhost:3001/profile', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(res => res.json())
      .then(data => setEmail(data.email))
      .catch(error => console.log(error));
    }
  }, [accessToken]);

  return (
    <div>
      <h1>Welcome</h1>
      <p>Your email is {email}</p>
    </div>
  );
};

export default Profile;
