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