export const Login = (googleUser) => (
    {
      type: 'LOGIN',
      Token: googleUser,
    }
  );

  export const LogOut = () => (
    {
      type: 'LOG_OUT',
      Token: null,
    }
  );