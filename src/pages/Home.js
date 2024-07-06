import { useEffect } from 'react';
import { useUserContext } from '../hooks/useUserContext';
//components
import UserDetails from '../components/UserDetails';

import SignUp from '../components/Auth/SignUp';

const Home = () => {
 const{user,dispatch}= useUserContext();

 console.log('User data in Home component:', user);

useEffect(() => {
  console.log('Fetching users..');


  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/router/getUsers');

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      const json = await response.json();
      console.log('Fetched users:', json);
      dispatch({ type: 'SET_USER', payload: json });
    } catch (error) {
      console.error('Error fetching data:', error);}};



   fetchUsers();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="pages">
      <div className="user">
        {user && user.map((user) => (
          <UserDetails key={user._id} user={user} />
        ))}
      </div>
      <SignUp />
    </div>
  );
};

export default Home;
