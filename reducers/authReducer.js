import jwt from "jsonwebtoken";

// Initial State
const initialState = {
  Token: null,
  UserInfo : null
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
        Token: action.Token,
        UserInfo: jwt.decode(action.Token.getAuthResponse().id_token)
      };
    }
    //SignOut
    case 'LOG_OUT': {
      return {
        // State
        state,
        // Redux Store
        Token: action.Token,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};
