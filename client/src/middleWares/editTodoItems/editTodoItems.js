import { taskItemsSlice } from "../../features/slices/exportSlices";

const apiConfig = {
  url: "https://taskflow-crud.onrender.com/api/todo/",
  user: JSON.parse(localStorage.getItem("user")),
};

const { url, user } = apiConfig;

export const editTodoItems = async (selectedTaskId, dispatch, formData) => {
  try {
    dispatch(taskItemsSlice.actions.setIsloading(true));
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
    dispatch(taskItemsSlice.actions.setCompleted(data.completed));
    dispatch(taskItemsSlice.actions.setUpdated());
  } catch (error) {
    dispatch(taskItemsSlice.actions.setError(error.message));
  }
};
