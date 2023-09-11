import jwtDecode from "jwt-decode";
import { userSlice } from "../../features/slices/exportSlices";

export const authenticateUser = {
  handleUserExistence: (dispatch, navigate) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return;
    }

    dispatch(userSlice.actions.setUser(user));
    navigate("/dashboard/myday");
  },

  handleTokenExpiration: () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return;
    }

    //token key from the local storage
    const decodedToken = jwtDecode(user.token);
    const currentTime = Math.ceil(Date.now() / 1000);

    function resetUser() {
      if (currentTime > decodedToken.exp) {
        localStorage.removeItem("user");
      }
    }

    resetUser();
    setInterval(resetUser, 1000);
  },
};
