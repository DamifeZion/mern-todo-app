import { taskItemsSlice } from "../../features/slices/exportSlices";

const apiConfig = {
  url: "http://localhost:9000/api/todo/",
  user: JSON.parse(localStorage.getItem("user")),
};

const { url, user } = apiConfig;

export const editTodoItems = async (
  selectedTaskId,
  dispatch,
  formData,
) => {
  try {
    const res = await fetch(`${url}${selectedTaskId}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (!res.ok) {
      return dispatch(taskItemsSlice.actions.setError(data.message));
    }
    const data = res.json();
  } catch (error) {
    dispatch(taskItemsSlice.actions.setError(error.message));
  }
};
