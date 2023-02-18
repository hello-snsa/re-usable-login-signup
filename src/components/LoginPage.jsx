import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { setLogin } from '../store';
import { SET_LOGIN } from '../store/actions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_LOGIN, username, password });
    // dispatch(setLogin({  username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
