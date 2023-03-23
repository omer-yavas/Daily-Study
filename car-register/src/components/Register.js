import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../store/carSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [category, setCategory] = useState('');

  const registerHandler = () => {
    const random = Math.random();
    dispatch(addCar({ brand, model, age, weight, category, id: random }));
  };

  return (
    <>
      <h2>Register your Car!</h2>
      <label>
        Brand
        <input onChange={(event) => setBrand(event.target.value)}></input>
      </label>
      <label>
        Model
        <input onChange={(event) => setModel(event.target.value)}></input>
      </label>
      <label>
        Age
        <input onChange={(event) => setAge(event.target.value)}></input>
      </label>
      <label>
        Weight
        <input onChange={(event) => setWeight(event.target.value)}></input>
      </label>
      <label>
        Category
        <input onChange={(event) => setCategory(event.target.value)}></input>
      </label>
      <button onClick={registerHandler}>Add</button>
    </>
  );
};

export default Register;
