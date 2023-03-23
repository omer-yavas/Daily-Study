import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'cars',
  initialState: { cars: [] },
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    deleteCar: (state, action) => {
      const index = state.cars.findIndex((car) => car.id === action.payload);
      state.cars.splice(index, 1);
    },
  },
});

export const { addCar, deleteCar } = carSlice.actions;

export default carSlice;
