import jwtDecode from "jwt-decode";
import { userSlice } from "../../features/slices/exportSlices";

export const authenticateUser = {
  requireUser: (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return;
    }

    dispatch(userSlice.actions.setUser(user));
  },

  handleTokenExpiration: () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return;
    }

    const decodedToken = jwtDecode(user.token);
    const currentTime = Math.floor(Date.now() / 1000);

    function resetUser() {
      if (decodedToken.exp <= currentTime) {
        localStorage.removeItem("user");
      }
    }

    resetUser();
    setInterval(resetUser, 1000);
  },
};
