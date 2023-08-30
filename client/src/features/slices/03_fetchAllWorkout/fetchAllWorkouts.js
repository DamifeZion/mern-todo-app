import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: {
    status: false,
    message: "",
  },
};

const fetchWorkoutsSlice = createSlice({
  name: "workoutsSlice",

  initialState,

  reducers: {
    dataReceived: (state, action) => {
      state.data = action.payload;
      state.isLoading = false,
      state.error.status = false;
      state.error.message = "";
    },

    isLoading: (state) => {
      state.isLoading = true;
    },

    error: (state, action) => {
      state.isLoading = false;
      state.error.status = true;
      state.error.message = action.payload;
    },
  },
});

//FETCH ALL DATA FROM DATABASE
const url = "http://localhost:";

createAsyncThunk("fetchAllWorkouts/get", async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

//Fetch from DATABASE when CLIENT POSTS
const reFetchAllWorkouts = async (dispatch) => {
  try {
    dispatch(fetchWorkoutsSlice.actions.isLoading());
    const res = await fetch(url);
    const jsonData = res.json();

    if (res.ok) {
      dispatch(fetchWorkoutsSlice.actions.dataReceived(jsonData));
    }
  } catch (error) {
    dispatch(fetchWorkoutsSlice.actions.error(error));

    //clean the below code post production.
    console.log(error);
    throw new Error(error);
  }
};

export { fetchWorkoutsSlice, reFetchAllWorkouts };
