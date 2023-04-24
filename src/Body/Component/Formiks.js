import React from 'react';
import { useForm } from 'react-hook-form';

export function Formiks() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile_number", {required: true, minLength: 6, maxLength: 12})} />
      {errors.Email && <p>This Email is required</p>}
      <input type="submit" />
    </form>
  );
}