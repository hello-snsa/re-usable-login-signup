import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Component,path, ...props }) => {
  const accessToken = useSelector((state) => state.authReducer.accessToken);

  return accessToken ? <Outlet /> : <Navigate to="/login" />;


//   return (
//     // <Route path="login" element={<Login />} />
//     // <ProtectedRoute path="profile" component={<Profile />} />
//         accessToken ? (
//     <Route  path={path} element={<Component/>}/>
       
//         ) : (
//           <Navigate to={{ pathname: '/login', state: { from: props.location } }} replace/>
//         )
      

//   );
};

export default ProtectedRoute;
