import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchTodosSlice = createSlice({
  name: "fetchTodosSlice",

  initialState: {
    todoData: [],
    isLoading: false,
    error: false,
  },

  reducers: {
    dataReceived: (state, action) => {
      state.todoData = action.payload;
      state.isLoading = false;
      state.error = false;
    },

    setIsLoading: (state) => {
      state.isLoading = true;
    },

    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//FETCH ALL DATA FROM DATABASE
const apiConfig = {
  url: "http://localhost:9000/api/todo",
  user: JSON.parse(localStorage.getItem("user")),
};

const { user, url } = apiConfig;

createAsyncThunk("fetchAllTodo/GET", async () => {
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    throw error.message;
  }
});

const reFetchAllTodos = async (dispatch) => {
  try {
    dispatch(fetchTodosSlice.actions.setIsLoading(true));

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    const json = await res.json();

    if (!res.ok) {
      return dispatch(fetchTodosSlice.actions.setError(json.message));
    }

    dispatch(fetchTodosSlice.actions.dataReceived(json));
  } catch (error) {
    dispatch(fetchTodosSlice.actions.setError(error.message));
  }
};

export { fetchTodosSlice, reFetchAllTodos };
