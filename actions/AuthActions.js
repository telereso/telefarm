export const Login = (UserData) => (
    {
      type: 'LOGIN',
      UserData: UserData,
    }
  );

  export const LogOut = () => (
    {
      type: 'LOG_OUT',
      UserData: null,
    }
  );

  export const LoginSession = (UserDataSession) => (
    {
      type: 'LOGIN_SESSION',
      UserDataSession: UserDataSession,
    }
  );

  export const LogOutSession = () => (
    {
      type: 'LOG_OUT_SESSIONS',
      UserDataSession: null,
    }
  );