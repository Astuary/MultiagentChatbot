import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './graphql/queries';
import { User } from './models/User';
import AddUser from './components/AddUser';

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  console.log(data);
  
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
  return <div>{ error.message }</div>;
  } else {
  return (<>
    <ul>
      {
        data.allUsers.map((user: User, idx: number) => <li key={idx}>{ user.username }</li>)
      }
    </ul>
    <AddUser />
  </>);
  }
};

export default App;