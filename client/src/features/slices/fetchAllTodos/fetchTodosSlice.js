import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoData: [],
  isLoading: false,
  error: false,
};

const fetchTodosSlice = createSlice({
  name: "fetchTodosSlice",

  initialState,

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

    resetData: (state) => {
      state.todoData = [];
    },
  },
});

//FETCH ALL DATA FROM DATABASE
const apiConfig = {
  url: "https://taskflow-crud.onrender.com/api/todo",
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
    if (error.message === "Failed to fetch") console.log("No Internet Connection");
    if (error.message === "Failed to fetch")
      dispatch(fetchTodosSlice.actions.setError("No Internet Connection"));
  }
};

export { fetchTodosSlice, reFetchAllTodos };
