import { useEffect, useState } from 'react';

export const LoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const check = async () => {
      const test = await fetch('/test/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        cache: 'default',
      });

      const result = await test.json();
      setLoggedIn(result && result.status);
    };
    check();
  }, []);

  return (
    <>
      {loggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <p>You are not logged in, <a href="/api/admin">log in now.</a></p>
      )}
    </>
  );
};
