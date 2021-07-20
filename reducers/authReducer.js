
// Initial State
const initialState = {
  UserData: null,
  // UserInfo : null
};

// Reducers (Modifies The State And Returns A New State)
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'LOGIN': {
      return {
        // State
        ...state,
        // Redux Store
        UserData: action.UserData,
      };
    }
    //SignOut
    case 'LOG_OUT': {
      return {
        // State
        state,
        // Redux Store
        UserData: null,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};
