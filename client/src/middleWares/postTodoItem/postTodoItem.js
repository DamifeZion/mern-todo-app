import { addTaskSlice } from "../../features/slices/exportSlices";

export const postTodoItem = async (title, dispatch) => {
  const apiConfig = {
    url: "http://localhost:9000/api/todo",
    user: JSON.parse(localStorage.getItem("user")),
  };

  const { url, user } = apiConfig;

  try {
    dispatch(addTaskSlice.actions.setIsLoading());
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({title}),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await res.json();

    if (!res.ok) {
      return dispatch(addTaskSlice.actions.setError(json.message));
    }
    dispatch(addTaskSlice.actions.setSuccess());
  } catch (error) {
    dispatch(addTaskSlice.actions.setError(error.message));
  }
};
