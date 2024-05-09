import { createAsyncThunk } from '@reduxjs/toolkit';

import fetchCars from '../../services/api';

export const getAllCarsThunk = createAsyncThunk(
  'cars/fetchCars',
  async (params, thunkApi) => {
    try {
      const response = await fetchCars(params);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
