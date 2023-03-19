import { createContext, useState, useEffect } from 'react';
import { useImmer } from 'use-immer';

export const AuthContext = createContext('');

export const AuthContextProvider = (props) => {
  const [activeUser, setActiveUser] = useImmer({
    name: '',
    id: 0,
    role: '',
  });

  useEffect(() => {
    // easeway.getUserInfo().then(
    //   ui => {
    //     setActiveUser({
    //       name: ui.userName,
    //       id: ui.id,
    //       role: ui.role,
    //     })
    //   })
    //   .catch(() => { })
  }, []);

  return (
    <AuthContext.Provider value={{ activeUser, setActiveUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
