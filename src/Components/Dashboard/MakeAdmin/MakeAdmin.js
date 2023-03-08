import React from 'react';

import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
const MakeAdmin = () => {
  const { token } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch('https://doctors-portal-one.vercel.app/users/admin', {
      method: 'PuT',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert('Successfully made');
          console.log(data);
          reset();
        }
      });
  };
  return (
    <div>
      <h2>make admin</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register('email')} />

        <input value="Make Admin" type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
