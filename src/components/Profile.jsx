import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [email, setEmail] = useState('');
  const {accessToken,refreshToken} = useSelector(state => state.authReducer);
  console.log("accessToken now",accessToken)
    console.log("refreshTokens now",refreshToken)

  useEffect(() => {
    if (accessToken) {
      axios.get('http://localhost:3002/profile',{
     
      headers: {
        
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => res.data)
      .then(data =>setEmail(data.email))
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
