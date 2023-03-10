import './App.css';
import Router from './routes/Router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REFRESH_TOKEN } from './store/actions';
import { Link } from 'react-router-dom';


function App() {

    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.authReducer.accessToken);
  
    useEffect(() => {
      if (accessToken) {
        // set up interval to refresh token before it expires
        const interval = setInterval(() => {
          dispatch({ type: REFRESH_TOKEN });
        }, 1000 * 60 * 10);
  
        return () => clearInterval(interval);
      }
    }, [accessToken, dispatch]);

  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <Router />
    </div>
  );
}

export default App;
