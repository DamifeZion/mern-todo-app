import {taskItemsSlice} from '../../features/slices/exportSlices'

const apiConfig = {
  url: "http://localhost:9000/api/todo/",
  user: JSON.parse(localStorage.getItem("user")),
};

const { url, user } = apiConfig;

export const deleteTodoItem = async (dispatch, todoDataId) => {
  try {
    dispatch(taskItemsSlice.actions.setIsloading())
    dispatch(taskItemsSlice.actions.setDeleted(false))
    const res = await fetch(`${url}${todoDataId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await res.json();

    if (!res.ok) {
      return alert(json.message);
    }
    dispatch(taskItemsSlice.actions.setUpdated())
    dispatch(taskItemsSlice.actions.setDeleted(true))
    
  } catch (error) {
    alert(error.message);
  }
};
