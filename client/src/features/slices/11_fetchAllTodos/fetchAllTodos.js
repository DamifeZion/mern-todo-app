import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: {
    status: false,
    message: "",
  },
};

const fetchTodosSlice = createSlice({
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
const reFetchAllTodos = async (dispatch) => {
  try {
    dispatch(fetchTodosSlice.actions.isLoading());
    const res = await fetch(url);
    const jsonData = res.json();

    if (res.ok) {
      dispatch(fetchTodosSlice.actions.dataReceived(jsonData));
    }
  } catch (error) {
    dispatch(fetchTodosSlice.actions.error(error));

    //clean the below code post production.
    console.log(error);
    throw new Error(error);
  }
};

export { fetchTodosSlice, reFetchAllTodos };
