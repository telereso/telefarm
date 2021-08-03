
// Initial State
const initialState = {
    UserDataSession: null,
  };
  
  // Reducers (Modifies The State And Returns A New State)
  export const sessionAuthReducer = (state = initialState, action) => {
    switch (action.type) {
      // Login
      case 'LOGIN_SESSION': {
        return {
          // State
          ...state,
          // Redux Store
          UserDataSession: action.UserDataSession,
        };
      }
      //SignOut
      case 'LOG_OUT_SESSIONS': {
        return {
          // State
          state,
          // Redux Store
          UserDataSession: null,
        };
      }
      // Default
      default: {
        return state;
      }
    }
  };
  