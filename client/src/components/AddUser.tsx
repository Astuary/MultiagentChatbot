import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../graphql/mutations';

const AddUser: React.FC = () => {
  const [ addUser, { loading, data, error } ] = useMutation(ADD_USER);

  const initState = {
    username: '',
    email: '',
    password: ''
  };
  const [state, setState] = useState(initState);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({ variables: { ...state } });

    if (!loading) {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        console.log(AddUser);
        setState(initState);
      }
    }
  };

  return (<>
    <form onSubmit={submitHandler}>
      <input onChange={changeHandler} value={state.username} type="text" name="username" id="username" placeholder="Username" />
      <input onChange={changeHandler} value={state.email} type="email" name="email" id="email" placeholder="Email" />
      <input onChange={changeHandler} value={state.password} type="password" name="password" id="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  </>);
};

export default AddUser;